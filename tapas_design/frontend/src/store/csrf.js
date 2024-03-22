
// will use in place of fetch, for non-get requests
// options is the body with a method: POST, GET, DELETE

export const csrfFetch = async (url, options = {}) => {
    options.method ||= "GET";
    options.headers ||= {};

    if (options.method.toUpperCase() !== "GET") {
        options.headers["Content-Type"] = "application/json";
        options.headers["X-CSRF-Token"] =
            sessionStorage.getItem("X-CSRF-Token");
    }


    const res = await fetch(url, options);

    return res;
};


export default csrfFetch;
