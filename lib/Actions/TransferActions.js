'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = require('./actiontypes.js');

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchATCPDetail = function fetchATCPDetail(param) {
	return {
		type: _actiontypes2.default.FETCH_ATICKCONTPRODEDITOR,
		param: param
	};
};

var successFetchedATCPDetail = function successFetchedATCPDetail(data) {
	return {
		type: _actiontypes2.default.FETCH_ATICKCONTPRODEDITOR_SUCCESS,
		payload: data
	};
};

var failedFetchedATCPDetail = function failedFetchedATCPDetail(data) {
	return {
		type: _actiontypes2.default.FETCH_ATICKCONTPRODEDITOR_FAILED,
		payload: data
	};
};

var fetchVoucherDetail = function fetchVoucherDetail(param) {
	return {
		type: _actiontypes2.default.FETCH_VOUCHERDETAIL,
		param: param
	};
};

var successFetchedVoucherDetail = function successFetchedVoucherDetail(data) {
	return {
		type: _actiontypes2.default.FETCH_VOUCHERDETAIL_SUCCESS,
		payload: data
	};
};

var failedFetchedVoucherDetail = function failedFetchedVoucherDetail(data) {
	return {
		type: _actiontypes2.default.FETCH_VOUCHERDETAIL_FAILED,
		payload: data
	};
};

var changeStudent = function changeStudent(param) {
	return {
		type: _actiontypes2.default.STUDENT_CHANGE,
		param: param
	};
};

var changedStudent = function changedStudent() {
	return {
		type: _actiontypes2.default.STUDENT_CHANGED
	};
};

var changeVoucherOwner = function changeVoucherOwner(param) {
	return {
		type: _actiontypes2.default.VOUCHER_OWNER_CHANGE,
		param: param
	};
};

var changedVoucherOwner = function changedVoucherOwner() {
	return {
		type: _actiontypes2.default.VOUCHER_OWNER_CHANGED
	};
};

exports.default = {
	fetchATCPDetail: fetchATCPDetail,
	successFetchedATCPDetail: successFetchedATCPDetail,
	failedFetchedATCPDetail: failedFetchedATCPDetail,
	fetchVoucherDetail: fetchVoucherDetail,
	successFetchedVoucherDetail: successFetchedVoucherDetail,
	failedFetchedVoucherDetail: failedFetchedVoucherDetail,
	changeStudent: changeStudent,
	changedStudent: changedStudent,
	changeVoucherOwner: changeVoucherOwner,
	changedVoucherOwner: changedVoucherOwner
};