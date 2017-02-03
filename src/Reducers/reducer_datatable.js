import {REFRESH_TABLE} from '../Actions/actiontypes.js';
export default function(state=null, action) {
	switch(action.type) {
		case REFRESH_TABLE:
		return action.payload.loadedTable;
	}
	return state;
}