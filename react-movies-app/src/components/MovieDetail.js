import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoviesService } from "../api/MoviesService";

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
        <div class="jumbotron">
            <h1 class="display-4">{movie.data.title}</h1>
            <p class="lead">{movie.data.overview}</p>
            <hr class="my-4" />
            <p>Average: {movie.data.vote_average}</p>
            <p class="lead">
                <Link to="/" class="btn btn-primary btn-lg" role="button">Back to Home</Link>
            </p>
        </div>
    </>
    );

    
};