import React from "react"
import MoviesList from "./components/MoviesList";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
    return (
        <Provider store={ store }>
            <MoviesList />
        </Provider>
    );
}

export default App;
