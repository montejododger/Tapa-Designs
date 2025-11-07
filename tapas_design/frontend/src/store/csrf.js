export const csrfFetch = async (url, options = {}) => {
	options.method ||= 'GET';
	options.headers ||= {};

	// ANYTHING BUT A GET - SET THE HEADERS
	if (options.method.toUpperCase() !== 'GET') {
		options.headers['Content-Type'] = 'application/json';
		options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
	}

	console.log({ url, options });

	const res = await fetch(url, options);
	console.log({ res });
	return res;
};

export default csrfFetch;
