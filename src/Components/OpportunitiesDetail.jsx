import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Datatable from '../Containers/datatable.jsx';
import { Link } from 'react-router';

export default class PotentialDetail extends Component {4
	render() {
		return (
			<div className="container">
			  <ul className="nav nav-tabs">
			    <li> <Link activeClassName="active" to={"/Opportunities/potential/"+this.props.params.potentialid + "/PotentialATCP"} >Chi tiết các khóa học trong hóa đơn</Link></li>
			    <li><Link activeClassName="active" to={"/Opportunities/potential/"+this.props.params.potentialid + "/PotentialTrans"} >Chi tiết tiến trình thanh toán</Link></li>
			  </ul>
			  {this.props.children}
			</div>
			);
	}
}