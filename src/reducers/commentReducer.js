import * as actions from "../actions/commentActions";


export const initialState = {
    loading: false,
    hasErrors: false,
    comments: []
}

export default function postRducers(state = initialState, action) {
    switch (action.type) {
        case actions.GET_COMMENTS:
            return { ...state, loading: true }
        case actions.GET_COMMENTS_SUCCESS:
            return { ...state, loading: false, comments: action.payload }
        case actions.GET_COMMENTS_FAILURE:
            return { ...state, loading: false, hasErrors: false }
        default:
            return state;
    }
}


