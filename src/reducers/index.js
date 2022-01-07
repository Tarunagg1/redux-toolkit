import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import commentReducer from "./commentReducer";
import postsReducer from "./postsReducer";
import PostReducer from "./PostReducer";



const rootReducer = combineReducers({
    post: PostReducer,
    posts: postsReducer,
    comment: commentReducer
})

const middleware = [thunkMiddleware];

const Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;