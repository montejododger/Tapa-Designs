import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchSearchResults } from "../../store/productsReducer";

const SearchBar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query) {
            dispatch(fetchSearchResults());
        } else {
            dispatch(fetchSearchResults(query));
        }
        history.push(`/search/${query}`);

        setQuery("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
