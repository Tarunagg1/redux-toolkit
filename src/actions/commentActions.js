import axios from 'axios';

export const GET_COMMENTS = "GET_COMMENTS";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE";

export const getComments = () => ({ TYPE: GET_COMMENTS })

export const getCommentsSucces = (comments) => ({
    type: GET_COMMENTS_SUCCESS,
    payload: comments
})

export const getCommentsFaliur = () => ({ TYPE: GET_COMMENTS_FAILURE })


export function fetchComments(postId) {
    return async dispatch => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const data = await response.json();
        dispatch(getComments(data));

        try {
            dispatch(getCommentsSucces());
        } catch (error) {
            dispatch(getCommentsFaliur());
        }

    }
}



