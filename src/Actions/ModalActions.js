import actiontype from './actiontypes.js';
const loadModal = (param) => ({
	type: actiontype.FETCH_MODAL,
	param: param
})

const successLoadedModal = (data) => ({
	type: actiontype.FETCH_MODAL_SUCCESS,
	payload: data
})

const failedLoadedModal = (data) => ({
	type: actiontype.FETCH_MODAL_FAILED,
	payload: data
})

export default {
	loadModal,
	successLoadedModal,
	failedLoadedModal
}