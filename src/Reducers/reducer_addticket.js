import actiontype from '../Actions/actiontypes.js';

export default function(state = {
	submitloading: false,
	loading: true
}, action) {
	switch (action.type) {
		case actiontype.FETCH_ADDTICKET:
			return {
				submitloading: false,
				loading: true
			};
		case actiontype.FETCH_ADDTICKET_SUCCESS:
			return {
				data: action.payload,
				submitloading: false,
				loading: false
			};
		case actiontype.FETCH_ADDTICKET_FAILED:
			return {
				data: action.payload,
				submitloading: false,
				loading: false
			};
		case actiontype.ADD_SUPPORT_TICKET:
			return {
				submitloading: true,
				loading: false
			};
		case actiontype.ADDED_SUPPORT_TICKET:
			
			return {
				submitloading: false,
				loading: false
			};
	}
	return state;
}