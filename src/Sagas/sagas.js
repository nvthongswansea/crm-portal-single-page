import {
	call,
	put,
	takeEvery,
	takeLatest
} from 'redux-saga/effects';
import axios from 'axios';
import actiontype from '../Actions/actiontypes.js';
import DataTableActions from '../Actions/DataTableActions.js';
import SumTableActions from '../Actions/SumTableActions.js';
import FAQActions from '../Actions/FAQActions.js';
import SupportTicketActions from '../Actions/SupportTicketActions.js';
import ContactsActions from '../Actions/ContactsActions.js';
import CourseRegisterActions from '../Actions/CourseRegisterActions.js';
import TransferActions from '../Actions/TransferActions.js';
import ModalActions from '../Actions/ModalActions.js';
import {
	fetchTable,
	fetchSumTable,
	fetchFAQ,
	fetchAddSupportTicketForm,
	addSupportTicketApi,
	fetchTicket,
	closeSupportTicket,
	fetchContact,
	loadTicketPickerApi,
	registerCourseApi,
	registerCourseByTicketApi,
	checkCouponApi,
	registerCourseByCouponApi,
	cancelTimetableByCouponApi,
	fetchATCPDetail,
	fetchVoucherDetail,
	confirmModal,
	changeStudentApi,
	changeVoucherOwnerApi
} from '../API/api.js';
import {
	hashHistory
} from 'react-router';

function* refreshTable(action) {
	try {

		const data = yield call(fetchTable, action.tablename, action.potentialId);
		yield put(DataTableActions.successRefreshedTable(data));
	} catch (e) {
		yield put(DataTableActions.failedRefreshedTable(e.message));
	}
}

function* refreshSumTable(action) {
	try {
		const data = yield call(fetchSumTable, action.potentialId);
		yield put(SumTableActions.successRefreshedSumTable(data));
	} catch (e) {
		yield put(SumTableActions.failedRefreshedSumTable(e.message));
	}
}

function* refreshFAQ(action) {
	try {
		const data = yield call(fetchFAQ);
		yield put(FAQActions.successRefreshedFAQ(data));
	} catch (e) {
		yield put(FAQActions.failedRefreshedFAQ(e.message));
	}
}

function* refreshSpTicketDetail(action) {
	try {
		const data = yield call(fetchTicket, action.ticketid);
		yield put(SupportTicketActions.successFetchedTicket(data));
	} catch (e) {
		yield put(SupportTicketActions.failedFetchedTicket(e.message));
	}
}

function* refreshAddTicketForm(action) {
	try {
		const data = yield call(fetchAddSupportTicketForm);
		yield put(SupportTicketActions.successRefreshedAddTicketForm(data));
	} catch (e) {
		yield put(SupportTicketActions.failedRefreshedAddTicketForm(e.message))
	}
}

function* addSupportTicket(action) {
	try {
		yield call(addSupportTicketApi, action.formdata);
		yield put(SupportTicketActions.addedSupportTicket())
	} catch (e) {

	}
}

function* redirectAddedSpTicket(action) {
	hashHistory.push({
		pathname: '/HelpDesk/main',
	});
}

function* closeSpTicket(action) {
	try {
		const data = yield call(closeSupportTicket, action.ticketid);
		yield put(SupportTicketActions.closedSupportTicket(data));
	} catch (e) {
		console.log(e.message);
	}
}

function* closedSpTicket(action) {
	try {
		yield put(SupportTicketActions.fetchSupportTicket(action.ticketid));
	} catch (e) {
		console.log(e.message);
	}
}

function* loadContactDetail(action) {
	try {
		const data = yield call(fetchContact, action.contactid);
		yield put(ContactsActions.successRefreshedContact(data));
	} catch (e) {
		yield put(ContactsActions.failedRefreshedContact(e.message));
	}
}

function* loadTicketPicker(action) {
	try {
		const data = yield call(loadTicketPickerApi, action.courseId);
		yield put(CourseRegisterActions.successLoadedTP(data));
	} catch (e) {
		yield put(CourseRegisterActions.failedLoadedTP(e.message));
	}
}

function* registerCourse(action) {
	try {
		const data = yield call(registerCourseByTicketApi, action.param);
		yield put(CourseRegisterActions.registeredCourse(data));
	} catch (e) {
		console.log(e.message);
	}
}

function* registeredCourse(action) {
	try {
		yield put(CourseRegisterActions.loadTicketPicker(action.courseId));
	} catch (e) {
		console.log(e.message);
	}
}

