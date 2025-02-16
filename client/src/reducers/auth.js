import { AUTH, LOGOUT } from '../constants/actionTypes';
import { encryptData } from '../helpers/ecrypt_decrypt';

// console.log("auth reducer");
export default (state = { authData: null }, action) => { // here posts is the state of posts
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', encryptData(JSON.stringify({ ...action?.payload })));
            return { ...state, authData: action?.payload };
        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null };
        default:
            return state;
    }
}