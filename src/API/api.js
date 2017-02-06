import axios from 'axios';

export const fetchTable = (tablename, potentialId) => {
	switch (tablename) {
		case 'HelpDesk':
			return axios.get('/portal/listtickets')
				.then((response) => {
					return response.data;
				})
				.catch((err) => {
					return err;
				})

		case "Contacts":
			return axios.get('/portal/listcontacts')
				.then((response) => {
					return response.data;
				})
				.catch((err) => {
					return err;
				})
		case "Products":
			return axios.get('/portal/listproducts')
				.then((response) => {
					return response.data;
				})
				.catch((err) => {
					return err;
				})
		case "ATickets":
			return axios.get('/portal/listatickets')
				.then((response) => {
					return response.data;
				})
				.catch((err) => {
					return err;
				})
		case "ATickConProd":
			return axios.get('/portal/listatickcontprod')
				.then((response) => {
					return response.data;
				})
				.catch((err) => {
					return err;
				})
		case "Opportunities":
			return axios.get('/portal/listopportunities')
				.then((response) => {
					return response.data;
				})
				.catch((err) => {
					return err;
				})
		case "AVouchers":
			return axios.get('/portal/listvouchers')
				.then((response) => {
					return response.data;
				})
				.catch((err) => {
					return err;
				})
		case "PotentialATCP":
			return axios.get('/portal/listATCPbypotential/' + potentialId)
				.then((response) => {
					return response.data;
				})
				.catch((err) => {
					return err;
				})
		case "PotentialTrans":
			return axios.get('/portal/listTransbypotential/' + potentialId)
				.then((response) => {
					return response.data;
				})
				.catch((err) => {
					return err;
				})
	}
}

export const fetchSumTable = (potentialId) => {
	return axios.get('/portal/sum/' + potentialId)
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			return err;
		})
}

export const fetchFAQ = () => {
	return axios.get("/portal/listfaq")
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			return err;
		})
}

export const fetchTicket = (ticketid) => {
	return axios.get("/portal/ticket/" + ticketid)
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			return err;
		})
}


export const fetchAddSupportTicketForm = () => {
	return axios.get("/portal/inforaddnewticket")
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			return err;
		})
}

export const addSupportTicketApi = (formdata) => {
	return axios.post("/portal/createnewticket", formdata)
		.then(function(response) {
			return true;

		})
		.catch(function(error) {
			return false;
		});
}

export const closeSupportTicket = (ticketid) => {
	return axios.get("/portal/closeticket/" + ticketid)
		.then((response) => {
			return response.data.ticketid
		})
		.catch((err) => {
			conosle.log(err);
		})
}

export const fetchContact = (contactid) => {
	return axios.get("/portal/contact/" + contactid)
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			return err;
		})
}

export const loadTicketPickerApi = (courseId) => {
	return axios.get("/portal/aticketsproduct/" + courseId)
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			return err;
		})
}

export const registerCourseByTicketApi = (param) => {
	return axios.post("/portal/aticketsproduct/update", {
			productid: param.productid,
			tickcontproductid: param.tickcontproductid,
			cancelrequest: param.cancelrequest
		})
		.then((response) => {
			return param.defaultprodid
		})
		.catch((err) => {
			return err;
		})
}

export const checkCouponApi = (param) => {
	return axios.post("/portal/checkcouponexistence", {
			coupon: param.couponcode,
			productid: param.productid
		})
		.then((response) => {
			console.log(response.data);
			return response.data;
		})
		.catch((err) => {
			return err;
		})
}

export const registerCourseByCouponApi = (param) => {
	return axios.post("/portal/addATCPCoupon", {
			"aticketid": param.acouponsid,
			"productid": param.productid
		})
		.then((responsenext) => {
			if (responsenext.data.atcp_no) {
				return param.productid;
			}
		})
		.catch((err) => {
			return err;
		})
}

export const cancelTimetableByCouponApi = (param) => {
	return axios.post("/portal/coupon/update", {
			atickcontprodid: param.atickcontprodid
		})
		.then((response) => {
			return param.defaultprodid;
		})
		.catch((err) => {
			return err;
		})
}

export const fetchATCPDetail = (param) => {
	return axios.get("/portal/ATickConProd/" + param)
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			return err;
		})
}

export const fetchVoucherDetail = (param) => {
	return axios.get("/portal/AVouchers/" + param)
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			return err;
		})
}

export const changeStudentApi = (param) => {
	return axios.post("/portal/changeStudent", param)
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			return err;
		});
}


export const changeVoucherOwnerApi = (param) => {
	return axios.post("/portal/changeVoucherOwner", param)
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			return err;
		})
}

export const confirmModal = (param) => {

	return axios.post("/portal/checkemailexistence", {
			email: param
		})
		.then((response) => {
			if (!response.data) {
				return null;
			} else if (response.data.contactid) {
				return response.data;
			}
		})
		.catch((err) => {
			return err;
		})
}