import axios from "axios";
import { useEffect } from "react";

const CharList = ({ char, setchar, selectId, setSelectId }) => {
  useEffect(() => {
    async function fetchAll() {
      const { data } = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      setchar(data.results.slice(0, 7));
    }

    fetchAll();
    console.log(char);
  }, []);

  const handleEye =(id) =>{
    setSelectId((prevId)=> prevId === id ? null : id );
  }
  

  return (
    <div className="col-md-3 character-list p-3">
      <h5>Found {char.length} characters</h5>

      {char.map((item) => (
        <div key={item.id} className="character-item mb-3 p-2">
          <div  className="d-flex align-items-center w-100">
            <img
              src={item.image}
              alt="Summer Smith"
              className="img-fluid character-avatar"
            />
            <div className="character-info ms-2">
              <h6>{item.name}</h6>
              {item.status === "Alive" ? (
                <p>🟢 Alive - {item.gender}</p>
              ) : (
                <p>🔴 Dead - {item.gender}</p>
              )}
            </div>
            <div className="ms-auto">
              <i
                // className="bi bi-eye-slash text-danger"
                className={`bi ${
                  selectId === item.id ? `bi-eye-slash` : `bi-eye`
                }  text-danger`}
                style={{ fontSize: "1.5rem", cursor: "pointer" }}
                onClick={() => handleEye(item.id)}
              ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharList;
