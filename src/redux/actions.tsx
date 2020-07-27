import axios from 'axios'

export const FETCH_POSTS_REQUESTS = 'FETCH_POSTS_REQUESTS';
export const FETCH_POSTS_REQUESTS_ERROR = 'FETCH_POSTS_REQUESTS_ERROR';
export const FETCH_POSTS_REQUESTS_SUCCESS = 'FETCH_POSTS_REQUESTS_SUCCESS';

export const fetchImageRequests = () => {
    return {type: FETCH_POSTS_REQUESTS}
}

export const fetchImages = () => {
    return (dispatch: any) => {
        dispatch(fetchImageRequests)
        axios.get('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5')
            .then(response => {
                const images = response.data
                dispatch(fetchImageRequestsSuccess(images))
            })
            .catch(error=>{
                const errorMessage = error.message
                dispatch(fetchImageRequestsError(errorMessage))
            })
    }
}

export const fetchImageRequestsSuccess = (images:any) => {
    return {type: FETCH_POSTS_REQUESTS_SUCCESS, payload:images}
}

export const fetchImageRequestsError = (error:any) => {
    return {type: FETCH_POSTS_REQUESTS_ERROR, payload:error}
}

