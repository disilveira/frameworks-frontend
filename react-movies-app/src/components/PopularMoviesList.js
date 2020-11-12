import React, { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";

export const PopularMoviesList = () => {
  const [movies, setMovies] = useState({ data: { results: [] } });

  const requestMovies = async () => {
    const moviesResult = await MoviesService.getPopularMovies();
    setMovies(moviesResult);
  };

  useEffect(() => {
    requestMovies();
  }, []);

  return (
    <>
      <div className="row" style={{ paddingTop: '10px'}}>
      {movies.data.results.map((m) => (
        <div className="col-sm-2" style={{ paddingBottom: '10px'}}>
          <div className="card">
            <img className="card-img-top" src={ 'https://image.tmdb.org/t/p/w220_and_h330_face/' + m.poster_path} alt={m.title} />
              <div className="card-body">
                <h5 className="card-title">{m.title}</h5>
                <p className="card-text">{m.release_date}</p>
                <a href={ 'movie/' + m.id} className="btn btn-primary btn-block">Movie Details</a>
              </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );

  
};
