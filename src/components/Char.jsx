const Char = (props) => {
  return (
    <div className="container-fluid main-content">
        <div className="row all">
            {props.children}
        </div>
    </div>
  );
};

export default Char;