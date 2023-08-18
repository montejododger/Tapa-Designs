import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchSearchResults } from "../../store/productsReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css"

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
            <div className="search-bar">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
        </form>
    );
};

export default SearchBar;
