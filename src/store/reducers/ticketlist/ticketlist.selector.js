import { createSelector } from "reselect";

const SelectorTicketList = (state) => state.ticketlist

export const allTickets = createSelector(
    [SelectorTicketList], 
    (tickets) => tickets.allticketlist
)

export const selectError = createSelector(
    [SelectorTicketList],
    (tickets) => tickets.error
)
