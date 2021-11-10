import React from "react";
import { Link } from "react-router-dom";
import Rate from "./filters/Rate";

const MovieCard = ({
  film: { id, name, description, image, Filmdirector, date, rating },
}) => {
  return (
    <div className="col-md-3">
      <div className="card " style={{ width: "17.5rem", margin: 20 }}>
        <img style={styleCss} src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h2>{name}</h2>
          <p className="title">{Filmdirector}</p>
          <p style={{ fontSize: 12 }}>{description}</p>
          <div>
            <Rate rating={rating} />
          </div>

          <p>{date}</p>
          <p>
            <Link to={`/movies/${id}`}>
              <button className="button">Watch Trailer</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
const styleCss = { height: 290, objectFit: "cover" };
export default MovieCard;
