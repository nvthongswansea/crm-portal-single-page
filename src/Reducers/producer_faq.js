import {REFRESH_FAQ} from '../Actions/actiontypes.js';
export default function(state=null, action) {
	switch(action.type) {
		case REFRESH_FAQ:
		return action.payload.loadedFAQ;
	}
	return state;
}