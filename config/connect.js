const vtws = require('../lib/nodevtiger');
const config = require('../config/main');

const VT_URL = config.URL;

const VT_USER = config.USER_ADMIN;

const VT_ACCESSKEY = config.ACCESSKEY;
const client = new vtws(VT_URL, VT_USER, VT_ACCESSKEY, 'info');
client.doLogin(function(args, result) {

		if (result) console.log({
			success: true,
			message: "login successfully!"
		})
			/*client.doDescribe('ATickets', function(args, modules) {
			if (modules) 
			res.status(201).json(modules);
		})*/; // client.doListtypes(function (args, modules) {    if(modules) console.log(modules); });
		else console.log({
			success: false,
			message: "login failed!"
		});
	});
module.exports = client;