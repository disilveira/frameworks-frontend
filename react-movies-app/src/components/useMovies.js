import { useState, useEffect } from 'react';
import { MoviesService } from "../api/MoviesService";

export const useMovies = () => {
    const [movies, setMovies] = useState({ data: { results: [] } });

    useEffect(() => {
        const requestMovies = async () => {
            const moviesResult = await MoviesService.getPopularMovies();
            setMovies(moviesResult);
        }

        requestMovies();
    }, [])

    return movies

}