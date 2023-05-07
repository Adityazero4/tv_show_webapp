import { useEffect, useContext, useState } from "react";

import ShowsContext from "../Context/shows/showsContext";
import { useParams } from "react-router-dom";
import Formpage from "./Formpage";

const Summary = () => {
  const { getSingleShow, singleShow } = useContext(ShowsContext);
  const { id } = useParams();

  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    getSingleShow(id);

    // eslint-disable-next-line
  }, []);

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <>
      <div className="singleshow">
        <img
          src={
            singleShow.image
              ? singleShow.image.medium
              : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
          }
          alt={singleShow.name}
        />
        <div className="singleshow__info">
          <h1>{singleShow.name}</h1>
          {singleShow.genres &&
            singleShow.genres.map((genre) => (
              <span key={genre} className="singleshow__genre">
                {genre}
              </span>
            ))}

          <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
          <Formpage name={singleShow.name}></Formpage>
        </div>
      </div>
    </>
  );
};

export default Summary;
