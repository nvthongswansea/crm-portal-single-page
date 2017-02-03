import {REFRESH_MODAL} from '../Actions/actiontypes.js';
export default function(state=null, action) {
	switch(action.type) {
		case REFRESH_MODAL:
		return action.payload.loadedModal;
	}
	return state;
}