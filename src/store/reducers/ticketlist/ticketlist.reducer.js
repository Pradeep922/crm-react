import { TICKETLIST_ACTION_TYPES } from "./ticketlist.type";

const INITIAL_STATE = {
    loading: false,
    allticketlist: null,
    error: ""
}

export const ticketlistReducer = (state= INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch(type){
        case TICKETLIST_ACTION_TYPES.TICKETLIST_REQUEST:
        return {...state, loading: true}

        case TICKETLIST_ACTION_TYPES.TICKETLIST_LOGIN_SUCCESS:
            return {...state, loading: false, allticketlist: payload}

        case TICKETLIST_ACTION_TYPES.TICKETLIST_LOGIN_FAIL:
            return {...state, loading: false, error: payload}

        
        default:
            return state;    
    }    
}