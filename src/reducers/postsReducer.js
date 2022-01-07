import * as actions from "../actions/postsAction";


export const initialState = {
    loading: false,
    hasErrors: false,
    posts: []
}

export default function postsReducers(state = initialState, action) {
    switch (action.type) {
        case actions.GET_POSTS:
            return { ...state, loading: true }
        case actions.GET_POSTS_SUCCESS:
            return { ...state, loading: false, posts: action.payload }
        case actions.GET_POSTS_FAILURE:
            return { ...state, loading: false,hasErrors:false }

        default:
            return state;
    }
}


