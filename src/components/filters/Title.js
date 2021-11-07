import { useState } from "react";
import Rate from "../filters/Rate";
const Title = ({ setNameSearch, ratingSearch, setRatingSearch }) => {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
    setNameSearch(event.target.value);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="search-container  container-fluid">
          <h1>MOVIE SHOW</h1>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="text"
              value={text}
              onChange={handleChange}
              placeholder="Search Movie by name"
            />
            <div className="rating-search">
              <Rate
                rating={ratingSearch}
                setRatingSearch={setRatingSearch}
                setText={setText}
              />
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Title;
