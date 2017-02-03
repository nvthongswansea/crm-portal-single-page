import {GET_TICKET} from '../Actions/actiontypes.js';
export default function(state=null, action) {
	switch(action.type) {
		case GET_TICKET:
		return action.payload.loadedTicketInfo;
	}
	return state;
}