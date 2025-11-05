import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { useParams } from 'react-router-dom';
import { fetchSearchResults } from '../../store/productSlice';
import ProductIndexItem from './ProductIndexItem';
import './ProductIndex.css';
import { LinkedInIcon, GithubIcon } from '../products/ContactIcons';
const selectProducts = createSelector(
	state => state.products.items,
	items => Object.values(items || {}).filter(Boolean)
);

function SearchPage() {
	const dispatch = useDispatch();
	const { query } = useParams();
	const products = useSelector(selectProducts);
	const status = useSelector(state => state.products.status);

	useEffect(() => {
		if (query) dispatch(fetchSearchResults(query));
	}, [dispatch, query]);

	if (status === 'loading') return <p>Loading search results...</p>;

	return (
		<div className='search-index'>
			<section className='product-index-wrapper'>
				{products.length > 0 ? (
					products.map(product => (
						<ProductIndexItem key={product.id} product={product} />
					))
				) : (
                    <div className="no-items-found">
                        <div className="search-loop-head">
                            <p className="result-count">
                                No results found for "{query}" found.
                            </p>
                        </div>
                        <div className="no-results-container">
                            <h4 className="ss-title">Suggestions</h4>
                            <ul className="sugg-list">
                                <li>Check for misspellings.</li>
                                <li>
                                    Remove possible redundant keywords(ie.
                                    "products").
                                </li>
                                <li>
                                    Use other words to describe what you are
                                    searching for.
                                </li>
                            </ul>
                        </div>
                        <p className="ss-looking">
                            Still can't find what you're looking for? Contact Us
                        </p>
                        <div className="ss-contact">
                            <h4 className="ss-title">Hours</h4>
                            <p>
                                Monday - Thursday: 9:00 AM - 5:00 PM MST <br />{" "}
                                Friday: 9:00 AM - 2:00 PM MST
                            </p>
                        </div>
                        <div className="ss-phone">
                            <h4 className="ss-title">Phone</h4>
                            <p>
                                <strong>Telephone: </strong> (555) 555 - 5555
                            </p>
                        </div>
                        <div className="ss-email">
                            <h4 className="ss-title">Email</h4>
                            <p className="email">notarealemail@gmail.com</p>
                        </div>
                        <div className="ss-contact-links">
                            <h4 className="ss-title">Contact</h4>
                            <div className="ss-icon-links">
                                <LinkedInIcon
                                    url={`https://www.linkedin.com/in/matthew-m-640905239/`}
                                />{" "}
                                <br />
                                <GithubIcon/>
                            </div>
                        </div>
                    </div>
                )}
			</section>
		</div>
	);
}

export default SearchPage;
