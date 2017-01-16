import React, { Component } from 'react';
import { connect } from 'redux-await';
import {getContentByParam} from '../Actions/displaymodulename.js';
import {bindActionCreators} from 'redux';
import { hashHistory } from 'react-router';
import axios from 'axios';
import Loader from 'halogen/PulseLoader';
import ReactHtmlParser from 'react-html-parser';

class ContactDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {contactId: this.props.params.contactId};
		this.props.getContentByParam("contactdetail", this.state.contactId);
		this.renderBasicInfo = this.renderBasicInfo.bind(this);
		this.renderPortalDetail = this.renderPortalDetail.bind(this);
		this.renderAddress = this.renderAddress.bind(this);
		this.renderDescription = this.renderDescription.bind(this);
		this.renderParentContact = this.renderParentContact.bind(this);
	} 
	componentWillReceiveProps(nextProps){
		if (this.state.contactId != nextProps.params.contactId)
			this.setState({
      			contactId: nextProps.params.contactId
    		}, () => {
    			nextProps.getContentByParam("ticketdetail", this.state.contactId);
    		});
		
	}

	renderBasicInfo() {
		let data = this.props.data;
		if (!data.Contacts) return "";
		let ticketinfo_arr = [];
		data.Contacts.map( (field, index) => {
			if (field.blockname == "Basic Information"){
				ticketinfo_arr.push(<tr><td><b>{field.fieldlabel}: </b></td><td>{ReactHtmlParser(field.fieldvalue)}</td></tr>);
			}
		});
		return ticketinfo_arr;
	}
	renderPortalDetail() {
		let data = this.props.data;
		if (!data.Contacts) return "";
		let ticketinfo_arr = [];
		data.Contacts.map( (field, index) => {
			if (field.blockname == "Customer Portal Details"){
				ticketinfo_arr.push(<tr><td><b>{field.fieldlabel}: </b></td><td>{field.fieldvalue}</td></tr>);
			}
		});
		return ticketinfo_arr;
	}
	renderAddress() {
		let data = this.props.data;
		if (!data.Contacts) return "";
		let ticketinfo_arr = [];
		data.Contacts.map( (field, index) => {
			if (field.blockname == "Address Details"){
				ticketinfo_arr.push(<tr><td><b>{field.fieldlabel}: </b></td><td>{field.fieldvalue}</td></tr>);
			}
		});
		return ticketinfo_arr;
	}
	renderDescription() {
		let data = this.props.data;
		if (!data.Contacts) return "";
		let ticketinfo_arr = [];
		data.Contacts.map( (field, index) => {
			if (field.blockname == "Description Details"){
				ticketinfo_arr.push(<tr><td><b>{field.fieldlabel}: </b></td><td>{field.fieldvalue}</td></tr>);
			}
		});
		return ticketinfo_arr;
	}
	renderParentContact() {
		let data = this.props.data;
		if (!data.Contacts) return "";
		let ticketinfo_arr = [];
		data.Contacts.map( (field, index) => {
			if (field.blockname == "LBL_PARRENT_CONTACT"){
				ticketinfo_arr.push(<tr><td><b>{field.fieldlabel}: </b></td><td>{field.fieldvalue}</td></tr>);
			}
		});
		return ticketinfo_arr;
	}
	render() {
		return (
	      <div>
	        <div className="row">
	        { this.props.statuses.loadedContactInfo === 'pending' && <Loader color="#26A65B" size="16px" margin="4px"/> }
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading">Basic Information </div>
	              <table className="table">
	                <tbody>{this.props.data? this.renderBasicInfo() : ""}
	                </tbody></table>
	            </div>
	          </div>
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading">Customer Portal Details </div>
	              <table className="table">
	                <tbody> {this.props.data? this.renderPortalDetail() : ""}
	                </tbody></table>
	            </div>
	          </div>
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading">Address Details </div>
	              <table className="table">
	                <tbody> {this.props.data? this.renderAddress() : ""}
	                </tbody></table>
	            </div>
	          </div>
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading">Description Details </div>
	              <table className="table">
	                <tbody> {this.props.data? this.renderDescription() : ""}
	                </tbody></table>
	            </div>
	          </div>
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading">LBL_PARRENT_CONTACT  </div>
	              <table className="table">
	                <tbody> {this.props.data? this.renderParentContact() : ""}
	                </tbody></table>
	            </div>
	          </div>
	        </div>
	        <div className="row">
	        </div>
	      </div>
    );
	}
}
function mapStateToProps(state) {
	return {
		data: state.contactdata
	};
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({getContentByParam: getContentByParam}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail);