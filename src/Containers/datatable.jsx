import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {refreshContent} from '../Actions/displaymodulename.js';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import jQuery from 'jquery';
import DataTable from 'datatables.net';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'redux-await';
import Loader from 'halogen/PulseLoader';

class Datatable extends Component {
	constructor(props) {
		super(props);
		this.props.refreshContent(this.props.route.tablename);
		this.renderTable=this.renderTable.bind(this);
	}
	componentDidMount() {

	}
	renderTable() {
		jQuery(document).ready( function () {
			console.log("shit");
    		jQuery('#dataTables-example').DataTable();
		} );
		let data = this.props.data;
		let headers = [];
		data[0].head.map((header) => {
			headers.push(<th>{header.fielddata}</th>);
		});
		let rows = [];
		let columns = [];
		data[1].data.map((row) => {
			row.map((column) => {
				columns.push(<td>{ReactHtmlParser(column.fielddata)}</td>);
			});
			rows.push(<tr>{columns}</tr>);
			columns = [];
		});
		return (
			<table id="dataTables-example" className="table table-striped table-bordered table-hover dataTable no-footer">
				<thead>
					<tr> 
						{headers}
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
	render() {
		return (
			<div class="row">
			<div className="col-lg-12">
				<div className="panel panel-default"> 
					<div className="panel-heading">
						Tickets
						<div className="input-group pull-right">
							<Link className="btn btn-warning btn-sm pull-right" to='HelpDesk/add' >New Ticket</Link>
						</div>
					<div className="clearfix"></div>
					</div>
					<div className="panel-body">
						<div className="table-responsive">
							<div id="dataTables-example_wrapper" class="dataTables_wrapper form-inline" role="grid">
							{ this.props.statuses.loadedTable === 'pending' && <Loader color="#26A65B" size="16px" margin="4px"/>}
							{ this.props.statuses.loadedTable === 'success' && this.props.data ? this.renderTable(): "No data" }
							</div> 
						</div> 
					</div>
				</div>
			</div>
			</div>
			);
	}
}

function mapStateToProps(state) {
	return {
		data: state.datatable
	};
}
function mapDispatchToProps(dispatch) {
   return bindActionCreators({refreshContent: refreshContent}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Datatable);