import {REFRESH_TICKETPICKER} from '../Actions/actiontypes.js';
export default function(state=null, action) {
	switch(action.type) {
		case REFRESH_TICKETPICKER:
		return action.payload.loadedTicketPicker;
	}
	return state;
}