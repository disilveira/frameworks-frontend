import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoviesService } from "../api/MoviesService";

import "../styles.css";

export const MovieDetail = (props) => {
    const [movie, setMovie] = useState({ data: [] });

    const requestMovieDetail = async () => {
        const movieDetailResult = await MoviesService.getMovieDetail(props.match.params.id);
        setMovie(movieDetailResult);
    };

    useEffect(() => {
        requestMovieDetail();
    });

    return (
        <>
            <br />
            <div className="jumbotron" style={{backgroundImage: `url('http://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.data.backdrop_path}')`}}>

                <div className="row" style={{ paddingTop: '10px' }}>

                    <div className="col-sm-2" style={{ paddingBottom: '10px' }}>
                        <div className="card">
                            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.data.poster_path}`} alt={movie.data.title} />
                        </div>
                    </div>

                    <div className="col-sm-10" style={{ paddingBottom: '10px' }}>
                        <h1 className="display-4" style={{ color: '#ffffff' }}>{movie.data.title}</h1>
                        <p className="lead" style={{ color: '#ffffff' }}>{movie.data.overview}</p>
                        <hr className="my-4" />
                        <p style={{ color: '#ffffff' }}>Average: {movie.data.vote_average}</p>
                        <p className="lead">
                            <Link to="/" className="btn btn-primary btn-lg" role="button">Back to Home</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};