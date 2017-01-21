import {REFRESH_SUMTABLE} from '../Actions/actiontypes.js';
export default function(state=null, action) {
	switch(action.type) {
		case REFRESH_SUMTABLE:
		return action.payload.loadedSumTable;
	}
	return state;
}