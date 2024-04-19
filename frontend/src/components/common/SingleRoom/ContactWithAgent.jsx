import React from "react";
import { getImageURL } from "../../../utils/image-util";
import { Link } from "react-router-dom";

const ContactWithAgent = ({ user }) => {
  // Extraer las revisiones del propietario
  const reviews = user.reviews || [];

  // Calcular la media de las calificaciones
  const totalReviews = reviews.length;
  const averageRating =
    totalReviews > 0
      ? reviews.reduce((total, review) => total + review.reviewRate, 0) /
        totalReviews
      : 0;

  return (
    <>
      <div className="agent-single d-sm-flex align-items-center pb25">
        <div className="single-img mb30-sm">
          {/* Si estás utilizando Next.js, utiliza el componente Image en lugar de <img> */}
          {/* <Image src={owner.avatar} alt="Avatar" width={100} height={100} className="bdrs8" /> */}
          <img
            src={getImageURL(user.avatar)}
            alt={`${user.firstName} ${user.lastName}`}
            className="bdrs8 rounded-full"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div className="single-contant ml20 ml0-xs">
          {/* Muestra el nombre del propietario */}
          <h6 className="title mb-[10px]">
            {user.firstName} {user.lastName}
          </h6>
          <div className="agent-meta d-md-flex align-items-center">
            {/* Muestra el número de teléfono del propietario */}
            <a className="text fz15" href={`tel:${user.phone}`}>
              <i className="flaticon-call pe-1" />
              {user.phone}
            </a>
          </div>
          <span>
            <i class="fas fa-star text-[#efcb0e] fz13"></i>
            {"  "}
            {averageRating.toFixed(1)} - {totalReviews} Reviews
          </span>
          {/* Puedes agregar aquí las reseñas del propietario si lo deseas */}
        </div>
      </div>
      {/* Fin de agent-single */}

      <div className="d-grid">
        {/* El enlace puede dirigirse a la página del agente o a un formulario de contacto */}
        <Link to={`/agent-single/${user.id}`} className="ud-btn btn-white2">
          Contactar al agente
          <i className="fal fa-arrow-right-long" />
        </Link>
      </div>
    </>
  );
};

export default ContactWithAgent;
