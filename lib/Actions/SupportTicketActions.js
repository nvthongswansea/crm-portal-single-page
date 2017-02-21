'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = require('./actiontypes.js');

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchSupportTicket = function fetchSupportTicket(ticketid) {
	return {
		type: _actiontypes2.default.FETCH_TICKET,
		ticketid: ticketid
	};
};

var successFetchedTicket = function successFetchedTicket(data) {
	return {
		type: _actiontypes2.default.FETCH_TICKET_SUCCESS,
		payload: data
	};
};

var failedFetchedTicket = function failedFetchedTicket(data) {
	return {
		type: _actiontypes2.default.FETCH_TICKET_SUCCESS,
		payload: data
	};
};

var refreshAddTicketForm = function refreshAddTicketForm() {
	return {
		type: _actiontypes2.default.FETCH_ADDTICKET
	};
};

var successRefreshedAddTicketForm = function successRefreshedAddTicketForm(data) {
	return {
		type: _actiontypes2.default.FETCH_ADDTICKET_SUCCESS,
		payload: data
	};
};

var failedRefreshedAddTicketForm = function failedRefreshedAddTicketForm(data) {
	return {
		type: _actiontypes2.default.FETCH_ADDTICKET_FAILED,
		payload: data
	};
};

var addSupportTicket = function addSupportTicket(formdata) {
	return {
		type: _actiontypes2.default.ADD_SUPPORT_TICKET,
		formdata: formdata
	};
};

var addedSupportTicket = function addedSupportTicket() {
	return {
		type: _actiontypes2.default.ADDED_SUPPORT_TICKET
	};
};

var closeSupportTicket = function closeSupportTicket(ticketid) {
	return {
		type: _actiontypes2.default.CLOSE_SUPPORT_TICKET,
		ticketid: ticketid
	};
};

var closedSupportTicket = function closedSupportTicket(ticketid) {
	return {
		type: _actiontypes2.default.CLOSED_SUPPORT_TICKET,
		ticketid: ticketid
	};
};
exports.default = {
	fetchSupportTicket: fetchSupportTicket,
	successFetchedTicket: successFetchedTicket,
	failedFetchedTicket: failedFetchedTicket,
	refreshAddTicketForm: refreshAddTicketForm,
	successRefreshedAddTicketForm: successRefreshedAddTicketForm,
	failedRefreshedAddTicketForm: failedRefreshedAddTicketForm,
	addSupportTicket: addSupportTicket,
	addedSupportTicket: addedSupportTicket,
	closeSupportTicket: closeSupportTicket,
	closedSupportTicket: closedSupportTicket
};