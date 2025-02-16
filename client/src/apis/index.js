import axios from 'axios';
import config from '../config/config';
import { decryptData } from '../helpers/ecrypt_decrypt';

const url = `${config.nodeUrl}/v1`;
const API = axios.create({baseURL: url});

API.interceptors.request.use((req) => {    
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(decryptData(localStorage.getItem('profile'))).token}`;
    }
    return req;
});

// console.log("api index");

// Auth
// export const signIn = (formData) => axios.post(`${url}/user/signIn`, formData);
// export const signUp = (formData) => axios.post(`${url}/user/signUp`, formData);
export const signIn = (formData) => API.post(`/user/signIn`, formData);
export const signUp = (formData) => API.post(`/user/signUp`, formData);

// Post
// export const fetchPosts = () => axios.get(`${url}/post`);
// export const createPost = (newPost) => axios.post(`${url}/post`, newPost);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/post/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/post/${id}`);
// export const likePost = (id) => axios.patch(`${url}/post/${id}/likePost`);
export const fetchPosts = (page) => API.get(`/post?page=${page}`);
export const fetchPost = (id) => API.get(`/post/${id}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/post/search?searchQuery=${searchQuery.search || ''}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post(`/post`, newPost);
export const updatePost = (id, updatedPost) => API.patch(`/post/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/post/${id}`);
export const likePost = (id) => API.patch(`/post/${id}/likePost`);