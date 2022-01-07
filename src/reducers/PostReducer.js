import * as actions from "../actions/postAction";


export const initialState = {
    loading: false,
    hasErrors: false,
    post: {}
}

export default function postRducers(state = initialState, action) {
    switch (action.type) {
        case actions.GET_POST:
            return { ...state, loading: true }
        case actions.GET_POST_SUCCESS:
            return { ...state, loading: false, post: action.payload }
        case actions.GET_POST_FAILURE:
            return { ...state, loading: false, hasErrors: false }

        default:
            return state;
    }
}


