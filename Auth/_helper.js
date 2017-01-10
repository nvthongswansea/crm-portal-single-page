const request = require('request');
const config = require('../config/main');
const VT_URL = config.URL;
module.exports.loginRequired = (req, res, next) => {
	if (req.session.userid && req.session.sessid) {
		var formData = {
			id: req.session.userid,
			sessionid: req.session.sessid
		}

		request.post({
			url: VT_URL+'/vtigerservice.php?service=restful&do=validatesession',
			formData: formData
		}, function optionalCallback(err, httpResponse, body) {

			if (err) {
				return console.error('upload failed:', err);
			}
			body = JSON.parse(body);
			if (!body.permission) {
				res.redirect('/');
			} else {
				next();
			}

		});
	} else {
		res.redirect('/');
	}
}

module.exports.loginRedirect = (req, res, next) => {
	if (req.session.userid && req.session.sessid) {
		var formData = {
			id: req.session.userid,
			sessionid: req.session.sessid
		}

		request.post({
			url: VT_URL+'/vtigerservice.php?service=restful&do=validatesession',
			formData: formData
		}, function optionalCallback(err, httpResponse, body) {

			if (err) {
				return console.error('upload failed:', err);
			}
			body = JSON.parse(body);
			if (body.permission) {
				res.redirect('/portal');
			} else {
				next();
			}

		});
	} else {
		next();
	}
}