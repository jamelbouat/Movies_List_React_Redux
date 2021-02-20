import React from 'react';
import { useDispatch } from "react-redux";
import {handleItemsPerPageChanges, handlePageChanges} from "../actions/moviesActions";

const Pagination = () => {
    const dispatch = useDispatch();

    const handlePageChange = (event) => () => {
        dispatch(handlePageChanges(event));
    }

    const handleItemsPerPageChange = (event) => {
        dispatch(handleItemsPerPageChanges(event.target.value));
    }

    return (
        <nav>
            <ul className="pagination">
                <li className="page-item" onClick={ handlePageChange('previous') }>
                    <a className="page-link">Previous</a>
                </li>
                <li className="page-item">
                    <select className="page-link" onChange={ handleItemsPerPageChange }>
                        <option value="4">4</option>
                        <option value="8">8</option>
                        <option value="12">12</option>
                    </select>
                </li>
                <li className="page-item" onClick={ handlePageChange('next') }>
                    <a className="page-link">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;
