import React, { useEffect, useState } from "react";
import "./styles.css";
import { MoviesList } from "./components/MoviesList";
import { MoviesService } from "./api/MoviesService";

export default function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: { results }
    } = await MoviesService.getPopularMovies();

    setMovies(results);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <MoviesList movies={movies} />
    </div>
  );
}
