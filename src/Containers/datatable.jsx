import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {refreshContent,getContentByParam} from '../Actions/displaymodulename.js';
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
		this.state = {tablename: this.props.route.tablename, selectedProd: null};
		if (this.state.tablename == "PotentialATCP") {
			this.props.getContentByParam("PotentialATCP",this.props.params.potentialid);
		} else if (this.state.tablename == "PotentialTrans") {
			this.props.getContentByParam("PotentialTrans",this.props.params.potentialid);
		} else {
			this.props.refreshContent(this.state.tablename);
		}
		this.renderTable=this.renderTable.bind(this);
		this.rerenderTable=this.rerenderTable.bind(this);
		this.displayNodata=this.displayNodata.bind(this);
		this.displayLoader=this.displayLoader.bind(this);
	}
	componentWillReceiveProps(nextProps){
		if (this.state.tablename != nextProps.route.tablename)
			this.setState({
      			tablename: nextProps.route.tablename
    		}, () => {
    			if (this.state.tablename == "PotentialATCP") {
					nextProps.getContentByParam("PotentialATCP",nextProps.params.potentialid);
				} else if (this.state.tablename == "PotentialTrans") {
					nextProps.getContentByParam("PotentialTrans",nextProps.params.potentialid);
				}else {
					nextProps.refreshContent(this.state.tablename);
				}
    		});
		
	}
	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}
	rerenderTable(data, columns) {
		var that = this;
		jQuery(document).ready( function () {
			jQuery('#dataTables-example_wrapper').remove();
			jQuery("#toremove").append('<div id="dataTables-example_wrapper" class="dataTables_wrapper form-inline" role="grid"><table id="dataTables-example" class="table table-striped table-bordered table-hover dataTable no-footer"></table></div> '); 
    		jQuery('#dataTables-example').DataTable({
        		data: data,
        		columns: columns
    		} );
		} );
	}
	renderTable() {
		
		let data = this.props.data;
		if (!data[0] || !data[1]) 
			return "No data";
		let headers = [];
		data[0].head.map((header) => {
			headers.push({title: header.fielddata});
		});
		let rows = [];
		let cells = [];
		data[1].data.map((row) => {
			row.map((column) => {		
				if (column.fielddata==null) {
					cells.push("");
				} else {
					cells.push(column.fielddata);
				}
			});
			rows.push(cells);
			cells = [];
		});
		this.rerenderTable(rows, headers);
		
	}
	displayNodata() {
		jQuery(document).ready( function () {
			jQuery('#dataTables-example_wrapper').remove();
		} );
		return (<p>No data</p>);
	}
	displayLoader() {
		jQuery(document).ready( function () {
			jQuery('#dataTables-example_wrapper').remove();
		} );
		return (<Loader color="#26A65B" size="16px" margin="4px"/>);
	}
	render() {
		var data=null;
		var that = this;
		jQuery(document).ready( function () {
    		jQuery(document).on("click", ".openticketpicker", function () {
			    var dataid = jQuery(this).data('id');
			    that.setState({selectedProd: dataid});
			});
		} );
	
		return (
			<div className="row">
			<div className="col-lg-12">
				<div className="panel panel-default"> 
					<div className="panel-heading">
						{this.props.route.tablename == "HelpDesk" ? "Tickets" : ""}
						{this.props.route.tablename == "Contacts" ? "Contacts" : ""}
						{this.props.route.tablename == "Products" ? "Products" : ""}
						<div className="input-group pull-right">
							{this.props.route.tablename == "HelpDesk" ? <Link className="btn btn-warning btn-sm pull-right" to='HelpDesk/add' >New Ticket</Link> : ""}
						</div>
					<div className="clearfix"></div>
					</div>
					<div className="panel-body">
						<div id="toremove" className="table-responsive">						
							{ this.props.statuses.loadedTable === 'success' && (this.props.data ? this.renderTable(): this.displayNodata())}
							{ this.props.statuses.loadedTable === 'pending' &&  this.displayLoader() }
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
   return bindActionCreators({refreshContent: refreshContent, getContentByParam: getContentByParam}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Datatable);