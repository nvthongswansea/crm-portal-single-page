import axios from 'axios';
import {
	AWAIT_MARKER
} from 'redux-await';
import {
	REFRESH_TABLE,
	REFRESH_FAQ,
	REFRESH_ADDTICKET,
	GET_TICKET
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


	}
}