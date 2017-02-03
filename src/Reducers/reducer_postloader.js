import {POST_LOADER} from '../Actions/actiontypes.js';
export default function(state=null, action) {
	switch(action.type) {
		case POST_LOADER:
		return action.payload.postResult;
	}
	return state;
}