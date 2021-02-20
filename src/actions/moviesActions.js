import { movies$ } from "../data/movies";
import * as actionTypes from "./types";

export const fetchMovies = () => {
    return async (dispatch) => {
        const data = await movies$;

        dispatch({
            type : actionTypes.FETCH_MOVIES,
            payload: {
                data
            }
        })
    }
}

export const removeMovie = (id) => {
    return (dispatch) => {
        dispatch({
            type : actionTypes.REMOVE_MOVIE,
            payload: {
                id
            }
        })
    }
}

export const fetchCategories = () => {
    return async (dispatch) => {
        const data = await movies$;
        const categoryMoviesRef = data.filter((v,i,arr) => arr.findIndex(e => (e.category === v.category)) === i);
        const categories = categoryMoviesRef.map(movieRef => ({ 'category' : movieRef.category }));

        dispatch({
            type : actionTypes.FETCH_CATEGORIES,
            payload: {
                categories
            }
        })
    }
}

export const selectMovies = (selectedCategoryList) => {
    return async (dispatch) => {
        const data = await movies$;
        dispatch({
            type: actionTypes.SELECT_MOVIES,
            payload: {
                data,
                selectedCategoryList
            }
        })
    }
}

export const handlePageChanges = (event) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.CHANGE_PAGINATION,
            payload: {
                event
            }
        })
    }
}

export const handleItemsPerPageChanges = (itemsPerPage) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.CHANGE_ITEMS_PAGINATION,
            payload: {
                itemsPerPage
            }
        })
    }
}
