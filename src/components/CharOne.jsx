import axios from "axios";
import { useEffect, useState } from "react";

const CharOne = ({ selectId, select, setSelect, heart, setHeart }) => {
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    async function fetchSelect() {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/${selectId}`
      );
      setSelect(data);

      const episod = data.episode.map((p) => p.split("/").at(-1));
      // console.log(episod);
      const { data: AllEpisode } = await axios.get(
        `https://rickandmortyapi.com/api/episode/${episod}`
      );
      setEpisode([AllEpisode].flat().slice(0, 4));
      // console.log();
    }
    if (selectId) fetchSelect();
  }, [selectId]);

  const handleHeart = (select) => {
    setHeart((prevHeart) => [...prevHeart, select]);
  };

  if (!select || !selectId) {
    return (
      <div className="col-md-8 character-details p-3">
        <div className="row align-items-center">
          <p>Select One Character Please!</p>
        </div>
      </div>
    );
  }
const isAddToFavourite = heart.map(h=> h.id).includes(selectId);
  console.log(isAddToFavourite);

  return (
    <div className="col-md-8 character-details p-3">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={select.image}
            className="img-fluid rounded"
            alt="Character Image"
          />
        </div>
        <div className="col-md-6">
          <div className="detail-card p-4">
            <h5>{select.name}</h5>
            {select.status === "Alive" ? (
              <p>🟢 Alive - {select.gender}</p>
            ) : (
              <p>🔴 Dead - {select.gender}</p>
            )}
            <p className="colorkam">
              Last known location: <br />{" "}
              <strong style={{ color: "#fff" }}>{select.location.name}</strong>
            </p>
            {isAddToFavourite ? (
              <p>Already Added To Favourites ✅</p>
            ) : (
              <button
                onClick={() => handleHeart(select)}
                className="buttonman btn btn-outline-secondary"
              >
                Add to Favourite
              </button>
            )}
          </div>

          <div className="episode-list mt-4">
            <h5>List of Episodes:</h5>
            <ul className="list-unstyled">
              {episode.map((epi, index) => (
                <li key={epi.id}>
                  {index + 1} - {epi.episode}: {epi.name}{" "}
                  <span className="text-muted">{epi.air_date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharOne;
