import {RESET_POSTS_LOADING, SET_POSTS, SET_POSTS_LOADING} from "../actionTypes";

export const setPosts = (payload) => ({type: SET_POSTS, payload: payload})
export const setPostsLoading = () => ({type: SET_POSTS_LOADING})
export const resetPostsLoading = () => ({type: RESET_POSTS_LOADING})