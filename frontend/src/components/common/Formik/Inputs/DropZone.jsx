import React, { useEffect, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import uploadRoomsSvg from '../../../../assets/vectors/uploadRoomPicture.svg'
import TextError from './TextError'
import { ErrorMessage } from 'formik'

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '50px 0 50px 0',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
}

const focusedStyle = {
  borderColor: '#EB6753'
}

const acceptStyle = {
  borderColor: '#EB6753'
}

const rejectStyle = {
  borderColor: '#ff1744'
}

const MAX_FILES = 5

function DropZone ({ name, value, onChange }) {
  const [allFiles, setAllFiles] = useState(value || [])

  useEffect(() => {
    // Extract the URLs of the images if we are in edit mode
    const uploadedImages = allFiles.filter(file => typeof file === 'string')
    // Filter the rest of the files
    const newFiles = allFiles.filter(file => typeof file !== 'string').map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }))
    setAllFiles([...newFiles, ...uploadedImages])
  }, [])

  useEffect(() => {
    onChange(allFiles)
  }, [allFiles])

  const onDrop = (acceptedFiles) => {
    if (allFiles.length + acceptedFiles.length > MAX_FILES) {
      return
    }

    const newFiles = acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }))

    const allFilesUpdated = [...allFiles, ...newFiles]
    setAllFiles(allFilesUpdated)
  }
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    open
  } = useDropzone({ accept: { 'image/*': [] }, maxFiles: 3, onDrop })

  const deleteFile = (file) => {
    let newFiles = []
    if (typeof file === 'string') {
      newFiles = allFiles.filter((f) => f !== file)
    } else {
      newFiles = allFiles.filter((f) => f?.path !== file.path)
    }
    setAllFiles(newFiles)
  }

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ])

  const thumbs = allFiles.map((file) => (
    <div
      className='relative'
      key={file?.name || file}
    >
      <img
        className='object-cover w-[170px] h-[170px] rounded-lg'
        src={file?.preview || file}
        // Revoke data uri after image is loaded
        onLoad={() => { URL.revokeObjectURL(file.preview) }}
      />
      <button
        type='button'
        onClick={() => deleteFile(file)}
        className='absolute top-1 right-1 p-2 bg-white rounded-full w-11 h-11 hover:bg-orangePrimaryLightHover hover:text-white dark:bg-midnight dark:hover:bg-orangePrimaryLightHover'
      >
        <i className='fa-solid fa-trash dark:text-white ' />
      </button>
    </div>
  ))

  return (
    <div className='flex flex-col gap-8'>
      <div {...getRootProps({ style })} className='bg-[#fafafa]  dark:bg-lightmidnight'>
        <input {...getInputProps()} />
        <img className='pb-8 dark:invert' src={uploadRoomsSvg} alt='Upload Svg' />
        <h5 className='dark:text-white'>Upload photos of your room</h5>
        <p className='m-0 dark:text-white'>Photos must be JPEG or PNG format and smaller than 5MB</p>
        <button
          type='button'
          onClick={open}
          className='mt-8 text-[initial] ud-btn btn-transparent mr0-xs clear-start dark:border-white dark:hover:border-[#eb6753] dark:text-white'
        >
          Browse Files
          <i className='fal fa-arrow-right-long' />
        </button>
      </div>
      <div className='flex gap-4'>
        {thumbs}
      </div>
      <div className='text-center'>
        <TextError>
          <ErrorMessage name={name} />
        </TextError>
      </div>
    </div>
  )
}

export default DropZone
