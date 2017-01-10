import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class LostpassForm extends Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	onClick() {
		this.props.onChange(true);
	}
	render() {
		return (
			<div id="forgotpanel" className="login-panel panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Đổi mật khẩu</h3>
				</div>
				<div className="panel-body">
					<form role="form" method="post">
						<fieldset>
							<div className="form-group">
								<input className="form-control" placeholder="E-mail" name="email" autofocus="" required="" type="email"></input>
								<input name="forgot" value="1" type="hidden"></input>
							</div>
							<button className="btn btn-lg btn-success btn-block" type="submit">Gửi yêu cầu!</button>
							<a className="btn btn-lg btn-warning btn-block" onClick={this.onClick}>Quay lại đăng nhập</a>
						</fieldset>
					</form>
				</div>
			</div>
			);
	}
}