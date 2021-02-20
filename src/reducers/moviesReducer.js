import * as actionTypes from "../actions/types";

const initialState = {
    movies: [],
    categories: [],
    pagination : {
        currentPage : 1,
        itemsPerPage : 4
    }
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES:
            return { ...state, movies: action.payload.data }

        case actionTypes.REMOVE_MOVIE:
            return { ...state, movies: state.movies.filter(movie => movie.id !== action.payload.id) }

        case actionTypes.FETCH_CATEGORIES:
            return { ...state, categories: action.payload.categories }

        case actionTypes.SELECT_MOVIES:
            const list = (action.payload.selectedCategoryList).map(selection => selection.category);
            state.movies = action.payload.data;
            // Back to the first page when remove a category selection
            state.pagination.currentPage = 1;

            if (list.length === 0){
                return { ...state, movies: action.payload.data }
            }
            return { ...state, movies: state.movies.filter(movie => list.includes(movie.category)) }

        case actionTypes.CHANGE_PAGINATION:
            const event = action.payload.event;
            const currentPage = state.pagination.currentPage;
            const itemsPerPage = state.pagination.itemsPerPage;

            if ((currentPage === 1 && event === 'previous') ||
                (currentPage * itemsPerPage > state.movies.length && event === 'next')) {
                return { ...state };
            }

            return action.payload.event === 'next' ?
                { ...state, pagination : { ...state.pagination, currentPage: currentPage + 1 }} :
                { ...state, pagination : { ...state.pagination, currentPage: currentPage - 1 }};

        case actionTypes.CHANGE_ITEMS_PAGINATION:
            // Back to the first page by default
            state.pagination.currentPage = 1;

            return { ...state, pagination : { ...state.pagination, itemsPerPage: action.payload.itemsPerPage }};

        default :
            return state;
    }
}

export default moviesReducer;
