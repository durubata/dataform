export declare class ResponseError extends Error {
    response: Response;
    constructor(response: Response);
}
/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export declare function request(url: string, options?: RequestInit): Promise<{} | {
    err: ResponseError;
}>;
