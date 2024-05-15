import PropTypes from 'prop-types'

const DialogConfirmDel = ({ titulo, texto1, texto2, accionPrincipalLabel, accionDescartarLabel, onAccionPrincipal, onAccionDescartar, onHide, visible, children, size }) => {
  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${visible ? 'block' : 'hidden'}`}>
      <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        <div className='fixed inset-0 transition-opacity'>
          <div className='absolute inset-0 bg-gray-500 opacity-75' />
        </div>

        <span className='hidden sm:inline-block sm:align-middle sm:h-screen' />&#8203;

        <div className='inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
          <div className='absolute top-0 right-0 pt-2 pr-2'>
            <button onClick={onHide} className='text-gray-500 hover:text-gray-700 focus:outline-none'>
              <i className='fas fa-times text-base' />
            </button>
          </div>
          <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <div className='sm:flex sm:items-start'>
              <div className='mt-3 text-center sm:mt-0 sm:text-left'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>{titulo}</h3>
                <div className='mt-2'>
                  {texto1 && <p className='text-sm text-gray-500'>{texto1}</p>}
                  {texto2 && <p className='text-sm text-gray-500'>{texto2}</p>}
                  {children}
                </div>
              </div>
            </div>
          </div>
          <div className='px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-5'>
            <button
              onClick={onAccionPrincipal}
              type='submit' className='ud-btn text-white dark:border-[#dddddd26] cursor-pointer bg-red-500 before:bg-[#c93939] hover:bg-red-500'
            >{accionPrincipalLabel}<i className='fal fa-arrow-right-long' />
            </button>
            <button
              onClick={onAccionDescartar}
              className='ud-btn btn-white2 dark:text-white'
              type='button'
            >{accionDescartarLabel}<i class='fal fa-arrow-right-long' />
            </button>

          </div>
        </div>
      </div>
    </div>

  )
}

DialogConfirmDel.propTypes = {
  titulo: PropTypes.string,
  texto1: PropTypes.string,
  texto2: PropTypes.string,
  accionPrincipalLabel: PropTypes.string,
  accionDescartarLabel: PropTypes.string,
  onAccionPrincipal: PropTypes.func,
  onAccionDescartar: PropTypes.func,
  onHide: PropTypes.func,
  visible: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.string
}

export default DialogConfirmDel
