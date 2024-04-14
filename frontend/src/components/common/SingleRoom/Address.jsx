const PropertyAddress = ({
  address,
  city,
  state,
  postalCode,
  countryCode,
  country,
  latitude,
  longitude,
}) => {
  return (
    <>
      <div class="col-md-6 col-xl-4">
        <div class="d-flex justify-content-between">
          <div class="pd-list">
            <p class="fw600 mb10 ff-heading dark-color">Address</p>
            <p class="fw600 mb10 ff-heading dark-color">City</p>
            <p class="fw600 mb-0 ff-heading dark-color">State/county</p>
          </div>
          <div class="pd-list">
            <p class="text mb10">{address}</p>
            <p class="text mb10">{city}</p>
            <p class="text mb-0">{state}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4 offset-xl-2">
        <div class="d-flex justify-content-between">
          <div class="pd-list">
            <p class="fw600 mb10 ff-heading dark-color">Zip/Postal Code</p>
            <p class="fw600 mb10 ff-heading dark-color">Area</p>
            <p class="fw600 mb-0 ff-heading dark-color">Country</p>
          </div>
          <div class="pd-list">
            <p class="text mb10">{postalCode}</p>
            <p class="text mb10">{countryCode}</p>
            <p class="text mb-0">{country}</p>
          </div>
        </div>
      </div>

      {/* End col */}

      <div className="col-md-12">
        <iframe
          className="position-relative bdrs12 mt30 h250"
          loading="lazy"
          src={`https://maps.google.com/maps?q=${latitude},${longitude}&t=m&z=14&output=embed`}
          title={address}
          aria-label={address}
        />
      </div>
      {/* End col */}
    </>
  );
};

export default PropertyAddress;
