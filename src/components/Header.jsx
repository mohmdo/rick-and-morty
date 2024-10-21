import axios from "axios";
import { useEffect, useState } from "react";

const Header = ({char , setchar , heart}) => {
  const [serach , setSearch] = useState("");

  const handleSearch = (e) =>{
    setSearch(e);
  }

  useEffect(()=>{
    async function searchAll(){
      const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?name=${serach}`);
      setchar(data.results.slice(0, 7));
    }
    if(serach) searchAll();

  },[serach]);

  // console.log(heart)

  return (
    <header className="header d-flex justify-content-between align-items-center p-3">
      <h3 className="logo">LOGO 😍</h3>
      <input
        type="text"
        className="form-control search-bar"
        placeholder="search..."
        onChange={(e)=>handleSearch(e.target.value)}
      />
      <div className="heart-icon position-relative d-flex align-items-center">
        <i
          className="bi bi-heart-fill text-danger"
          style={{fontSize:'1.8rem'}}
        ></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {heart.length}
        </span>
      </div>
    </header>
  );
};

export default Header;
