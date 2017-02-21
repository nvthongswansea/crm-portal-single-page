'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = require('./actiontypes.js');

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadTicketPicker = function loadTicketPicker(courseId) {
	return {
		type: _actiontypes2.default.FETCH_TICKETPICKER,
		courseId: courseId
	};
};

var successLoadedTP = function successLoadedTP(data) {
	return {
		type: _actiontypes2.default.FETCH_TICKETPICKER_SUCCESS,
		payload: data
	};
};

var failedLoadedTP = function failedLoadedTP(data) {
	return {
		type: _actiontypes2.default.FETCH_TICKETPICKER_FAILED,
		payload: data
	};
};

var registerCourse = function registerCourse(param) {
	return {
		type: _actiontypes2.default.COURSE_REGISTER,
		param: param
	};
};

var registeredCourse = function registeredCourse(courseId) {
	return {
		type: _actiontypes2.default.COURSE_REGISTERED,
		courseId: courseId
	};
};

var cancelCourseByCoupon = function cancelCourseByCoupon(param) {
	return {
		type: _actiontypes2.default.COURSE_CANCEL_COUPON,
		param: param
	};
};

var canceledCourseByCoupon = function canceledCourseByCoupon(courseId) {
	return {
		type: _actiontypes2.default.COURSE_CANCELED_COUPON,
		courseId: courseId
	};
};

var registerCourseByCoupon = function registerCourseByCoupon(param) {
	return {
		type: _actiontypes2.default.COURSE_REGISTER_COUPON,
		param: param
	};
};

var registeredCourseByCoupon = function registeredCourseByCoupon(courseId) {
	return {
		type: _actiontypes2.default.COURSE_REGISTERED_COUPON,
		courseId: courseId
	};
};

exports.default = {
	loadTicketPicker: loadTicketPicker,
	successLoadedTP: successLoadedTP,
	failedLoadedTP: failedLoadedTP,
	registerCourse: registerCourse,
	registeredCourse: registeredCourse,
	registerCourseByCoupon: registerCourseByCoupon,
	registeredCourseByCoupon: registeredCourseByCoupon,
	cancelCourseByCoupon: cancelCourseByCoupon,
	canceledCourseByCoupon: canceledCourseByCoupon
};