import actiontype from '../Actions/actiontypes.js';
export default function(state = {
	loading: true
}, action) {
	switch (action.type) {
		case actiontype.FETCH_ATICKCONTPRODEDITOR:
			return {
				loading: true
			};
		case actiontype.FETCH_ATICKCONTPRODEDITOR_SUCCESS:
			return {
				data: action.payload,
				loading: false
			};
		case actiontype.FETCH_ATICKCONTPRODEDITOR_FAILED:
			return {
				data: action.payload,
				loading: false
			};
		case actiontype.FETCH_VOUCHERDETAIL:
			return {
				loading: true
			};
		case actiontype.FETCH_VOUCHERDETAIL_SUCCESS:
			return {
				data: action.payload,
				loading: false
			};
		case actiontype.FETCH_VOUCHERDETAIL_FAILED:
			return {
				data: action.payload,
				loading: false
			};
	}
	return state;
}