import { Link } from "react-router-dom";

const ListItem = ({ image, name, rating, id }) => {
  return (
    <Link to={`/summary/${id}`} className="listitem">
      <img src={image} alt={name} />
      <div className="listitem__info">
        <h4 className="info__name">{name}</h4>
        <h4 className="info__rating">{rating}</h4>
      </div>
      <button className="btn btn-block">Summary</button>
    </Link>
  );
};

export default ListItem;
