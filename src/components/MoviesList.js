import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../actions/moviesActions";
import MovieCard from "./MovieCard";
import MultiSelectComponent from "./MultiSelect";
import Pagination from "./Pagination";

const MoviesList = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies);
    const currentPage = useSelector(state => state.pagination.currentPage);
    const itemsPerPage = useSelector(state => state.pagination.itemsPerPage);
    const startLimitSelection = (currentPage * itemsPerPage) - itemsPerPage;
    const endLimitSelection = currentPage * itemsPerPage;

    useEffect(() => {
        dispatch(fetchMovies())
    }, []);

    return (
        <Fragment>
            <MultiSelectComponent />
            <div className="row">
                {
                    movies.slice(startLimitSelection, endLimitSelection).map(movie =>
                        <MovieCard key = { movie.id } movie = { movie }/>
                    )
                }
            </div>
            <Pagination />
        </Fragment>

    );
}

export default MoviesList;
