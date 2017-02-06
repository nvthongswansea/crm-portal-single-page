import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../Actions/ContactsActions.js';
import {bindActionCreators} from 'redux';
import { hashHistory } from 'react-router';
import Loader from 'halogen/PulseLoader';

class ContactDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {contactId: this.props.params.contactId};
		this.props.getContent(this.state.contactId);
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
    			nextProps.getContent(this.state.contactId);
    		});
		
	}

	renderBasicInfo() {
		let data = this.props.fetchedData.data;
		if (!data.Contacts) return "";
		let ticketinfo_arr = [];
		data.Contacts.map( (field, index) => {
			if (field.blockname == "Th\u00f4ng tin H\u1ecdc vi\u00ean"){
				ticketinfo_arr.push(<tr><td><b>{field.fieldlabel}: </b></td><td dangerouslySetInnerHTML={{__html: field.fieldvalue}} /></tr>);
			}
		});
		return ticketinfo_arr;
	}
	renderPortalDetail() {
		let data = this.props.fetchedData.data;
		if (!data.Contacts) return "";
		let ticketinfo_arr = [];
		data.Contacts.map( (field, index) => {
			if (field.blockname == "C\u1ed5ng th\u00f4ng tin kh\u00e1ch h\u00e0ng"){
				ticketinfo_arr.push(<tr><td><b>{field.fieldlabel}: </b></td><td dangerouslySetInnerHTML={{__html: field.fieldvalue}} /></tr>);
			}
		});
		return ticketinfo_arr;
	}
	renderAddress() {
		let data = this.props.fetchedData.data;
		if (!data.Contacts) return "";
		let ticketinfo_arr = [];
		data.Contacts.map( (field, index) => {
			if (field.blockname == "Address Details"){
				ticketinfo_arr.push(<tr><td><b>{field.fieldlabel}: </b></td><td dangerouslySetInnerHTML={{__html: field.fieldvalue}} /></tr>);
			}
		});
		return ticketinfo_arr;
	}
	renderDescription() {
		let data = this.props.fetchedData.data;
		if (!data.Contacts) return "";
		let ticketinfo_arr = [];
		data.Contacts.map( (field, index) => {
			if (field.blockname == "Description Details"){
				ticketinfo_arr.push(<tr><td><b>{field.fieldlabel}: </b></td><td dangerouslySetInnerHTML={{__html: field.fieldvalue}} /></tr>);
			}
		});
		return ticketinfo_arr;
	}
	renderParentContact() {
		let data = this.props.fetchedData.data;
		if (!data.Contacts) return "";
		let ticketinfo_arr = [];
		data.Contacts.map( (field, index) => {
			if (field.blockname == "LBL_PARRENT_CONTACT"){
				ticketinfo_arr.push(<tr><td><b>{field.fieldlabel}: </b></td><td dangerouslySetInnerHTML={{__html: field.fieldvalue}} /></tr>);
			}
		});
		return ticketinfo_arr;
	}
	render() {
		return (
	      <div>
	      { this.props.fetchedData.loading === true && <Loader color="#26A65B" size="16px" margin="4px"/> }
	      { this.props.fetchedData.loading === false && 
	        <div className="row">
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading">Basic Information </div>
	              <table className="table">
	                <tbody>{this.props.fetchedData.data? this.renderBasicInfo() : ""}
	                </tbody></table>
	            </div>
	          </div>
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading">Customer Portal Details </div>
	              <table className="table">
	                <tbody> {this.props.fetchedData.data? this.renderPortalDetail() : ""}
	                </tbody></table>
	            </div>
	          </div>
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading">Address Details </div>
	              <table className="table">
	                <tbody> {this.props.fetchedData.data? this.renderAddress() : ""}
	                </tbody></table>
	            </div>
	          </div>
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading">Description Details </div>
	              <table className="table">
	                <tbody> {this.props.fetchedData.data? this.renderDescription() : ""}
	                </tbody></table>
	            </div>
	          </div>
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading">LBL_PARRENT_CONTACT  </div>
	              <table className="table">
	                <tbody> {this.props.fetchedData.data? this.renderParentContact() : ""}
	                </tbody></table>
	            </div>
	          </div>
	        </div>}
	        <div className="row">
	        </div>
	      </div>
    );
	}
}
function mapStateToProps(state) {
	return {
		fetchedData: state.contactdata
	};
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({getContent: actions.refreshContact}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail);