import actiontype from './actiontypes.js';

const fetchATCPDetail = (param) => ({
	type: actiontype.FETCH_ATICKCONTPRODEDITOR,
	param: param
})

const successFetchedATCPDetail = (data) => ({
	type: actiontype.FETCH_ATICKCONTPRODEDITOR_SUCCESS,
	payload: data
})

const failedFetchedATCPDetail = (data) => ({
	type: actiontype.FETCH_ATICKCONTPRODEDITOR_FAILED,
	payload: data
})

const fetchVoucherDetail = (param) => ({
	type: actiontype.FETCH_VOUCHERDETAIL,
	param: param
})

const successFetchedVoucherDetail = (data) => ({
	type: actiontype.FETCH_VOUCHERDETAIL_SUCCESS,
	payload: data
})

const failedFetchedVoucherDetail = (data) => ({
	type: actiontype.FETCH_VOUCHERDETAIL_FAILED,
	payload: data
})

const changeStudent = (param) => ({
	type: actiontype.STUDENT_CHANGE,
	param: param
})

const changedStudent = () => ({
	type: actiontype.STUDENT_CHANGED
})

const changeVoucherOwner = (param) => ({
	type: actiontype.VOUCHER_OWNER_CHANGE,
	param: param
})

const changedVoucherOwner = () => ({
	type: actiontype.VOUCHER_OWNER_CHANGED
})

export default {
	fetchATCPDetail,
	successFetchedATCPDetail,
	failedFetchedATCPDetail,
	fetchVoucherDetail,
	successFetchedVoucherDetail,
	failedFetchedVoucherDetail,
	changeStudent,
	changedStudent,
	changeVoucherOwner,
	changedVoucherOwner
}