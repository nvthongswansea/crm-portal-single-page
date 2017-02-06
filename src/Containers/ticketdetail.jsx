import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../Actions/SupportTicketActions.js';
import {bindActionCreators} from 'redux';
import { hashHistory } from 'react-router';
import Loader from 'halogen/PulseLoader';
import ReactHtmlParser from 'react-html-parser';

class TicketDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {ticketId: this.props.params.ticketId};
		this.props.fetchData(this.state.ticketId);
		this.renderTicketInfo = this.renderTicketInfo.bind(this);
		this.renderDescription = this.renderDescription.bind(this);
		this.renderResolution = this.renderResolution.bind(this);
		this.renderStatus = this.renderStatus.bind(this);
		this.closeTicket = this.closeTicket.bind(this);
	} 
	componentWillReceiveProps(nextProps){
		if (this.state.ticketId != nextProps.params.ticketId)
			this.setState({
      			ticketId: nextProps.params.ticketId
    		}, () => {
    			nextProps.fetchData(this.state.ticketId);
    		});
		
	}

	renderTicketInfo() {
		let data = this.props.fetchedData.data;
		if (!data.HelpDesk) return "";
		let ticketinfo_arr = [];
		data.HelpDesk.map( (field, index) => {
			if (field.blockname == "Ticket Information"){
				ticketinfo_arr.push(<tr><td><b>{field.fieldlabel}: </b></td><td>{ReactHtmlParser(field.fieldvalue)}</td></tr>);
			}
		});
		return ticketinfo_arr;
	}
	renderDescription() {
		let data = this.props.fetchedData.data;
		if (!data.HelpDesk) return "";
		let ticketinfo_arr = [];
		data.HelpDesk.map( (field, index) => {
			if (field.blockname == "Description Details"){
				ticketinfo_arr.push(<tr><td><b>{field.fieldlabel}: </b></td><td>{field.fieldvalue}</td></tr>);
			}
		});
		return ticketinfo_arr;
	}
	renderResolution() {
		let data = this.props.fetchedData.data;
		if (!data.HelpDesk) return "";
		let ticketinfo_arr = [];
		data.HelpDesk.map( (field, index) => {
			if (field.blockname == "Ticket Resolution"){
				ticketinfo_arr.push(<tr><td><b>{field.fieldlabel}: </b></td><td>{field.fieldvalue}</td></tr>);
			}
		});
		return ticketinfo_arr;
	}
	renderStatus() {
		let data = this.props.fetchedData.data;
		if (!data.HelpDesk) return "";
		let ticketinfo = null;
		data.HelpDesk.map( (field, index) => {
			if (field.blockname == "Ticket Information" && field.fieldlabel == "Status"){
				if (field.fieldvalue == "Open") {
					ticketinfo = (
						<div className="panel panel-yellow">
					        <div className="panel-heading">
					          <div className="text-center">
					            Ticket Status
					            <div className="huge">Open</div>
					          </div>
					        </div>
					        <a onClick={() => this.closeTicket()} style={{cursor: "pointer"}}>
					          	<div className="panel-footer text-center">
						            <b>Đóng vé hỗ trợ</b>
						            <div className="clearfix" />
						        </div>
					        </a>
					    </div>);
				} else if (field.fieldvalue == "In Progress") {
					ticketinfo = (
						<div className="panel panel-primary">
					        <div className="panel-heading">
					          <div className="text-center">
					            Ticket Status
					            <div className="huge">In Progress</div>
					          </div>
					        </div>
					        <a onClick={() => this.closeTicket()} style={{cursor: "pointer"}}>
					          <div className="panel-footer text-center">
					            <b>Đóng vé hỗ trợ</b>
					            <div className="clearfix" />
					          </div>
					        </a>
					    </div>);

				} else if (field.fieldvalue == "Wait For Response") {
					ticketinfo = (
						<div className="panel panel-red">
					        <div className="panel-heading">
					          <div className="text-center">
					            Ticket Status
					            <div className="huge">Wait For Response</div>
					          </div>
					        </div>
					        <a onClick={() => this.closeTicket()} style={{cursor: "pointer"}}>
					          <div className="panel-footer text-center">
					            <b>Đóng vé hỗ trợ</b>
					            <div className="clearfix" />
					          </div>
					        </a>
					    </div>);
				} else if (field.fieldvalue == "Closed") {
					ticketinfo = (
						<div className="panel panel-green">
			              <div className="panel-heading">
			                <div className="text-center">
			                  Ticket Status
			                  <div className="huge">Closed</div>
			                </div>
			              </div>
			            </div>
					);
				}
			}
		});
		return ticketinfo;
	}
	closeTicket() {
		this.props.closeticket(this.state.ticketId);
	}
	render() {
		return (
	      <div>
	      {this.props.fetchedData.closeloading ? 
					        	<div className="panel-footer text-center">
					        		<i className="fa fa-spinner fa-spin"></i>
						            <b>Xin vui lòng chờ trong giây lát...</b>
						            <div className="clearfix" />
					          	</div> : 
					          	""}
	      { this.props.fetchedData.loading === true && <Loader color="#26A65B" size="16px" margin="4px"/> }
	      { !this.props.fetchedData.loading && !this.props.fetchedData.closeloading ?
	        <div className="row">	
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading">Ticket Information</div>
	              <table className="table">
	                <tbody>{this.props.fetchedData.data? this.renderTicketInfo() : ""}
	                </tbody></table>
	            </div>
	          </div>
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading"> Description Details </div>
	              <table className="table">
	                <tbody> {this.props.fetchedData.data? this.renderDescription() : ""}
	                </tbody></table>
	            </div>
	          </div>
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading"> Ticket Resolution </div>
	              <table className="table">
	                <tbody> {this.props.fetchedData.data? this.renderResolution() : ""}
	                </tbody></table>
	            </div>
	          </div>
	          <div className="col-lg-6">
	            	{this.props.fetchedData.data? this.renderStatus() : ""}
	            <div className="panel panel-default">
	              <div className="panel-heading"> Attachments </div>

	              <table className="table">
	                <tbody>
	                </tbody></table>
	            </div>
	          </div>
	        </div>: ""}
	        <div className="row">
	        </div>
	      </div>
    );
	}
}
function mapStateToProps(state) {
	return {
		fetchedData: state.ticketdata
	};
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({fetchData: actions.fetchSupportTicket, closeticket: actions.closeSupportTicket}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetail);