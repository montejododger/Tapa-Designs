import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSearchResults } from '../../store/productSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

const SearchBar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [query, setQuery] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		if (!query) {
			dispatch(fetchSearchResults());
		} else {
			dispatch(fetchSearchResults(query));
		}
		navigate(`/search/${query}`);

		setQuery('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='search-bar'>
				<FontAwesomeIcon icon={faSearch} className='search-icon' />
				<input
					type='text'
					placeholder='Search...'
					value={query}
					onChange={e => setQuery(e.target.value)}
				/>
			</div>
		</form>
	);
};

export default SearchBar;
