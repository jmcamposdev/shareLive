import React from 'react'
import { getImageURL } from '../../../utils/image-util'
import { Link } from 'react-router-dom'

const ContactWithAgent = ({ user }) => {
  if (!user) return null
  const avatarImage = user.avatar !== '' ? user.avatar : getImageURL('users/defaultAvatar.jpg')
  // Calcular la media de las calificaciones
  const totalReviews = user.reviews.length
  const averageRating =
    totalReviews > 0
      ? user.reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews
      : 0

  return (
    <>
      <div className='agent-single d-sm-flex align-items-center pb25'>
        <div className='single-img mb30-sm'>
          <img
            src={avatarImage}
            alt={`${user.firstName} ${user.lastName}`}
            className='bdrs8 rounded-full'
            style={{ width: '90px', height: '90px' }}
          />
        </div>
        <div className='single-contant ml20 ml0-xs'>
          {/* Muestra el nombre del propietario */}
          <h6 className='title mb-[10px]'>
            {user.firstName} {user.lastName}
          </h6>
          <div className='agent-meta d-md-flex align-items-center'>
            {/* Muestra el número de teléfono del propietario */}
            <a className='text fz15' href={`tel:${user.phone}`}>
              <i className='flaticon-call pe-1' />
              {user.phone || 'No phone'}
            </a>
          </div>
          <span>
            <i className='fas fa-star text-[#efcb0e] fz13' />
            {'  '}
            {averageRating.toFixed(1)} - {totalReviews} Reviews
          </span>
          {/* Puedes agregar aquí las reseñas del propietario si lo deseas */}
        </div>
      </div>
      {/* Fin de agent-single */}

      <div className='d-grid'>
        {/* El enlace puede dirigirse a la página del agente o a un formulario de contacto */}
        <Link to={`/agent-single/${user._id}`} className='ud-btn btn-white2'>
          Contact Owner
          <i className='fal fa-arrow-right-long' />
        </Link>
      </div>
    </>
  )
}

export default ContactWithAgent
