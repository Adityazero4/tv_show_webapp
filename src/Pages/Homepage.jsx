import { useContext, useEffect } from "react";

import ShowsContext from "../Context/shows/showsContext";
import ListItem from "../components/ListItem";
import no_found from "../assets/no_found.png";

const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const { shows, allShows } = showsContext;
  allShows();
  return (
    <div className="homepage">
      <div className="homepage__list">
        {shows.map((item) => (
          <ListItem
            key={item.show.id}
            id={item.show.id}
            image={item.show.image ? item.show.image.medium : no_found}
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
