// Constants for HTTP methods
export const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
};

// Constants for API error messages
export const ERROR_MESSAGES = {
    NETWORK_ERROR: 'Network error. Please check your connection.',
    API_ERROR: 'API Error: {status} - {message}',
    UNEXPECTED_ERROR: 'Unexpected error: {message}',
};

// Utility function to handle API requests
/**
 * Makes an API request based on the specified method.
 *
 * @param {Object} apiService - The API service instance to make the request.
 * @param {string} method - The HTTP method (GET, POST, PUT, DELETE).
 * @param {string} url - The API endpoint URL.
 * @param {Object} data - The request payload (only for POST/PUT).
 *
 * @returns {Object} - The response data from the API.
 *
 * @throws {Error} - Throws error if the request fails.
 */
const makeApiRequest = async (apiService, method, url, data = {}) => {
    let response;
    try {
        switch (method) {
            case HTTP_METHODS.POST:
                response = await apiService.createResource(url, data, true);
                break;
            case HTTP_METHODS.GET:
                response = await apiService.fetchResource(url);
                break;
            case HTTP_METHODS.PUT:
                response = await apiService.updateResource(url, data, true);
                break;
            case HTTP_METHODS.PATCH:
                response = await apiService.patchResource(url, data, true);
                break;
            case HTTP_METHODS.DELETE:
                response = await apiService.deleteResource(url);
                break;
            default:
                throw new Error(`Unsupported HTTP method: ${method}`);
        }
        return response;
    } catch (error) {
        // Handle errors in a standard way
        if (error.response) {
            throw new Error(ERROR_MESSAGES.API_ERROR.replace('{status}', error.response.status).replace('{message}', error.response.data.message));
        } else if (error.request) {
            throw new Error(ERROR_MESSAGES.NETWORK_ERROR);
        } else {
            throw new Error(ERROR_MESSAGES.UNEXPECTED_ERROR.replace('{message}', error.message));
        }
    }
};

export default makeApiRequest;
