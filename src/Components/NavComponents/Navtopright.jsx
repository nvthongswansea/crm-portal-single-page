import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class NavTopRight extends Component {
	render() {
		return (
			<ul className="nav navbar-top-links navbar-right">
				<li>
					<a href="/signout">
						<i className="fa fa-sign-out fa-fw"></i>
						Thoát
					</a>
				</li>
				<li>
					<a href="#" data-toggle="modal" data-target="#changePassModal">Đổi mật khẩu</a>
				</li>
				<li> </li>
			</ul>
			);
	}
}
