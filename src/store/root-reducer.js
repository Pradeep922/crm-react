import { combineReducers } from "redux";
import { userLoginReducer } from "./reducers/user/user.reducer";
import { ticketlistReducer } from "./reducers/ticketlist/ticketlist.reducer"
import {ticketReducer} from "./reducers/tickets/tickets.reducer"

export const rootReducer = combineReducers({
userLogin: userLoginReducer,
ticket: ticketReducer,
ticketlist: ticketlistReducer
})