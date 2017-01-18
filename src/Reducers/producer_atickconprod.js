import {REFRESH_ATICKCONTPRODEDITOR} from '../Actions/actiontypes.js';
export default function(state=null, action) {
	switch(action.type) {
		case REFRESH_ATICKCONTPRODEDITOR:
		return action.payload.loadedATCPeditor;
	}
	return state;
}