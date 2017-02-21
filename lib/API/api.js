'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.confirmModal = exports.changeVoucherOwnerApi = exports.changeStudentApi = exports.fetchVoucherDetail = exports.fetchATCPDetail = exports.cancelTimetableByCouponApi = exports.registerCourseByCouponApi = exports.checkCouponApi = exports.registerCourseByTicketApi = exports.loadTicketPickerApi = exports.fetchContact = exports.closeSupportTicket = exports.addSupportTicketApi = exports.fetchAddSupportTicketForm = exports.fetchTicket = exports.fetchFAQ = exports.fetchSumTable = exports.fetchTable = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchTable = exports.fetchTable = function fetchTable(tablename, potentialId) {
	switch (tablename) {
		case 'HelpDesk':
			return _axios2.default.get('/portal/listtickets').then(function (response) {
				return response.data;
			}).catch(function (err) {
				return err;
			});

		case "Contacts":
			return _axios2.default.get('/portal/listcontacts').then(function (response) {
				return response.data;
			}).catch(function (err) {
				return err;
			});
		case "Products":
			return _axios2.default.get('/portal/listproducts').then(function (response) {
				return response.data;
			}).catch(function (err) {
				return err;
			});
		case "ATickets":
			return _axios2.default.get('/portal/listatickets').then(function (response) {
				return response.data;
			}).catch(function (err) {
				return err;
			});
		case "ATickConProd":
			return _axios2.default.get('/portal/listatickcontprod').then(function (response) {
				return response.data;
			}).catch(function (err) {
				return err;
			});
		case "Opportunities":
			return _axios2.default.get('/portal/listopportunities').then(function (response) {
				return response.data;
			}).catch(function (err) {
				return err;
			});
		case "AVouchers":
			return _axios2.default.get('/portal/listvouchers').then(function (response) {
				return response.data;
			}).catch(function (err) {
				return err;
			});
		case "PotentialATCP":
			return _axios2.default.get('/portal/listATCPbypotential/' + potentialId).then(function (response) {
				return response.data;
			}).catch(function (err) {
				return err;
			});
		case "PotentialTrans":
			return _axios2.default.get('/portal/listTransbypotential/' + potentialId).then(function (response) {
				return response.data;
			}).catch(function (err) {
				return err;
			});
	}
};

var fetchSumTable = exports.fetchSumTable = function fetchSumTable(potentialId) {
	return _axios2.default.get('/portal/sum/' + potentialId).then(function (response) {
		return response.data;
	}).catch(function (err) {
		return err;
	});
};

var fetchFAQ = exports.fetchFAQ = function fetchFAQ() {
	return _axios2.default.get("/portal/listfaq").then(function (response) {
		return response.data;
	}).catch(function (err) {
		return err;
	});
};

var fetchTicket = exports.fetchTicket = function fetchTicket(ticketid) {
	return _axios2.default.get("/portal/ticket/" + ticketid).then(function (response) {
		return response.data;
	}).catch(function (err) {
		return err;
	});
};

var fetchAddSupportTicketForm = exports.fetchAddSupportTicketForm = function fetchAddSupportTicketForm() {
	return _axios2.default.get("/portal/inforaddnewticket").then(function (response) {
		return response.data;
	}).catch(function (err) {
		return err;
	});
};

var addSupportTicketApi = exports.addSupportTicketApi = function addSupportTicketApi(formdata) {
	return _axios2.default.post("/portal/createnewticket", formdata).then(function (response) {
		return true;
	}).catch(function (error) {
		return false;
	});
};

var closeSupportTicket = exports.closeSupportTicket = function closeSupportTicket(ticketid) {
	return _axios2.default.get("/portal/closeticket/" + ticketid).then(function (response) {
		return response.data.ticketid;
	}).catch(function (err) {
		conosle.log(err);
	});
};

var fetchContact = exports.fetchContact = function fetchContact(contactid) {
	return _axios2.default.get("/portal/contact/" + contactid).then(function (response) {
		return response.data;
	}).catch(function (err) {
		return err;
	});
};

var loadTicketPickerApi = exports.loadTicketPickerApi = function loadTicketPickerApi(courseId) {
	return _axios2.default.get("/portal/aticketsproduct/" + courseId).then(function (response) {
		return response.data;
	}).catch(function (err) {
		return err;
	});
};

var registerCourseByTicketApi = exports.registerCourseByTicketApi = function registerCourseByTicketApi(param) {
	return _axios2.default.post("/portal/aticketsproduct/update", {
		productid: param.productid,
		tickcontproductid: param.tickcontproductid,
		cancelrequest: param.cancelrequest
	}).then(function (response) {
		return param.defaultprodid;
	}).catch(function (err) {
		return err;
	});
};

var checkCouponApi = exports.checkCouponApi = function checkCouponApi(param) {
	return _axios2.default.post("/portal/checkcouponexistence", {
		coupon: param.couponcode,
		productid: param.productid
	}).then(function (response) {
		console.log(response.data);
		return response.data;
	}).catch(function (err) {
		return err;
	});
};

var registerCourseByCouponApi = exports.registerCourseByCouponApi = function registerCourseByCouponApi(param) {
	return _axios2.default.post("/portal/addATCPCoupon", {
		"aticketid": param.acouponsid,
		"productid": param.productid
	}).then(function (responsenext) {
		if (responsenext.data.atcp_no) {
			return param.productid;
		}
	}).catch(function (err) {
		return err;
	});
};

var cancelTimetableByCouponApi = exports.cancelTimetableByCouponApi = function cancelTimetableByCouponApi(param) {
	return _axios2.default.post("/portal/coupon/update", {
		atickcontprodid: param.atickcontprodid
	}).then(function (response) {
		return param.defaultprodid;
	}).catch(function (err) {
		return err;
	});
};

var fetchATCPDetail = exports.fetchATCPDetail = function fetchATCPDetail(param) {
	return _axios2.default.get("/portal/ATickConProd/" + param).then(function (response) {
		return response.data;
	}).catch(function (err) {
		return err;
	});
};

var fetchVoucherDetail = exports.fetchVoucherDetail = function fetchVoucherDetail(param) {
	return _axios2.default.get("/portal/AVouchers/" + param).then(function (response) {
		return response.data;
	}).catch(function (err) {
		return err;
	});
};

var changeStudentApi = exports.changeStudentApi = function changeStudentApi(param) {
	return _axios2.default.post("/portal/changeStudent", param).then(function (response) {
		return response.data;
	}).catch(function (err) {
		return err;
	});
};

var changeVoucherOwnerApi = exports.changeVoucherOwnerApi = function changeVoucherOwnerApi(param) {
	return _axios2.default.post("/portal/changeVoucherOwner", param).then(function (response) {
		return response.data;
	}).catch(function (err) {
		return err;
	});
};

var confirmModal = exports.confirmModal = function confirmModal(param) {

	return _axios2.default.post("/portal/checkemailexistence", {
		email: param
	}).then(function (response) {
		if (!response.data) {
			return null;
		} else if (response.data.contactid) {
			return response.data;
		}
	}).catch(function (err) {
		return err;
	});
};