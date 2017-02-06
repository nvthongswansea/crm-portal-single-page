import actiontype from '../Actions/actiontypes.js';
export default function(state = {
	loading: true,
	regloading: false,
	checkcoupon: null
}, action) {
	switch (action.type) {
		case actiontype.FETCH_TICKETPICKER:
			return {
				loading: true,
				regloading: false,
				checkcoupon: null
			};
		case actiontype.FETCH_TICKETPICKER_SUCCESS:
			return {
				data: action.payload,
				loading: false,
				regloading: false,
				checkcoupon: null
			};
		case actiontype.FETCH_TICKETPICKER_FAILED:
			return {
				data: action.payload,
				loading: false,
				regloading: false,
				checkcoupon: null
			};
		case actiontype.COURSE_REGISTER:
			return {
				data: {...state.data},
				loading: false,
				regloading: true,
				checkcoupon: null
			};
		case actiontype.COURSE_REGISTERED:
			return {
				data: {...state.data},
				loading: false,
				regloading: false,
				checkcoupon: null
			};
		case actiontype.COURSE_REGISTER_COUPON:
			return {
				data: {...state.data},
				loading: false,
				regloading: true,
				checkcoupon: null
			};
		case actiontype.NO_COUPON:
			return {
				data: {...state.data},
				loading: false,
				regloading: false,
				checkcoupon: "none"
			};
		case actiontype.COUPON_USED:
			return {
				data: {...state.data},
				loading: false,
				regloading: false,
				checkcoupon: "used"
			};
		case actiontype.COUPON_INVALID:
			return {
				data: {...state.data},
				loading: false,
				regloading: false,
				checkcoupon: "invalid"
			};
		case actiontype.COURSE_REGISTERED_COUPON:
			return {
				data: {...state.data},
				loading: false,
				regloading: false,
				checkcoupon: null
			};
		case actiontype.COURSE_CANCEL_COUPON:
			return {
				data: {...state.data},
				loading: false,
				regloading: true,
				checkcoupon: null
			};
		case actiontype.COURSE_CANCELED_COUPON:
			return {
				data: {...state.data},
				loading: false,
				regloading: false,
				checkcoupon: null
			};
	}
	return state;
}