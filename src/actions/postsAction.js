import axios from 'axios';

export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

export const getPosts = () => ({ TYPE: GET_POSTS })

export const getPostsSuccess = (posts) => ({
    type: GET_POSTS_SUCCESS,
    payload: posts
})

export const getPostsFaliur = () => ({ TYPE: GET_POSTS_FAILURE })


export function fetchPosts(id) {
    return async dispatch => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        dispatch(getPosts(data));
        
        try {
            dispatch(getPostsSuccess());
        } catch (error) {
            dispatch(getPostsFaliur());
        }

    }
}



