import LoadingImg from '../Loading/LoadingImg'
import LoadingSkeleton from '../Loading/LoadingSkeleton'

const RoomSimpleSkeleton = () => {
  return (
    <tr className='dark:!border-borderColor/20'>
      <td className='vam dark:bg-midnight'>
        <div className='listing-style1 dashboard-style d-xxl-flex align-items-center !mb-0 dark:bg-midnight'>
          <div className='list-thumb'>
            <LoadingImg className='!w-[110px] !h-[90px]' />
          </div>
          <div className='list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4 w-[190px]'>
            <div className='h6 list-title mb-2'>
              <LoadingSkeleton className='w-full h-[15px]' />
            </div>
            <LoadingSkeleton className='w-4/5 h-[15px] mb-1' />
            <div className='list-price dark:bg-midnight'><LoadingSkeleton className='w-3/5 h-[18px]' /></div>
          </div>
        </div>
      </td>
      <td className='vam dark:bg-midnight'>
        <LoadingSkeleton className='w-[102px] h-[25.9px]' />
      </td>
      <td className='vam dark:bg-midnight'>
        <LoadingSkeleton className='w-2/5 h-[25.9px]' />
      </td>
      <td className='vam dark:bg-midnight'>
        <div className='flex space-x-4' />
      </td>
    </tr>
  )
}

export default RoomSimpleSkeleton
