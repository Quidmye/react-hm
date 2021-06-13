import {SET_POSTS, SET_POSTS_LOADING, RESET_POSTS_LOADING} from "../actionTypes";

const initialState = {
    posts: [],
    isPostsLoading: false
}
export const postsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_POSTS:
            console.log(action);
            return {
                ...state,
                posts: action.payload
            }
        case SET_POSTS_LOADING:
            return {
                ...state,
                isPostsLoading: true
            }
        case RESET_POSTS_LOADING:
            return {
                ...state,
                isPostsLoading: false
            }
        default:
            return state;
    }
    console.log(state);
}