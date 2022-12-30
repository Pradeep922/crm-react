import { TICKET_ACTION_TYPES } from "./tickets.type";
import  createAction  from "../../utils/action";
import axios from 'axios';

export const ticketreqstart = () => {
    return createAction(TICKET_ACTION_TYPES.TICKET_REQUEST);
}

export const ticketreqsuccess = () => {
   return createAction(TICKET_ACTION_TYPES.TICKET_LOGIN_SUCCESS);
}

export const ticketreqerror = (error) => {
   return createAction(TICKET_ACTION_TYPES.TICKET_LOGIN_FAIL, error);
}



export const createTicket = (title, description, category, priority, progress, status, Navigate) => {
   
    return async(dispatch,getState) => {
        dispatch(ticketreqstart());
        try{
            console.log('Hi');
            const { userLogin: { userInfo } } = getState();
            console.log(userInfo.tokens[0])

            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.tokens[0]}`
                } 

                }
            await axios.post('http://localhost:4000/api/ticket', {title, description, category, priority, progress, status}, config)
            dispatch(ticketreqsuccess());

            Navigate('/Dashboard')
        }catch(error){
            
            let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
            console.log(error_payload);
            dispatch(ticketreqerror(error_payload));  
        }
    }
}
