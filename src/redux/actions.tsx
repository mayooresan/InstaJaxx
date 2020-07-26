export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';
export const FETCH_POSTS_REQUESTS = 'FETCH_POSTS_REQUESTS';
export const FETCH_POSTS_REQUESTS_ERROR = 'FETCH_POSTS_REQUESTS_ERROR';
export const FETCH_POSTS_REQUESTS_SUCCESS = 'FETCH_POSTS_REQUESTS_SUCCESS';

export const increaseCounter = () => {
    return {type: INCREASE_COUNTER}
}

export const decreaseCounter = () => {
    return {type: DECREASE_COUNTER}
}