import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <h2> WELCOME TO MY MOVIE APP </h2>
      <Link to="/movies" className="movie">
        View movie list
      </Link>
    </div>
  );
};
export default Home;
