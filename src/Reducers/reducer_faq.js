import actiontype from '../Actions/actiontypes.js';
export default function(state= {loading: true}, action) {
	switch(action.type) {
		case actiontype.FETCH_FAQ:
			return {loading: true};
		case actiontype.FETCH_FAQ_SUCCESS:
			return {data: action.payload, loading: false};
		case actiontype.FETCH_FAQ_FAILED:
			return {data: action.payload, loading: false};
	}
	return state;
}