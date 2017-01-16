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
	//getChallenge(res);

	request(VT_URL + '/vtigerservice.php?service=restful&do=getmodules', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			body = {
				"2": "HelpDesk",
				"3": "Faq",
				"6": "Products",
				"9": "Contacts",
				"11": "ATickets",
				"12": "ATickConProd",
				"13": "Opportunities"
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

router.get('/aticketsproduct/update/:tickcontproductid/:productid', _helper.loginRequired, function(req, res, next) {
	console.log("check");
	var formData = {
		// Pass a simple key-value pair
		sessionid: req.session.sessid,
		id: req.session.userid,
		productid: req.params.productid,
		tickcontproductid: req.params.tickcontproductid
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

module.exports = router;