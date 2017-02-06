import actiontype from '../Actions/actiontypes.js';
export default function(state = {
	loading: true,
	postloading: false
}, action) {
	switch (action.type) {
		case actiontype.FETCH_MODAL:
			return {
				loading: true,
				postloading: false
			};
		case actiontype.FETCH_MODAL_SUCCESS:
			return {
				loading: false,
				postloading: false,
				data: action.payload
			};
		case actiontype.FETCH_MODAL_FAILED:
			return {
				loading: false,
				postloading: false,
				data: action.payload
			};
		case actiontype.STUDENT_CHANGE:
			return {
				data: {...state.data},
				loading: false,
				postloading: true,
			};
		case actiontype.STUDENT_CHANGED:
			return {
				loading: false,
				postloading: false,
			};
		case actiontype.VOUCHER_OWNER_CHANGE:
			return {
				data: {...state.data},
				loading: false,
				postloading: true,
			};
		case actiontype.VOUCHER_OWNER_CHANGED:
			return {
				loading: false,
				postloading: false,
			};
	}
	return state;
}