import { FETCH_ALL, FETCH_POST, FETCH_BY_SEARCH, CREATE, UPDATE, LIKE, DELETE, START_LOADING, END_LOADING } from '../constants/actionTypes';

// console.log("post reducer");
// export default (posts = [], action) => { // here posts is the state of posts
export default (state = { isLoading: true, posts: [] }, action) => { // here posts is the state of posts
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            // return action.payload;
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                totalPages: action.payload.totalPages
            };
        case FETCH_BY_SEARCH:
            // return action.payload;
            return { ...state, posts: action.payload };
        case FETCH_POST:
            return { ...state, post: action.payload };
        case CREATE:
            // return [...posts, action.payload];
            return { ...state, posts: [...state.posts, action.payload] };
        case UPDATE:
        case LIKE:
            // return posts.map((post) => post._id === action.payload._id ? action.payload : post);
            return { ...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post) };
        case DELETE:
            // return posts.filter((post) => post._id !== action.payload);
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
        default:
            return state;
    }
}