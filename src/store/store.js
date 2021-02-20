import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import moviesReducer from "../reducers/moviesReducer";

const store = createStore(moviesReducer, applyMiddleware(thunk));

export default store;
