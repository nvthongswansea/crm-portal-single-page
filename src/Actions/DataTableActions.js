import actiontype from './actiontypes.js';

const refreshTable = (tablename, potentialId=null) => ({
    type: actiontype.FETCH_TABLE,
    tablename: tablename,
    potentialId: potentialId
});

const successRefreshedTable = (data) => ({
    type: actiontype.FETCH_TABLE_SUCCESS,
    payload: data
});

const failedRefreshedTable = (data) => ({
    type: actiontype.FETCH_TABLE_FAILED,
    payload: data
});

export default {
    refreshTable,
    successRefreshedTable,
    failedRefreshedTable
};