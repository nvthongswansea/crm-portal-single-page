import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	onClick() {
		this.props.onChange(false);
	}
	render() {
		return (
			<div id="loginpanel" className="login-panel panel panel-default">
			<div className="panel-heading">
				<h3 className="panel-title">Hãy đăng nhập!</h3>
			</div>
			<div className="panel-body">
				<div className="text-center">
					VTIGER CRM
				</div>
			<form role="form" method="post" action="/login">
			<fieldset>
				<div className="form-group">
					<input className="form-control" placeholder="E-mail" name="email" autofocus="" required="" type="email"></input>
				</div>
				<div className="form-group">
					<input className="form-control" placeholder="Mật khẩu" name="pass" required="" type="password"></input>
				</div>
				<button className="btn btn-lg btn-success btn-block" type="submit"> Đăng nhập </button>
				<a className="btn btn-lg btn-warning btn-block" onClick={this.onClick}> Quên mật khẩu? </a>
			</fieldset>
			</form>
			</div>
			</div>
		);
	}
}