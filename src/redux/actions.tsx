import axios from 'axios'
import { Alert } from 'react-native';

export const FETCH_POSTS_REQUESTS = 'FETCH_POSTS_REQUESTS';
export const FETCH_POSTS_REQUESTS_ERROR = 'FETCH_POSTS_REQUESTS_ERROR';
export const FETCH_POSTS_REQUESTS_SUCCESS = 'FETCH_POSTS_REQUESTS_SUCCESS';

export const fetchImageRequests = () => {
    return {type: FETCH_POSTS_REQUESTS}
}

export const fetchImages = (pagination: number) => {
    return (dispatch: any) => {
        dispatch(fetchImageRequests)
        axios.get('https://api.unsplash.com/photos/?page='+pagination+'&client_id=5DWQpptvtD4X7LBVl7Ive8LuWrjWdyGNovl45NsvegM')
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

