import actiontype from './actiontypes.js';

const refreshFAQ = () => ({
    type: actiontype.FETCH_FAQ
});

const successRefreshedFAQ = (data) => ({
    type: actiontype.FETCH_FAQ_SUCCESS,
    payload: data
});

const failedRefreshedFAQ = (data) => ({
    type: actiontype.FETCH_FAQ_FAILED,
    payload: data
});

export default {
    refreshFAQ,
    successRefreshedFAQ,
    failedRefreshedFAQ
};