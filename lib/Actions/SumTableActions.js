'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actiontypes = require('./actiontypes.js');

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var refreshSumTable = function refreshSumTable(potentialId) {
    return {
        type: _actiontypes2.default.FETCH_SUMTABLE,
        potentialId: potentialId
    };
};

var successRefreshedSumTable = function successRefreshedSumTable(data) {
    return {
        type: _actiontypes2.default.FETCH_SUMTABLE_SUCCESS,
        payload: data
    };
};

var failedRefreshedSumTable = function failedRefreshedSumTable(data) {
    return {
        type: _actiontypes2.default.FETCH_SUMTABLE_FAILED,
        payload: data
    };
};

exports.default = {
    refreshSumTable: refreshSumTable,
    successRefreshedSumTable: successRefreshedSumTable,
    failedRefreshedSumTable: failedRefreshedSumTable
};