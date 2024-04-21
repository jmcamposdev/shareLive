const WalkScore = ({ address, city, state, postalCode, score }) => {
  return (
    <>
      <div class="col-md-12">
        <h4 class="fw400 mb20">
          {address}, {postalCode} - {city} {state}
        </h4>
        <div class="walkscore d-sm-flex align-items-center mb20">
          <span class="icon mr15 mb10-sm flaticon-walking"></span>
          <div class="details">
            <p class="dark-color fw600 mb-2">Walk Score</p>
            <p class="text mb-0">{score.walk} / 100</p>
          </div>
        </div>
        <div class="walkscore d-sm-flex align-items-center mb20">
          <span class="icon mr15 mb10-sm flaticon-bus"></span>
          <div class="details">
            <p class="dark-color fw600 mb-2">Transit Score</p>
            <p class="text mb-0">{score.transit} / 100</p>
          </div>
        </div>
        <div class="walkscore d-sm-flex align-items-center">
          <span class="icon mr15 mb10-sm flaticon-bike"></span>
          <div class="details">
            <p class="dark-color fw600 mb-2">Walk Score</p>
            <p class="text mb-0">{score.bike} / 100</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalkScore;
