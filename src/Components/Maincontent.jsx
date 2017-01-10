import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Datatable from '../Containers/datatable.jsx';
const divStyle = {
  'min-height': '348px',
};
export default class MainContent extends Component {
	render() {
		return (
			<div id="page-wrapper" style={divStyle}> 
				<div className="row">
					<div className="col-lg-12">
						<h1 className="page-header">{this.props.route.title}</h1>
					</div>
				</div>
				{this.props.children}
			</div>
			);
	}
}