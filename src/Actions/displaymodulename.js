import axios from 'axios';
import {
	AWAIT_MARKER
} from 'redux-await';
import {
	REFRESH_TABLE,
	REFRESH_FAQ,
	REFRESH_ADDTICKET,
	GET_TICKET,
	GET_CONTACT,
	REFRESH_TICKETPICKER
} from './actiontypes.js';

export function refreshContent(menutitle) {
	switch (menutitle) {
		case 'HelpDesk':
			return {
				type: REFRESH_TABLE,
				AWAIT_MARKER,
				payload: {
					loadedTable: axios.get('/portal/listtickets')
						.then((response) => {
							return response.data;
						})
						.catch((err) => {
							return err;
						})

				},
			};
		case "Contacts":
			return {
				type: REFRESH_TABLE,
				AWAIT_MARKER,
				payload: {
					loadedTable: axios.get('/portal/listcontacts')
						.then((response) => {
							return response.data;
						})
						.catch((err) => {
							return err;
						})

				},
			};
		case "Products":
			return {
				type: REFRESH_TABLE,
				AWAIT_MARKER,
				payload: {
					loadedTable: axios.get('/portal/listproducts')
						.then((response) => {
							return response.data;
						})
						.catch((err) => {
							return err;
						})

				},
			};
		case "ATickets":
			return {
				type: REFRESH_TABLE,
				AWAIT_MARKER,
				payload: {
					loadedTable: axios.get('/portal/listatickets')
						.then((response) => {
							return response.data;
						})
						.catch((err) => {
							return err;
						})

				},
			};
		case 'Faq':
			return {
				type: REFRESH_FAQ,
				AWAIT_MARKER,
				payload: {
					loadedFAQ: axios.get("/portal/listfaq")
						.then((response) => {
							return response.data;
						})
						.catch((err) => {
							return err;
						})

				},
			};
		case 'newticket':
			return {
				type: REFRESH_ADDTICKET,
				AWAIT_MARKER,
				payload: {
					loadedAddTicketForm: axios.get("/portal/inforaddnewticket")
						.then((response) => {
							return response.data;
						})
						.catch((err) => {
							return err;
						})

				},
			};

	}

}

export function getContentByParam(module, param) {
	switch (module) {
		case 'ticketdetail':
			return {
				type: GET_TICKET,
				AWAIT_MARKER,
				payload: {
					loadedTicketInfo: axios.get("/portal/ticket/" + param)
						.then((response) => {
							return response.data;
						})
						.catch((err) => {
							return err;
						})

				},
			};
		case "closeticket":
			return {
				type: GET_TICKET,
				AWAIT_MARKER,
				payload: {
					loadedTicketInfo: axios.get("/portal/closeticket/" + param)
						.then((response) => {
							return axios.get("/portal/ticket/" + response.data.ticketid)
								.then((responset) => {
									return responset.data;
								})
								.catch((err) => {
									return errt;
								})
						})
						.catch((err) => {
							conosle.log(err);
						})
				},
			};
		case "contactdetail":
			return {
				type: GET_CONTACT,
				AWAIT_MARKER,
				payload: {
					loadedContactInfo: axios.get("/portal/contact/" + param)
						.then((response) => {
							return response.data;
						})
						.catch((err) => {
							return err;
						})

				},
			};
		case 'ticketpicker':
			return {
				type: REFRESH_TICKETPICKER,
				AWAIT_MARKER,
				payload: {
					loadedTicketPicker: axios.get("/portal/aticketsproduct/" + param)
						.then((response) => {
							return response.data;
						})
						.catch((err) => {
							return err;
						})

				},
			};

		case 'test': 
			console.log("this is a test! with param: "+param);
	}
}