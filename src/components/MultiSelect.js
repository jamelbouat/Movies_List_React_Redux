import React, { useEffect } from "react";
import { fetchCategories, selectMovies} from "../actions/moviesActions";
import { useDispatch, useSelector } from "react-redux";
import { Multiselect } from "multiselect-react-dropdown";

const MultiSelectComponent = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);

    const onSelect = (selectedList) => {
        dispatch(selectMovies(selectedList));
    };

    const onRemove = (selectedList) => {
        dispatch(selectMovies(selectedList));
    };

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    return (
        <Multiselect
            options={ categories }
            closeIcon="close"
            onSelect={ onSelect }
            onRemove={ onRemove }
            displayValue="category"
        />
    )
}

export default MultiSelectComponent;
