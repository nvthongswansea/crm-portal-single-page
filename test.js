var url = 'http://localhost/crmv1/vtigercrm';
var client = new Vtiger_WSClient(url);
client.doLogin('admin', 'eS3O3dua8POcwcd', postLogin);
// postLogin function gets a call once request is completed 
function postLogin(result, args) {
	if (result) getModuleDetails();
	else alert('Login failed');
}

function getModuleDetails() {
	var module = 'ATickets';
	var callback = {
		'function': processModuleDetails,
		'arguments': {
			'moduleName': 'ATickets'
		}
	};
	client.doDescribe(callback);
	// processModuleDetails gets a call once request is completed 
}

function processModuleDetails(result, args) {
	var module = args.moduleName;
	if (result)
		alert('Module = ' + module + ', Details = ' + client.toJSONString(result));
}

function getModules() {
	client.doListTypes(postGetModules);
}
// postGetModules gets a call once request is completed } 
function postGetModules(modules, args) {
	if (modules) alert(client.toJSONString(modules));
}