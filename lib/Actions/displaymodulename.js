'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.refreshContent = refreshContent;
exports.getContentByParam = getContentByParam;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reduxAwait = require('redux-await');

var _reactRouter = require('react-router');

var _actiontypes = require('./actiontypes.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function refreshContent(menutitle) {
	switch (menutitle) {
		case 'HelpDesk':
			return {
				type: _actiontypes.REFRESH_TABLE,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedTable: _axios2.default.get('/portal/listtickets').then(function (response) {
						return response.data;
					}).catch(function (err) {
						return err;
					})

				}
			};
		case "Contacts":
			return {
				type: _actiontypes.REFRESH_TABLE,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedTable: _axios2.default.get('/portal/listcontacts').then(function (response) {
						return response.data;
					}).catch(function (err) {
						return err;
					})

				}
			};
		case "Products":
			return {
				type: _actiontypes.REFRESH_TABLE,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedTable: _axios2.default.get('/portal/listproducts').then(function (response) {
						return response.data;
					}).catch(function (err) {
						return err;
					})

				}
			};
		case "ATickets":
			return {
				type: _actiontypes.REFRESH_TABLE,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedTable: _axios2.default.get('/portal/listatickets').then(function (response) {
						return response.data;
					}).catch(function (err) {
						return err;
					})

				}
			};
		case "ATickConProd":
			return {
				type: _actiontypes.REFRESH_TABLE,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedTable: _axios2.default.get('/portal/listatickcontprod').then(function (response) {
						return response.data;
					}).catch(function (err) {
						return err;
					})

				}
			};
		case "Opportunities":
			return {
				type: _actiontypes.REFRESH_TABLE,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedTable: _axios2.default.get('/portal/listopportunities').then(function (response) {
						return response.data;
					}).catch(function (err) {
						return err;
					})

				}
			};
		case "AVouchers":
			return {
				type: _actiontypes.REFRESH_TABLE,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedTable: _axios2.default.get('/portal/listvouchers').then(function (response) {
						return response.data;
					}).catch(function (err) {
						return err;
					})

				}
			};
		case 'Faq':
			return {
				type: _actiontypes.REFRESH_FAQ,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedFAQ: _axios2.default.get("/portal/listfaq").then(function (response) {
						return response.data;
					}).catch(function (err) {
						return err;
					})

				}
			};
		case 'newticket':
			return {
				type: _actiontypes.REFRESH_ADDTICKET,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedAddTicketForm: _axios2.default.get("/portal/inforaddnewticket").then(function (response) {
						return response.data;
					}).catch(function (err) {
						return err;
					})

				}
			};

	}
}

