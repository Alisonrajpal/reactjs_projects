import { useState, useEffect } from "react";

import "./App.css";
import MovieCard from "./MovieCard.jsx";
import SearchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=92f59939";

const movie1 = {
  Title: "Superman",
  Year: "1978",
  imdbID: "tt0078346",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMzFlZDJjMDAtZDYxZS00NzZhLTk2ODMtZWRlODA3Njk3ZTdmXkEyXkFqcGc@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); //this is for search functionality
  const searchMovies = async (title) => {
    //it will take time to search
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Superman");
  }, []);

  return (
    <div className="app">
      <h1>MovieMania</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
