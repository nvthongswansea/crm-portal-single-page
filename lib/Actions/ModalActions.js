'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = require('./actiontypes.js');

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadModal = function loadModal(param) {
	return {
		type: _actiontypes2.default.FETCH_MODAL,
		param: param
	};
};

var successLoadedModal = function successLoadedModal(data) {
	return {
		type: _actiontypes2.default.FETCH_MODAL_SUCCESS,
		payload: data
	};
};

var failedLoadedModal = function failedLoadedModal(data) {
	return {
		type: _actiontypes2.default.FETCH_MODAL_FAILED,
		payload: data
	};
};

exports.default = {
	loadModal: loadModal,
	successLoadedModal: successLoadedModal,
	failedLoadedModal: failedLoadedModal
};