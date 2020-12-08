import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { MoviesService } from "../api/MoviesService";

import { addToPlaylist } from '../actions/playlistAction';
import { useDispatch, useSelector } from 'react-redux';

export const MovieItem = () => {

const [movies, setMovies] = useState({ data: { results: [] } });

const dispatch = useDispatch();
const playListReducer = useSelector((state) => state.playlist);

const addInPlaylist = (id) => {
    let list = playListReducer.movies;
    list.push(id);
    dispatch(addToPlaylist(list));
}

const removeFromPlaylist = (id) => {
    let list = playListReducer.movies.filter(item => item !== id);
    dispatch(addToPlaylist(list));
}

const requestMovies = async () => {
    const moviesResult = await MoviesService.getPopularMovies();
    setMovies(moviesResult);
};

useEffect(() => {
    requestMovies();
}, []);

return (
<div className="row" style={{ paddingTop: '10px' }}>
    {movies.data.results.map((m) => (
        <div key={m.id} className="col-sm-2" style={{ paddingBottom: '10px' }}>
            <div className="card">
                <img className="card-img-top" src={'https://image.tmdb.org/t/p/w220_and_h330_face' + m.poster_path} alt={m.title} />
                <div className="card-body">
                    <h5 className="card-title">{m.title.substr(0, 10)}</h5>
                    <p className="card-text">{m.release_date}</p>
                    <Link to={'movie/' + m.id} className="btn btn-primary btn-block">Movie Details</Link>
                    {(playListReducer.movies !== undefined && playListReducer.movies.indexOf(m.id) === -1) ?
                        <button className="btn btn-success btn-block" onClick={() => addInPlaylist(m.id)}>Add to Playlist</button>
                        :
                        <button className="btn btn-danger btn-block" onClick={() => removeFromPlaylist(m.id)}>Del from Playlist</button>
                    }
                </div>
            </div>
        </div>
    ))}
</div>
);

};