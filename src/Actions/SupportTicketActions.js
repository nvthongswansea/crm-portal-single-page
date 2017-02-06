import actiontype from './actiontypes.js';

const fetchSupportTicket = (ticketid) => ({
	type: actiontype.FETCH_TICKET,
	ticketid: ticketid
})

const successFetchedTicket = (data) => ({
	type: actiontype.FETCH_TICKET_SUCCESS,
	payload: data
})

const failedFetchedTicket = (data) => ({
	type: actiontype.FETCH_TICKET_SUCCESS,
	payload: data
})

const refreshAddTicketForm = () => ({
	type: actiontype.FETCH_ADDTICKET
})

const successRefreshedAddTicketForm = (data) => ({
	type: actiontype.FETCH_ADDTICKET_SUCCESS,
	payload: data
})

const failedRefreshedAddTicketForm = (data) => ({
	type: actiontype.FETCH_ADDTICKET_FAILED,
	payload: data
})

const addSupportTicket = (formdata) => ({
	type: actiontype.ADD_SUPPORT_TICKET,
	formdata: formdata
})

const addedSupportTicket = () => ({
	type: actiontype.ADDED_SUPPORT_TICKET
})

const closeSupportTicket = (ticketid) => ({
	type: actiontype.CLOSE_SUPPORT_TICKET,
	ticketid: ticketid
})

const closedSupportTicket = (ticketid) => ({
	type: actiontype.CLOSED_SUPPORT_TICKET,
	ticketid: ticketid
})
export default {
	fetchSupportTicket,
	successFetchedTicket,
	failedFetchedTicket,
	refreshAddTicketForm,
	successRefreshedAddTicketForm,
	failedRefreshedAddTicketForm,
	addSupportTicket,
	addedSupportTicket,
	closeSupportTicket,
	closedSupportTicket
}