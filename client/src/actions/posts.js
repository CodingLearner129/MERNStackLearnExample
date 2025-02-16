import * as apis from './../apis';
import { FETCH_ALL, FETCH_POST, FETCH_BY_SEARCH, CREATE, UPDATE, LIKE, DELETE, START_LOADING, END_LOADING } from '../constants/actionTypes';

// console.log("posts action");
//Action creators
export const getPosts = (page) => {
    return async (dispatch) => {
        try {
            dispatch({ type: START_LOADING });
            const { data } = await apis.fetchPosts(page);
            // dispatch({ type: FETCH_ALL, payload: data.data });
            dispatch({ type: FETCH_ALL, payload: data });
            dispatch({ type: END_LOADING });
        } catch (error) {
            console.log(error);
            console.log(error.message);
            dispatch({ type: FETCH_ALL, payload: {} });
            dispatch({ type: END_LOADING });
        }
    }
}

export const getPost = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: START_LOADING });
            const { data } = await apis.fetchPost(id);
            dispatch({ type: FETCH_POST, payload: data.data });
            dispatch({ type: END_LOADING });
        } catch (error) {
            console.log(error);
            console.log(error.message);
            dispatch({ type: FETCH_POST, payload: {} });
            dispatch({ type: END_LOADING });
        }
    }
}

export const getPostsBySearch = (searchQuery) => {
    return async (dispatch) => {
        try {
            dispatch({ type: START_LOADING });
            const { data } = await apis.fetchPostsBySearch(searchQuery);
            // console.log(data);
            dispatch({ type: FETCH_BY_SEARCH, payload: data.data });
            dispatch({ type: END_LOADING });
        } catch (error) {
            console.log(error.message);
            dispatch({ type: FETCH_BY_SEARCH, payload: [] });
            dispatch({ type: END_LOADING });
        }
    }
}

export const createPost = (post) => {
    return async (dispatch) => {
        try {
            dispatch({ type: START_LOADING });
            const { data } = await apis.createPost(post);
            dispatch({ type: CREATE, payload: data.data });
            dispatch({ type: END_LOADING });
        } catch (error) {
            console.log(error);
            console.log(error.message);
            dispatch({ type: END_LOADING });
        }
    }
}

export const updatePost = (id, post) => {
    return async (dispatch) => {
        try {
            dispatch({ type: START_LOADING });
            const { data } = await apis.updatePost(id, post);
            dispatch({ type: UPDATE, payload: data.data });
            dispatch({ type: END_LOADING });
        } catch (error) {
            console.log(error.message);
            dispatch({ type: END_LOADING });
        }
    }
}

export const deletePost = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: START_LOADING });
            await apis.deletePost(id);
            dispatch({ type: DELETE, payload: id });
            dispatch({ type: END_LOADING });
        } catch (error) {
            console.log(error.message);
            dispatch({ type: END_LOADING });
        }
    }
}

export const likePost = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: START_LOADING });
            const { data } = await apis.likePost(id);
            dispatch({ type: LIKE, payload: data.data });
            dispatch({ type: END_LOADING });
        } catch (error) {
            console.log(error.message);
            dispatch({ type: END_LOADING });
        }
    }
}