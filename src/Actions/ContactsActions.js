import actiontype from './actiontypes.js';

const refreshContact = (contactid) => ({
	type: actiontype.FETCH_CONTACT,
	contactid: contactid
})

const successRefreshedContact = (data) => ({
	type:actiontype.FETCH_CONTACT_SUCCESS,
	payload: data
})

const failedRefreshedContact = (data) => ({
	type:actiontype.FETCH_CONTACT_FAILED,
	payload: data
})

export default {
	refreshContact,
	successRefreshedContact,
	failedRefreshedContact
}