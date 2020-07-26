import { INCREASE_COUNTER, DECREASE_COUNTER } from "./actions"


const initialState = {
    counter: 0
}

const reducer = (state = initialState, action: any): any => {
    switch (action.type) {
        case INCREASE_COUNTER:
        return { counter:state.counter + 1 }
        case DECREASE_COUNTER:
        return { counter:state.counter  - 1 }
    }
    return state
}

export default reducer
