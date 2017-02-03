import {REFRESH_ADDTICKET} from '../Actions/actiontypes.js';
export default function(state=null, action) {
	switch(action.type) {
		case REFRESH_ADDTICKET:
		return action.payload.loadedAddTicketForm;
	}
	return state;
}