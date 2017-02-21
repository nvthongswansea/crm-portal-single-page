'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = require('./actiontypes.js');

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var refreshContact = function refreshContact(contactid) {
	return {
		type: _actiontypes2.default.FETCH_CONTACT,
		contactid: contactid
	};
};

var successRefreshedContact = function successRefreshedContact(data) {
	return {
		type: _actiontypes2.default.FETCH_CONTACT_SUCCESS,
		payload: data
	};
};

var failedRefreshedContact = function failedRefreshedContact(data) {
	return {
		type: _actiontypes2.default.FETCH_CONTACT_FAILED,
		payload: data
	};
};

exports.default = {
	refreshContact: refreshContact,
	successRefreshedContact: successRefreshedContact,
	failedRefreshedContact: failedRefreshedContact
};