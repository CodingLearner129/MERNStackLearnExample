import * as apis from './../apis';
import * as actionType from '../constants/actionTypes';

// console.log("auth action");
//Action creators
export const signIn = (formData, navigate) => {
    return async (dispatch) => {
        try {
            const { data } = await apis.signIn(formData);
            dispatch({ type: actionType.AUTH, payload: data.data });
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const signUp = (formData, navigate) => {
    return async (dispatch) => {
        try {
            const { data } = await apis.signUp(formData);
            dispatch({ type: actionType.AUTH, payload: data.data });
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }
}