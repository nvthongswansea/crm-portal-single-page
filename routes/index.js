const express = require('express');
const router = express.Router();
const request = require('request');
const bodyparser = require('body-parser');
const client = require('../config/connect');
var FormData = require('form-data');
var http = require('http');
const _helper = require('../Auth/_helper');
const config = require('../config/main');
const VT_URL = config.URL;

/* GET home page. */
router.get('/',  _helper.loginRedirect, function(req, res, next) {
	//getChallenge(res);

	res.render('index', {
		title: 'Trang đăng nhập CRM'
	});
	/*request({
		uri: 'http://localhost/crmv1/vtigercrm/webservice.php?operation=getchallenge&username=admin',
		headers: DEFAULT_HEADERS,
		method: "get",
		rejectUnauthorized: false
	}, (err, result, body) => {
		if(err) console.log(err);
		else {
			body = JSON.parse(body);
			console.log(body);
			if(!body.success ) {
                console.log(body.success);
            } else{
            	_servicetoken = body.result.token;
            	_servertime = body.result.serverTime;
            	_expiretime = body.result.expireTime;
            }
		}
	}).pipe(res);*/

});

router.post('/login', (req, res, next) => {

	let body = req.body;

	var formData = {
		// Pass a simple key-value pair
		username: body.email,
		password: body.pass
	}
	request.post({
		url: VT_URL+'/vtigerservice.php?service=restful&do=signin',
		formData: formData
	}, function optionalCallback(err, httpResponse, body) {
		if (err) {
			return console.error('upload failed:', err);
		}
		body = JSON.parse(body);
		if (body.success) {
			sess = req.session;
			//In this we are assigning email to sess.email variable.
			//email comes from HTML page.
			sess.userid = body.id;
			sess.sessid = body.sessionid;
			// res.status(201).json({
			// 	success: true,
			// 	message: 'Login successfully!'
			// });
			res.redirect('/portal');
		} else {
			res.status(404).json({
				success: false,
				message: 'Login failed!'
			});
		}
	});


});

router.get('/signout', _helper.loginRequired, (req, res, next) => {

	var formData = {
		id: req.session.userid,
		sessionid: req.session.sessid
	};
	request.post({
		url: VT_URL+'/vtigerservice.php?service=restful&do=signout',
		formData: formData
	}, function optionalCallback(err, httpResponse, body) {
		if (err) {
			return console.error('upload failed:', err);
		}
		req.session.destroy(function(err1) {
			res.redirect('/');
		});
	});
});

router.get('/listAllModules', (req, res, next) => {
	client.doListtypes(function(args, modules) {
		if (modules) res.status(201).json(modules);
		else res.status(400).json({
			success: false,
			message: "failed!"
		});
	});
});
module.exports = router;