const express = require('express');
const router = express.Router();
const request = require('request');
const bodyparser = require('body-parser');
const client = require('../config/connect');
var FormData = require('form-data');
const objectValues = require('object-values');
var http = require('http');
const _helper = require('../Auth/_helper');
const redux = require('redux');
const config = require('../config/main');
const VT_URL = config.URL;

/* GET home page. */
router.get('/', _helper.loginRequired, function(req, res, next) {

	request(VT_URL + '/vtigerservice.php?service=restful&do=getmodules', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			body = {
				"2": "HelpDesk",
				"3": "Faq",
				"6": "Products",
				"9": "Contacts",
				"11": "ATickets",
				"12": "AVouchers",
				"14": "ATickConProd",
				"15": "Opportunities"
			};
			var modulelist = [];
			for (module in objectValues(body)) {
				modulelist.push({
					title: objectValues(body)[module],
					url: objectValues(body)[module]
				});
			}
			var SidemenuReducer = function() {
				return modulelist;
			};
			const rootReducer = redux.combineReducers({
				sidemenu: SidemenuReducer
			});
			const store = redux.createStore(rootReducer);
			const preloadedState = store.getState();
			res.render('portal', {
				title: 'Trang chủ CRM',
				preloadedState: preloadedState
			});
		}
	});


});

router.get('/listtickets', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid
	};
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=getticketlist',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send(JSON.parse(bodydata));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});
});

router.get('/listfaq', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid
	}
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=getfaq',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send(JSON.parse(bodydata));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});
});

router.get('/inforaddnewticket', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid
	}
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=getinfonewticket',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send(JSON.parse(bodydata));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});
});

router.post('/createnewticket', _helper.loginRequired, function(req, res, next) {
	var body = req.body;
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid,
		title: body.title,
		description: body.description,
		priority: body.priority,
		severity: body.severity,
		category: body.category,
		user_name: '',
		productidf: body.productidf,
		module: body.module,
		serviceid: body.serviceid,
		projectid: body.projectid
	}
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=createticket',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.status(201).json({
				success: true,
				message: 'Successful!'
			});
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});

});

router.get('/ticket/:ticketId', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid,
		module: 'HelpDesk'
	}
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=detail&entityid=' + req.params.ticketId,
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send((JSON.parse(bodydata)));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});

})
router.get('/closeticket/:ticketId', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid,
		ticketid: req.params.ticketId
	}
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=closeticket',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.status(201).json({
				success: true,
				ticketid: bodydata
			});
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});

})

router.get('/listcontacts', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid,
		module: "Contacts"
	};
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=getlist',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send(JSON.parse(bodydata));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});
});
router.get('/contact/:contactId', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid,
		module: 'Contacts'
	}
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=detail&entityid=' + req.params.contactId,
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send((JSON.parse(bodydata)));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});

});
router.get('/listproducts', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid
	};
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=getproducts',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send(JSON.parse(bodydata));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});
});
router.get('/listatickets', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid
	};
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=getAtickets',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send(JSON.parse(bodydata));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});
});
router.get('/listatickcontprod', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid
	};
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=getATickContProd',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send(JSON.parse(bodydata));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});
});

router.get('/aticketsproduct/:productid', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid,
		productid: req.params.productid
	};
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=getAticketsProd',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send(JSON.parse(bodydata));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});
});

router.post('/aticketsproduct/update', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid,
		productid: req.body.productid,
		tickcontproductid: req.body.tickcontproductid,
		cancelrequest: req.body.cancelrequest
	};
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=updatetickcontprod',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send(JSON.parse(bodydata));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});
});

router.post('/coupon/update', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid,
		atickcontprodid: req.body.atickcontprodid
	};
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=updateCoupon',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send(JSON.parse(bodydata));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});
});

router.get('/ATickConProd/:atickcontprodid', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid,
		atickcontprodid: req.params.atickcontprodid
	};
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=getATickContProdDetail',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send(JSON.parse(bodydata));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});
});

router.post('/checkemailexistence', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid,
		email: req.body.email
	};
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=checkEmail',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send(JSON.parse(bodydata));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});
});
router.post('/checkcouponexistence', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid,
		coupon: req.body.coupon,
		productid: req.body.productid
	};
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=checkCoupon',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send(JSON.parse(bodydata));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});
});

router.post('/changeStudent', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid,
		atickcontprodid: req.body.atickcontprodid,
		email: req.body.email
	};
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=updateStudentATickContProd',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send(JSON.parse(bodydata));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});
});

router.get('/listopportunities', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid
	};
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=getopportunities',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send(JSON.parse(bodydata));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});
});

router.get('/listATCPbypotential/:potentialid', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid,
		potentialid: req.params.potentialid
	};
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=getATCPbypotential',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send(JSON.parse(bodydata));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});
});
router.get('/listTransbypotential/:potentialid', _helper.loginRequired, function(req, res, next) {
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid,
		potentialid: req.params.potentialid
	};
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=getTransbypotential',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send(JSON.parse(bodydata));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});
});

router.get('/listvouchers', _helper.loginRequired, function(req, res, next) {
	console.log(ProductModuleId);
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid
	};
	request.post({
		url: VT_URL + '/vtigerservice.php?service=restful&do=getvouchers',
		formData: formData
	}, function(errordata, responsedata, bodydata) {
		if (!errordata && responsedata.statusCode == 200) {
			res.send(JSON.parse(bodydata));
		} else {
			res.status(400).json({
				success: false,
				message: 'Could not update.'
			});
		}
	});
});
//get modules ID for inserting.
var contactModuleId;
request.post({
	url: VT_URL + '/vtigerservice.php?service=restful&do=getContactTypeId'
}, function(errordata, responsedata, bodydata) {
	if (!errordata && responsedata.statusCode == 200) {
		contactModuleId = bodydata;
	} else {

	}
});
var AticketModuleId;
request.post({
	url: VT_URL + '/vtigerservice.php?service=restful&do=getATicketsTypeId'
}, function(errordata, responsedata, bodydata) {
	if (!errordata && responsedata.statusCode == 200) {
		AticketModuleId = bodydata;
	} else {

	}
});
var ProductModuleId;
request.post({
	url: VT_URL + '/vtigerservice.php?service=restful&do=getProductsTypeId'
}, function(errordata, responsedata, bodydata) {
	if (!errordata && responsedata.statusCode == 200) {
		ProductModuleId = bodydata;
		console.log(ProductModuleId);
	} else {

	}
});
router.post('/addATCPCoupon', _helper.loginRequired, function(req, res, next) {
	//res.send(JSON.parse(contactModuleId));
	var values = {
		'atcp_contact_id': parseInt(contactModuleId) + "x" + req.session.userid,
		'aticket_id': parseInt(AticketModuleId) + "x" + req.body.aticketid,
		'product_id': parseInt(ProductModuleId) + "x" + req.body.productid,
		'atcp_status': "Pending",
		'assigned_user_id': 1
	};
	client.doCreate('ATickContProd', values, function(args, modules) {
		if (modules) res.status(201).json(modules);
		else res.status(400).json({
			success: false,
			message: "failed!"
		});
	});
});

module.exports = router;