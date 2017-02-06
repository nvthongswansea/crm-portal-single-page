import actiontype from './actiontypes.js';

const refreshSumTable = (potentialId) => ({
    type: actiontype.FETCH_SUMTABLE,
    potentialId: potentialId
});

const successRefreshedSumTable = (data) => ({
    type: actiontype.FETCH_SUMTABLE_SUCCESS,
    payload: data
});

const failedRefreshedSumTable = (data) => ({
    type: actiontype.FETCH_SUMTABLE_FAILED,
    payload: data
});

export default {
    refreshSumTable,
    successRefreshedSumTable,
    failedRefreshedSumTable
};