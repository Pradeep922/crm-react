import { USER_ACTION_TYPES } from "./user.type";
import  createAction  from "../../utils/action";
import axios from 'axios';

export const fetchuserstart = () => {
    return createAction(USER_ACTION_TYPES.USER_LOGIN_REQUEST);
}

export const fetchusersuccess = (userinfo) => {
   return createAction(USER_ACTION_TYPES.USER_LOGIN_SUCCESS, userinfo);
}

export const fetchusererror = (error) => {
   return createAction(USER_ACTION_TYPES.USER_LOGIN_FAIL, error);
}

export const fetchlogout = () => {
    return createAction(USER_ACTION_TYPES.USER_LOGOUT);
}

export const loginasyncstart = (name, password, Navigate) => {
   
    return async(dispatch) => {
        dispatch(fetchuserstart());
        try{

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            const { data } = await axios.post('http://localhost:4000/api/users/login', {name, password}, config)
            dispatch(fetchusersuccess(data));

            localStorage.setItem('userInfo', JSON.stringify(data));
            Navigate('/Dashboard')
        }catch(error){
            console.log(error.message);
            let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
            dispatch(fetchusererror(error_payload));  
        }
    }
}

export const logout = () => {
    return async(dispatch) => {
        localStorage.removeItem('userInfo');
        dispatch(fetchlogout());
        
    }
}