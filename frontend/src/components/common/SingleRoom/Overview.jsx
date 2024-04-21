const OverView = ({ bedroom, bath, yearbuilt, garage, size, propertytype }) => {
  return (
    <>
      <div class="col-sm-6 col-lg-4">
        <div class="overview-element mb25 d-flex align-items-center">
          <span class="icon flaticon-bed !leading-[55px]"></span>
          <div class="ml15">
            <h6 class="mb-0">Bedroom</h6>
            <p class="text mb-0 fz15">{bedroom}</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-4">
        <div class="overview-element mb25 d-flex align-items-center">
          <span class="icon flaticon-shower !leading-[55px]"></span>
          <div class="ml15">
            <h6 class="mb-0">Bath</h6>
            <p class="text mb-0 fz15">{bath}</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-4">
        <div class="overview-element mb25 d-flex align-items-center">
          <span class="icon flaticon-event !leading-[55px]"></span>
          <div class="ml15">
            <h6 class="mb-0">Year Built</h6>
            <p class="text mb-0 fz15">{yearbuilt}</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-4">
        <div class="overview-element mb25-xs d-flex align-items-center">
          <span class="icon flaticon-garage !leading-[55px]"></span>
          <div class="ml15">
            <h6 class="mb-0">Garage</h6>
            <p class="text mb-0 fz15">{garage}</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-4">
        <div class="overview-element mb25-xs d-flex align-items-center">
          <span class="icon flaticon-expand !leading-[55px]"></span>
          <div class="ml15">
            <h6 class="mb-0">Sqft</h6>
            <p class="text mb-0 fz15">{size}</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-4">
        <div class="overview-element d-flex align-items-center">
          <span class="icon flaticon-home-1 !leading-[55px]"></span>
          <div class="ml15">
            <h6 class="mb-0">Property Type</h6>
            <p class="text mb-0 fz15">{propertytype}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverView;
