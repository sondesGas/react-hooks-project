import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import Slideshow from "./components/Slideshow";
import { useEffect, useState } from "react";
import Title from "./components/filters/Title";
import { Filmlist } from "./Filmlist";
import AddMovie from "./components/AddMovie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/page/Home";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movieList, setMovieList] = useState(Filmlist);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(null);
  const filterByName = () => {
    setMovieList(
      Filmlist.filter((el) =>
        el.name.toLowerCase().startsWith(nameSearch.toLowerCase().trim())
      )
    );
  };

  const filterByRating = () => {
    ratingSearch &&
      setMovieList(Filmlist.filter((el) => el.rating === ratingSearch));
  };

  const addNewMovie = (newMovie) => {
    Filmlist.push(newMovie);
    setMovieList([...movieList, newMovie]);
  };

  useEffect(() => {
    filterByName();
  }, [nameSearch]);

  useEffect(() => {
    filterByRating();
  }, [ratingSearch]);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies">
            <Title
              setNameSearch={setNameSearch}
              ratingSearch={ratingSearch}
              setRatingSearch={setRatingSearch}
            />
            <AddMovie addNewMovie={addNewMovie} />
            <Slideshow />
            <div className="container">
              <MovieList movieList={movieList} />
            </div>
            <Footer />
          </Route>
          <Route
            path="/movies/:id"
            render={(props) => {
              return <MovieDetails {...props} movies={movieList} />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
