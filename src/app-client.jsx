import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './Components/Formcontainer.jsx';
require('bootstrap/dist/css/bootstrap.css');
require('./sb-admin-2.css');

const App = () => {
	return (
		<div><FormContainer/></div>);
};

window.onload = () => {
  ReactDOM.render(<FormContainer/>, document.getElementById('wrapper'));
};