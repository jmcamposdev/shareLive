import { Link } from 'react-router-dom'
import { UserPropTypes } from '../../../models/User.model'
import { getAvatarImage } from '../../../utils/user.utils'
import UserReviewsStats from '../SingleUser/UserReviewsStats'

const ContactWithAgent = ({ user }) => {
  return (
    <>
      <div className='agent-single d-sm-flex align-items-center pb25'>
        <div className='single-img mb30-sm'>
          <img
            src={getAvatarImage(user.avatar)}
            alt={`${user.firstName} ${user.lastName}`}
            className='bdrs8 rounded-full'
            style={{ width: '90px', height: '90px' }}
          />
        </div>
        <div className='single-contant ml20 ml0-xs'>
          {/* Muestra el nombre del propietario */}
          <h6 className='title mb-[10px] dark:text-white'>
            {user.firstName} {user.lastName}
          </h6>
          <div className='agent-meta d-md-flex align-items-center'>
            {/* Muestra el número de teléfono del propietario */}
            <a className='text fz15 dark:text-white dark:hover:text-orangePrimary' href={`tel:${user.phone}`}>
              <i className='flaticon-call pe-1 ' />
              {user.phone || 'No phone'}
            </a>
          </div>
          <UserReviewsStats reviews={user.reviews} />
          {/* Puedes agregar aquí las reseñas del propietario si lo deseas */}
        </div>
      </div>
      {/* Fin de agent-single */}

      <div className='d-grid'>
        {/* El enlace puede dirigirse a la página del agente o a un formulario de contacto */}
        <Link to={`/users/${user._id}`} className='ud-btn btn-white2'>
          Contact Owner <i className='fal fa-arrow-right-long' />
        </Link>
      </div>
    </>
  )
}

ContactWithAgent.propTypes = {
  user: UserPropTypes.isRequired
}

export default ContactWithAgent
