import { combineReducers } from "redux";

import auth from './auth';
import posts from './posts';

// console.log("index reducer");

export default combineReducers({ auth, posts });