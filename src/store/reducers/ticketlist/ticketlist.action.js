import { TICKETLIST_ACTION_TYPES } from "./ticketlist.type";
import  createAction  from "../../utils/action";
import axios from 'axios';

export const ticketlistreqstart = () => {
    return createAction(TICKETLIST_ACTION_TYPES.TICKETLIST_REQUEST);
}

export const ticketlistreqsuccess = (data) => {
   return createAction(TICKETLIST_ACTION_TYPES.TICKETLIST_LOGIN_SUCCESS, data);
}

export const ticketlistreqerror = (error) => {
   return createAction(TICKETLIST_ACTION_TYPES.TICKETLIST_LOGIN_FAIL, error);
}



export const showTickets = () => {
   
    return async(dispatch,getState) => {
        dispatch(ticketlistreqstart());
        try{
            
            const { userLogin: { userInfo } } = getState();
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.tokens[0]}`
                } 

                }
            const {data} = await axios.get(`${process.env.REACT_APP_URL}/api/ticket`, config)
            
            dispatch(ticketlistreqsuccess(data));
        }catch(error){
            let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
            dispatch(ticketlistreqsuccess(error_payload));  
        }
    }
}