function getContentByParam(module, param) {
	switch (module) {
		case 'ticketdetail':
			return {
				type: _actiontypes.GET_TICKET,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedTicketInfo: _axios2.default.get("/portal/ticket/" + param).then(function (response) {
						return response.data;
					}).catch(function (err) {
						return err;
					})

				}
			};
		case "closeticket":
			return {
				type: _actiontypes.GET_TICKET,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedTicketInfo: _axios2.default.get("/portal/closeticket/" + param).then(function (response) {
						return _axios2.default.get("/portal/ticket/" + response.data.ticketid).then(function (responset) {
							return responset.data;
						}).catch(function (err) {
							return errt;
						});
					}).catch(function (err) {
						conosle.log(err);
					})
				}
			};
		case "contactdetail":
			return {
				type: _actiontypes.GET_CONTACT,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedContactInfo: _axios2.default.get("/portal/contact/" + param).then(function (response) {
						return response.data;
					}).catch(function (err) {
						return err;
					})

				}
			};
		case 'ticketpicker':
			return {
				type: _actiontypes.REFRESH_TICKETPICKER,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedTicketPicker: _axios2.default.get("/portal/aticketsproduct/" + param).then(function (response) {
						return response.data;
					}).catch(function (err) {
						return err;
					})

				}
			};
		case "ATCPDetail":
			return {
				type: _actiontypes.REFRESH_ATICKCONTPRODEDITOR,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedATCPeditor: _axios2.default.get("/portal/ATickConProd/" + param).then(function (response) {
						return response.data;
					}).catch(function (err) {
						return err;
					})

				}
			};
		case "VoucherDetail":
			return {
				type: _actiontypes.REFRESH_ATICKCONTPRODEDITOR,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedATCPeditor: _axios2.default.get("/portal/AVouchers/" + param).then(function (response) {
						return response.data;
					}).catch(function (err) {
						return err;
					})

				}
			};
		case "addticket":
			_axios2.default.post("/portal/createnewticket", param).then(function (response) {
				_reactRouter.hashHistory.push({
					pathname: '/HelpDesk/main',
					query: {
						noti: 'Added new ticket successfully!'
					}
				});
			}).catch(function (error) {
				_reactRouter.hashHistory.push({
					pathname: '/HelpDesk/main',
					query: {
						noti: 'Failed!'
					}
				});
			});
		case "updateAtickContProd":
			return {
				type: _actiontypes.REFRESH_TICKETPICKER,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedTicketPicker: _axios2.default.post("/portal/aticketsproduct/update", {
						productid: param.productid,
						tickcontproductid: param.tickcontproductid,
						cancelrequest: param.cancelrequest
					}).then(function (response) {
						return _axios2.default.get("/portal/aticketsproduct/" + param.defaultprodid).then(function (responsed) {
							return responsed.data;
						}).catch(function (errd) {
							return errd;
						});
					}).catch(function (err) {
						return err;
					})
				}
			};
		case "updateCoupon":
			return {
				type: _actiontypes.REFRESH_TICKETPICKER,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedTicketPicker: _axios2.default.post("/portal/coupon/update", {
						atickcontprodid: param.atickcontprodid
					}).then(function (response) {
						return _axios2.default.get("/portal/aticketsproduct/" + param.defaultprodid).then(function (responsed) {
							return responsed.data;
						}).catch(function (errd) {
							return errd;
						});
					}).catch(function (err) {
						return err;
					})
				}
			};
		case "confirmTransferInfo":
			return {
				type: _actiontypes.REFRESH_MODAL,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedModal: _axios2.default.post("/portal/checkemailexistence", {
						email: param
					}).then(function (response) {
						if (!response.data) {
							return null;
						} else if (response.data.contactid) {
							return response.data;
						}
					}).catch(function (err) {
						return err;
					})
				}
			};
		case 'checkCoupon':
			return function (dispatch) {
				_axios2.default.post("/portal/checkcouponexistence", {
					coupon: param.coupon,
					productid: param.productid
				}).then(function (response) {
					console.log(response.data);
					if (!response.data) {
						dispatch({
							type: _actiontypes.NO_COUPON
						});
					} else if (response.data.acouponsid) {
						dispatch({
							type: _actiontypes.COUPON_EXIST
						});
					} else if (response.data == "used") {
						dispatch({
							type: _actiontypes.COUPON_USED
						});
					} else if (response.data == "invalid") {
						dispatch({
							type: _actiontypes.COUPON_INVALID
						});
					}
				}).catch(function (err) {
					return err;
				});
			};
		case "changeStudent":
			return {
				type: _actiontypes.POST_LOADER,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					postResult: _axios2.default.post("/portal/changeStudent", param).then(function (response) {
						if (response.data) {
							_reactRouter.hashHistory.push({
								pathname: '/ATickConProd/main',
								query: {
									noti: 'Changed student successfully!'
								}
							});
							return response.data;
						} else {
							dispatch({
								type: _actiontypes.NO_EMAIL
							});
						}
					}).catch(function (err) {
						return err;
					})
				}
			};

		case "changeVoucherOwner":
			return {
				type: _actiontypes.POST_LOADER,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					postResult: _axios2.default.post("/portal/changeVoucherOwner", param).then(function (response) {
						if (response.data) {
							_reactRouter.hashHistory.push({
								pathname: '/AVouchers/main',
								query: {
									noti: 'Changed student successfully!'
								}
							});
							return response.data;
						} else {
							dispatch({
								type: _actiontypes.NO_EMAIL
							});
						}
					}).catch(function (err) {
						return err;
					})
				}
			};

		case "PotentialATCP":
			return {
				type: _actiontypes.REFRESH_TABLE,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedTable: _axios2.default.get('/portal/listATCPbypotential/' + param).then(function (response) {
						return response.data;
					}).catch(function (err) {
						return err;
					})

				}
			};
		case "PotentialTrans":
			return {
				type: _actiontypes.REFRESH_TABLE,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedTable: _axios2.default.get('/portal/listTransbypotential/' + param).then(function (response) {
						return response.data;
					}).catch(function (err) {
						return err;
					})

				}
			};
		case "Sumtable":
			return {
				type: _actiontypes.REFRESH_SUMTABLE,
				AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
				payload: {
					loadedSumTable: _axios2.default.get('/portal/sum/' + param).then(function (response) {
						return response.data;
					}).catch(function (err) {
						return err;
					})

				}
			};
		case "registerCoupon":
			return function (dispatch) {
				_axios2.default.post("/portal/checkcouponexistence", {
					coupon: param.couponcode,
					productid: param.productid
				}).then(function (response) {
					if (!response.data) {
						dispatch({
							type: _actiontypes.NO_COUPON
						});
					} else if (response.data.acouponsid) {
						_axios2.default.post("/portal/addATCPCoupon", {
							"aticketid": response.data.acouponsid,
							"productid": param.productid
						}).then(function (responsenext) {
							if (responsenext.data.atcp_no) {
								dispatch({
									type: _actiontypes.REFRESH_TICKETPICKER,
									AWAIT_MARKER: _reduxAwait.AWAIT_MARKER,
									COUPON_EXIST: _actiontypes.COUPON_EXIST,
									payload: {
										loadedTicketPicker: _axios2.default.get("/portal/aticketsproduct/" + param.productid).then(function (response) {
											return response.data;
										}).catch(function (err) {
											return err;
										})

									}
								});
							}
						}).catch(function (err) {
							return err;
						});
					} else if (response.data == "used") {
						dispatch({
							type: _actiontypes.COUPON_USED
						});
					} else if (response.data == "invalid") {
						dispatch({
							type: _actiontypes.COUPON_INVALID
						});
					}
				}).catch(function (err) {
					return err;
				});
			};

	}
}