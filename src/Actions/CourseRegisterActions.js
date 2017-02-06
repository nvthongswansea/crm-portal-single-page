import actiontype from './actiontypes.js';

const loadTicketPicker = (courseId) => ({
	type: actiontype.FETCH_TICKETPICKER,
	courseId: courseId
})

const successLoadedTP = (data) => ({
	type: actiontype.FETCH_TICKETPICKER_SUCCESS,
	payload: data
})

const failedLoadedTP = (data) => ({
	type: actiontype.FETCH_TICKETPICKER_FAILED,
	payload: data
})

const registerCourse = (param) => ({
	type: actiontype.COURSE_REGISTER,
	param: param
})

const registeredCourse = (courseId) => ({
	type: actiontype.COURSE_REGISTERED,
	courseId: courseId
})

const cancelCourseByCoupon = (param) => ({
	type: actiontype.COURSE_CANCEL_COUPON,
	param: param
})

const canceledCourseByCoupon = (courseId) => ({
	type: actiontype.COURSE_CANCELED_COUPON,
	courseId: courseId
})

const registerCourseByCoupon = (param) => ({
	type: actiontype.COURSE_REGISTER_COUPON,
	param: param
})

const registeredCourseByCoupon = (courseId) => ({
	type: actiontype.COURSE_REGISTERED_COUPON,
	courseId: courseId
})



export default {
	loadTicketPicker,
	successLoadedTP,
	failedLoadedTP,
	registerCourse,
	registeredCourse,
	registerCourseByCoupon,
	registeredCourseByCoupon,
	cancelCourseByCoupon,
	canceledCourseByCoupon
}