function* registerCourseCoupon(action) {
	try {
		const data = yield call(checkCouponApi, action.param);
		if (!data) {
			yield put({
				type: actiontype.NO_COUPON
			});
		} else if (data == "used") {
			yield put({
				type: actiontype.COUPON_USED
			});
		} else if (data == "invalid") {
			yield put({
				type: actiontype.COUPON_INVALID
			});
		} else if (data.acouponsid) {
			const newparam = {acouponsid: data.acouponsid, productid: action.param.productid}
			const courseId = yield call(registerCourseByCouponApi, newparam);
			yield put(CourseRegisterActions.registeredCourseByCoupon(courseId));
		}

	} catch (e) {
		console.log(e.message);
	}
}

function* registeredCourseCoupon(action) {
	try {
		yield put(CourseRegisterActions.loadTicketPicker(action.courseId));
	} catch (e) {
		console.log(e.message);
	}
}

function* cancelCourseByCoupon(action) {
	try {
		const data = yield call(cancelTimetableByCouponApi, action.param);
		yield put(CourseRegisterActions.canceledCourseByCoupon(data));
	} catch (e) {
		console.log(e.message);
	}
}
function* canceledCourseByCoupon(action) {
	try {
		yield put(CourseRegisterActions.loadTicketPicker(action.courseId));
	} catch (e) {
		console.log(e.message);
	}
}

function* loadATCPEditor (action) {
	try {
		const data = yield call(fetchATCPDetail,action.param);
		yield put(TransferActions.successFetchedATCPDetail(data));
	} catch (e) {
		yield put(TransferActions.failedFetchedATCPDetail(e.message));
	}
}

function* loadVoucherDetail (action) {
	try {
		const data = yield call(fetchVoucherDetail,action.param);
		yield put(TransferActions.successFetchedVoucherDetail(data));
	} catch (e) {
		yield put(TransferActions.failedFetchedVoucherDetail(e.message));
	}
}

function* loadModal (action) {
	try {
		const data = yield call(confirmModal,action.param);
		yield put(ModalActions.successLoadedModal(data));
	} catch (e) {
		yield put(ModalActions.failedLoadedModal(e.message));
	}
}

function* changeStudent (action) {
	try {
		const data = yield call(changeStudentApi,action.param);
		yield put(TransferActions.changedStudent(data));
	} catch (e) {
		console.log(e.message);
	}
}

function* changedStudent (action) {
	hashHistory.push({
		pathname: '/ATickConProd/main',
		query: {
			noti: 'Changed student successfully!'
		}
	});
}

function* changeVoucherOwner (action) {
	try {
		const data = yield call(changeVoucherOwnerApi,action.param);
		yield put(TransferActions.changedVoucherOwner(data));
	} catch (e) {
		console.log(e.message);
	}
}

function* changedVoucherOwner (action) {
	hashHistory.push({
		pathname: '/AVouchers/main',
		query: {
			noti: 'Changed student successfully!'
		}
	});
}

export default function*() {
	yield [
		takeLatest(actiontype.FETCH_TABLE, refreshTable),
		takeLatest(actiontype.FETCH_SUMTABLE, refreshSumTable),
		takeLatest(actiontype.FETCH_FAQ, refreshFAQ),
		takeLatest(actiontype.FETCH_TICKET, refreshSpTicketDetail),
		takeLatest(actiontype.FETCH_ADDTICKET, refreshAddTicketForm),
		takeLatest(actiontype.ADD_SUPPORT_TICKET, addSupportTicket),
		takeLatest(actiontype.ADDED_SUPPORT_TICKET, redirectAddedSpTicket),
		takeLatest(actiontype.CLOSE_SUPPORT_TICKET, closeSpTicket),
		takeLatest(actiontype.CLOSED_SUPPORT_TICKET, closedSpTicket),
		takeLatest(actiontype.FETCH_CONTACT, loadContactDetail),
		takeLatest(actiontype.FETCH_TICKETPICKER, loadTicketPicker),
		takeLatest(actiontype.COURSE_REGISTER, registerCourse),
		takeLatest(actiontype.COURSE_REGISTERED, registeredCourse),
		takeLatest(actiontype.COURSE_REGISTER_COUPON, registerCourseCoupon),
		takeLatest(actiontype.COURSE_REGISTERED_COUPON, registeredCourseCoupon),
		takeLatest(actiontype.COURSE_CANCEL_COUPON, cancelCourseByCoupon),
		takeLatest(actiontype.COURSE_CANCELED_COUPON, canceledCourseByCoupon),
		takeLatest(actiontype.FETCH_ATICKCONTPRODEDITOR, loadATCPEditor),
		takeLatest(actiontype.FETCH_VOUCHERDETAIL, loadVoucherDetail),
		takeLatest(actiontype.FETCH_MODAL, loadModal),
		takeLatest(actiontype.STUDENT_CHANGE, changeStudent),
		takeLatest(actiontype.STUDENT_CHANGED, changedStudent),
		takeLatest(actiontype.VOUCHER_OWNER_CHANGE, changeVoucherOwner),
		takeLatest(actiontype.VOUCHER_OWNER_CHANGED, changedVoucherOwner) 
	];
}