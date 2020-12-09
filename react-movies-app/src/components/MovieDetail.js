import React, { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";

import "../styles.css";
import { MainMenu } from "./MainMenu";

export const MovieDetail = (props) => {
    const [movie, setMovie] = useState({ data: [] });

    useEffect(() => {
        
        const requestMovieDetail = async () => {
            const movieDetailResult = await MoviesService.getMovieDetail(props.match.params.id);
            setMovie(movieDetailResult);
        }

        requestMovieDetail();
    }, []);

    return (
        <>
            <MainMenu />
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
                    </div>
                </div>
            </div>
        </>
    );
};