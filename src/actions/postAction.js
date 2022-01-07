import axios from 'axios';

export const GET_POST = "GET_POST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_FAILURE = "GET_POST_FAILURE";

export const getPosts = () => ({ TYPE: GET_POST })

export const getPostsSuccess = (posts) => ({
    type: GET_POST_SUCCESS,
    payload: posts
})

export const getPostsFaliur = () => ({ TYPE: GET_POST_FAILURE })


export function fetchPost(id) {
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



