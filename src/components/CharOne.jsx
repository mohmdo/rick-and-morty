const CharOne = () => {
  return (
    <div className="col-md-8 character-details p-3">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/500x300"
            className="img-fluid rounded"
            alt="Character Image"
          />
        </div>
        <div className="col-md-6">
          <div className="detail-card p-4">
            <h5>Rick Sanchez</h5>
            <p>🔴 Dead - Human</p>
            <p className="colorkam">
              Last known location: <br />{" "}
              <strong style={{color:'#fff'}}>Citadel of Ricks</strong>
            </p>
            <button className="buttonman btn btn-outline-secondary">
              Add to Favourite
            </button>
          </div>
          <div className="episode-list mt-4">
            <h5>List of Episodes:</h5>
            <ul className="list-unstyled">
              <li>
                01 - S01E01: Pilot{" "}
                <span className="text-muted">December 2, 2013</span>
              </li>
              <li>
                02 - S01E02: Lawnmower Dog{" "}
                <span className="text-muted">December 9, 2013</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharOne;
