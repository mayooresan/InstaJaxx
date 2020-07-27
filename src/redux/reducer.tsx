import { FETCH_POSTS_REQUESTS, FETCH_POSTS_REQUESTS_ERROR, FETCH_POSTS_REQUESTS_SUCCESS } from "./actions"
export interface RootState {
    loading: boolean;
    data: any;
    error: string;
}

export const initialState: RootState = {
    loading:false,
    data:[],
    error:"",
}

const reducer = (state = initialState, action: any): any => {
    switch (action.type) {
        case FETCH_POSTS_REQUESTS:
            return {...state, loading:true }
        case FETCH_POSTS_REQUESTS_ERROR:
            return {
                loading:false,
                error:action.payload,
            }
        case FETCH_POSTS_REQUESTS_SUCCESS:
            let cachedData = [...state.data]
            return {
                loading:false,
                data:cachedData.concat(action.payload)
            }
    }
    return state
}

export default reducer
