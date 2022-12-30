import { TICKET_ACTION_TYPES } from "./tickets.type";

const INITIAL_STATE = {
    loading: false,
    success: null,
    error: null
}

export const ticketReducer = (state= INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch(type){
        case TICKET_ACTION_TYPES.TICKET_REQUEST:
        return {...state, loading: true}

        case TICKET_ACTION_TYPES.TICKET_LOGIN_SUCCESS:
            return {...state, loading: false, success: true}

        case TICKET_ACTION_TYPES.TICKET_LOGIN_FAIL:
            return {...state, loading: false, error: payload}

        
        default:
            return state;    
    }    
}