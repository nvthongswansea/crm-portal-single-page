const express = require('express');
const router = express.Router();
const request = require('request');
const bodyparser = require('body-parser');
const client = require('../config/connect');

router.post('/login', (req, res, next) => {

	let body = req.body;
	console.log(body);
	
	
	
});

router.get('/listAllModules', (req, res, next) => {
	client.doListtypes(function (args, modules) {
	    if(modules) res.status(201).json(modules);
	    else res.status(400).json({
			success: false,
			message: "failed!"
		});
	});
});

router.post('/describeAModule', (req, res, next) => {
	let body = req.body;
	let module = body.module;
	client.doDescribe(module, function (args, module) {
	    if(module) res.status(201).json(module);
	    else res.status(400).json({
			success: false,
			message: "failed!"
		});
	});
});

router.post('/createRecord', (req, res, next) => {
	let body = req.body;
	let module = body.module;
	let values = body.values;
	client.doCreate(module, values, function (args, record) {
	    if(record) res.status(201).json(record);
	    else res.status(400).json({
			success: false,
			message: "failed!"
		});
	});
});

router.post('/retrieve', (req, res, next) => {
	let body = req.body;
	let moduleid = body.moduleid;
	let recordid = body.recordid;
	let record = moduleid+'x'+recordid;
	client.doRetrieve(record, function (args, record) {
	    if(record) res.status(201).json(record);
	    else res.status(400).json({
			success: false,
			message: "failed!"
		});
	});
});

router.post('/query', (req, res, next) => {
	let body = req.body;
	let query = body.query;
	client.doQuery(query, function (args, result) {
	    if(result) res.status(201).json(result);
	    else res.status(400).json({
			success: false,
			message: "failed!"
		});
	});
});

router.get('/sync', (req, res, next) => {
	let time = req.query.time;
	let module = req.query.module;
	client.doSync(time, module, function (args, result) {
	    if(result) res.status(201).json(result);
	    else res.status(400).json({
			success: false,
			message: "failed!"
		});
	});
});



module.exports = router;