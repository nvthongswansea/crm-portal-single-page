'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actiontypes = require('./actiontypes.js');

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var refreshTable = function refreshTable(tablename) {
    var potentialId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return {
        type: _actiontypes2.default.FETCH_TABLE,
        tablename: tablename,
        potentialId: potentialId
    };
};

var successRefreshedTable = function successRefreshedTable(data) {
    return {
        type: _actiontypes2.default.FETCH_TABLE_SUCCESS,
        payload: data
    };
};

var failedRefreshedTable = function failedRefreshedTable(data) {
    return {
        type: _actiontypes2.default.FETCH_TABLE_FAILED,
        payload: data
    };
};

exports.default = {
    refreshTable: refreshTable,
    successRefreshedTable: successRefreshedTable,
    failedRefreshedTable: failedRefreshedTable
};