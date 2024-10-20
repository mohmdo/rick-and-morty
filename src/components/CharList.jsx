const CharList = () => {
  return (
    <div className="col-md-3 character-list p-3">
      <h5>Found 2 characters</h5>

      <div className="character-item mb-3 p-2">
        <div className="d-flex align-items-center w-100">
          <img
            src="https://via.placeholder.com/70"
            alt="Rick Sanchez"
            className="img-fluid character-avatar"
          />
          <div className="character-info ms-2">
            <h6>Rick Sanchez</h6>
            <p>🔴 Dead - Human</p>
          </div>
          <div className="ms-auto">
            <i
              className="bi bi-eye text-danger"
              style={{fontSize:"1.5rem" , cursor:"pointer"}}
            ></i>
          </div>
        </div>
      </div>

      <div className="character-item mb-3 p-2">
        <div className="d-flex align-items-center w-100">
          <img
            src="https://via.placeholder.com/70"
            alt="Summer Smith"
            className="img-fluid character-avatar"
          />
          <div className="character-info ms-2">
            <h6>Summer Smith</h6>
            <p>🟢 Alive - Human</p>
          </div>
          <div className="ms-auto">
            <i
              className="bi bi-eye-slash text-danger"
              style={{fontSize:"1.5rem" , cursor:"pointer"}}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharList;
