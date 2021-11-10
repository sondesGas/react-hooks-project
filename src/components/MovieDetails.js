import React from "react";

const MovieDetails = (props) => {
  const movie = props.movies.find(
    (movie) => movie.id === +props.match.params.id
  );
  return (
    <div className="MovieDetails">
      <h1>MOVIESHOW</h1>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="Youtube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div>
        <h4>Movie Description:</h4>
        <h5>{movie.description}</h5>
      </div>
      <button
        className="myBtn"
        onClick={() => {
          props.history.push("/");
        }}
      >
        Go Home
      </button>
    </div>
  );
};
export default MovieDetails;
