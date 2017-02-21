'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actiontypes = require('./actiontypes.js');

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var refreshFAQ = function refreshFAQ() {
    return {
        type: _actiontypes2.default.FETCH_FAQ
    };
};

var successRefreshedFAQ = function successRefreshedFAQ(data) {
    return {
        type: _actiontypes2.default.FETCH_FAQ_SUCCESS,
        payload: data
    };
};

var failedRefreshedFAQ = function failedRefreshedFAQ(data) {
    return {
        type: _actiontypes2.default.FETCH_FAQ_FAILED,
        payload: data
    };
};

exports.default = {
    refreshFAQ: refreshFAQ,
    successRefreshedFAQ: successRefreshedFAQ,
    failedRefreshedFAQ: failedRefreshedFAQ
};