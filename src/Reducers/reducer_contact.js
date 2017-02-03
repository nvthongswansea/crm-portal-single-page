import {GET_CONTACT} from '../Actions/actiontypes.js';
export default function(state=null, action) {
	switch(action.type) {
		case GET_CONTACT:
		return action.payload.loadedContactInfo;
	}
	return state;
}