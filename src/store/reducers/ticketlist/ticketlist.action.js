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
            console.log(userInfo.tokens[0])

            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.tokens[0]}`
                } 

                }
                console.log('Hi Test')
            const {data} = await axios.get('http://localhost:4000/api/ticket', config)
            console.log('data: ', data);
            dispatch(ticketlistreqsuccess(data));
        }catch(error){
            console.log(error.message);
            let error_payload = error.response && error.response.data.message ? error.response.data.message : error.message
            dispatch(ticketlistreqsuccess(error_payload));  
        }
    }
}
