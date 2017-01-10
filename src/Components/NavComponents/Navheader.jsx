import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const divStyle = {
  padding: '5px 15px',
};
export default class NavHeader extends Component {
	render() {
		return(
			<div className="navbar-header">
				<button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<a className="navbar-brand" href="#" style={divStyle}>
					<h4>CRM portal</h4>
				</a>
			</div>
			);
	}
}
