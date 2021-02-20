import React, {useState} from 'react';
import './movieCard.css';
import { faThumbsUp, faThumbsDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { removeMovie } from "../actions/moviesActions";

const MovieCard = (props) => {
    const dispatch = useDispatch();
    const movie = props.movie;
    const ratio = 100 * movie.likes / (movie.likes + movie.dislikes) + '%';
    const [thumb, setThumb] = useState(faThumbsUp);

    const removeCard = (id) => () => {
        dispatch(removeMovie(id))
    };

    const changeThumbState = () => {
        setThumb(thumb === faThumbsDown ? faThumbsUp : faThumbsDown);
    }

    return (
        <div className="card border-dark">
            <div className="card-body">
                <h5 className="card-title font-weight-bold">{ movie.title }</h5>
                <p className="card-text">{ movie.category }</p>
            </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: ratio }}/>
            </div>
            <FontAwesomeIcon icon={ thumb } className="m-2" onClick={ changeThumbState }/>
            <FontAwesomeIcon icon={ faTrash } className="m-2" onClick={ removeCard(movie.id) }/>
        </div>
    );
}

export default MovieCard;
