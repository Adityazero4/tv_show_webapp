import { useContext } from "react";

import ShowsContext from "../Context/shows/showsContext";
import ListItem from "../Components/ListItem";

const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const { shows, allShows } = showsContext;

  const onSearchHandler = (e) => {
    e.preventDefault();

    allShows();
  };

  return (
    <div className="homepage">
      <button className="btn btn-block" onClick={onSearchHandler}>
        Click to See All Shows
      </button>

      <div className="homepage__list">
        {shows.map((item) => (
          <ListItem
            key={item.show.id}
            id={item.show.id}
            image={
              item.show.image
                ? item.show.image.medium
                : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            }
            name={item.show.name}
            rating={
              item.show.rating.average ? item.show.rating.average : "No rating"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
