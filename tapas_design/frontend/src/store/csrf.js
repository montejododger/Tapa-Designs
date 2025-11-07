export const csrfFetch = async (url, options = {}) => {
	options.method ||= 'GET';
	options.headers ||= {};

	// ANYTHING BUT A GET - SET THE HEADERS
	if (options.method.toUpperCase() !== 'GET') {
		options.headers['Content-Type'] = 'application/json';
		options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
	}

        return await fetch(url, options);
};

export default csrfFetch;
