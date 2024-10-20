const Header = () => {
  return (
    <header className="header d-flex justify-content-between align-items-center p-3">
      <h3 className="logo">LOGO 😍</h3>
      <input
        type="text"
        className="form-control search-bar"
        placeholder="search..."
      />
      <div className="heart-icon position-relative d-flex align-items-center">
        <i
          className="bi bi-heart-fill text-danger"
          style={{fontSize:'1.8rem'}}
        ></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          2
        </span>
      </div>
    </header>
  );
};

export default Header;
