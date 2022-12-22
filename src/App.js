import React, { useState } from "react";
import axios from "axios";
function App() {
  const [text, setText] = useState("Search Movie");

  const [movie, setMovie] = useState([]);
  const changeText = (event) => {
    setText(event.target.value);
  };

  const getMovie = (e) => {
    e.preventDefault();

    axios
      .get(`https://www.omdbapi.com/?s=${text}&apikey=2bbf2572`)
      .then((response) => {
        console.log(response);
        setMovie(response.data.Search);
      });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Movie App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" role="search" onSubmit={getMovie}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={text}
                onChange={changeText}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container my-5">
        <div className="row">
          {movie.map((value, index) => {
            return (
              <div className="col-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={value.Poster} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h3 className="card-title">{value.Year}</h3>
                    <h4 className="card-text">{value.Title}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
