import actiontype from '../Actions/actiontypes.js';
export default function(state = {
	loading: true, closeloading: false
}, action) {
	switch (action.type) {
		case actiontype.FETCH_TICKET:
			return {
				loading: true,
				closeloading: false
			};
		case actiontype.FETCH_TICKET_SUCCESS:
			return {
				loading: false,
				closeloading: false,
				data: action.payload
			};
		case actiontype.FETCH_TICKET_FAILED:
			return {
				loading: false,
				closeloading: false,
				data: action.payload
			};
		case actiontype.CLOSE_SUPPORT_TICKET:
			return {
				loading: false,
				closeloading: true
			};
		case actiontype.CLOSED_SUPPORT_TICKET:
			return {
				loading: false,
				closeloading: false
			};
	}
	return state;
}