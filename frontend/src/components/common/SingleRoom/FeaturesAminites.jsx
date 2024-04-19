const PropertyFeaturesAminites = ({ amenities }) => {
  // Función para dividir el array de amenities en grupos de 4 elementos
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Dividir el array de amenities en grupos de 4
  const columns = chunkArray(amenities, 4);
  return (
    <>
      {" "}
      {columns.map((column, index) => (
        <div key={index} className="col-sm-6 col-md-4">
          <div className="pd-list">
            {column.map((amenity, i) => (
              <p key={i} className="text mb-0">
                <i className="fas fa-circle fz6 align-middle pe-2"></i>
                {amenity}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertyFeaturesAminites;
