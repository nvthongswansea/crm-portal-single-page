import React, { Component } from 'react';
import { connect } from 'redux-await';
import {refreshContent,getContentByParam} from '../Actions/displaymodulename.js';
import {bindActionCreators} from 'redux';
import Loader from 'halogen/PulseLoader';
import jQuery from 'jquery';
import { hashHistory } from 'react-router';
import axios from 'axios';

class AddTicket extends Component {
	constructor(props){
		super(props);
		this.props.refreshContent("newticket");
		this.renderRelatedProduct = this.renderRelatedProduct.bind(this);
		this.renderSeverity = this.renderSeverity.bind(this);
		this.renderCategory = this.renderCategory.bind(this);
		this.renderContractService = this.renderContractService.bind(this);
		this.renderPriority = this.renderPriority.bind(this);
		this.submit = this.submit.bind(this);
	}
	renderRelatedProduct() {
		let data = this.props.data;
		if(!data.productid) return "";
		let productid_arr = data.productid;
		let productname_arr = data.productname;
		let options = [];
		productid_arr.map((product_id, index) => {
			options.push(<option value={product_id}>{productname_arr[index]}</option>);
		});
		return options;
	}
	renderSeverity() {
		let data = this.props.data;
		if (!data.ticketseverities) return "";
		let ticketseverities = data.ticketseverities;
		let options = [];
		ticketseverities.map((ticketseverity, index) => {
			options.push(<option value={ticketseverity}>{ticketseverity}</option>);
		});
		return options;
	}
	renderCategory() {
		let data = this.props.data;
		if (!data.ticketcategories) return "";
		let ticketcategories = data.ticketcategories;
		let options = [];
		ticketcategories.map((ticketcategory, index) => {
			options.push(<option value={ticketcategory}>{ticketcategory}</option>);
		});
		return options;
	}
	renderContractService() {
		let data = this.props.data;
		if(!data.serviceid) return "";
		let serviceid_arr = data.serviceid;
		let servicename_arr = data.servicename;
		let options = [];
		serviceid_arr.map((service_id, index) => {
			options.push(<option value={service_id}>{servicename_arr[index]}</option>);
		});
		return options;
	}
	renderPriority() {
		let data = this.props.data;
		if(!data.ticketpriorities) return "";
		let ticketpriorities = data.ticketpriorities;
		let options = [];
		ticketpriorities.map((ticketpriority, index) => {
			options.push(<option value={ticketpriority}>{ticketpriority}</option>);
		});
		return options;
	}
	// validate(detail) {
	// 	let valid = false;
 // 		if(this.props.data) {
 // 			switch(detail) {
 // 				case "productid":
 // 				if(this.props.productid){
 // 					if(this.props.productid.productid){
 // 						valid = true;
 // 					} else {
 // 						valid = false
 // 					}
 // 				} else {
 // 					valid = false;
 // 				}
 // 			}
 			
 // 		} else {
 // 			valid = false;
 // 		}
 // 		return valid;
	// }
	submit(dom) {
		let Jsondata = jQuery(dom).serialize();
		axios.post("/portal/createnewticket", Jsondata)
				.then(function(response) {
					hashHistory.push({
  						pathname: '/HelpDesk/main',
  						query: {noti: 'Added new ticket successfully!'}
					});
				})
				.catch(function(error) {
					hashHistory.push({
  						pathname: '/HelpDesk/main',
  						query: {noti: 'Failed!'}
					});
				});
		
	}
	render() {
		return (
			<div className="row">
			   <div className="col-lg-12">
			      <div className="panel panel-default">
			         <div className="panel-heading"> Ticket Detail </div>
			         { this.props.statuses.loadedAddTicketForm === 'pending' && <Loader color="#26A65B" size="16px" margin="4px"/> }
			         { this.props.statuses.loadedAddTicketForm === 'success' &&  
			         <form id="ticketform" method="POST" role="form" onSubmit={(e) => {  this.submit("#ticketform");e.preventDefault();}}>
			         	<div className="panel-body">
			         		<input name="module" value="HelpDesk" type="hidden"></input>
							<input name="projectid" value="" type="hidden"></input>
							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<label for="ttitle">Title</label>
										<input id="ttitle" className="form-control" name="title" placeholder="Enter the title of the ticket" type="text"></input>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group"> 
										<label for="productid">Related Product</label>
										<select id="productid" className="form-control chosen-select" name="productidf">
											<option value="" selected="">- - - - -</option>
											{this.props.data? this.renderRelatedProduct() : ""}
										</select>
									</div>
									<div className="form-group">
										<label for="severity">Severity</label>
										<select id="severity" className="form-control chosen-select" name="severity">
											<option value="" selected="">- - - - -</option>
											{this.props.data? this.renderSeverity() : ""}
										</select>
									</div>
									<div className="form-group">
										<label for="category">Category </label>
										<select id="category" className="form-control chosen-select" name="category">
											<option value="" selected="">- - - - -</option>
											{this.props.data? this.renderCategory() : ""}
										</select>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group"> 
										<label for="serviceid">Contract Service</label>
										<select id="serviceid" className="form-control chosen-select" name="serviceid">
											<option value="" selected="">- - - - -</option>
											{this.props.data? this.renderContractService() : ""}
										</select>
									</div>
									<div className="form-group"> 
										<label for="priority">Priority</label>
										<select id="priority" className="form-control chosen-select" name="priority">
											<option value="" selected="">- - - - -</option>
											{this.props.data? this.renderPriority() : ""}
										</select>
									</div>
								</div>
								<div className="col-md-12 text-center">
									<div className="form-group">
										<label for="description">Description</label>
										<textarea id="description" className="form-control" name="description" rows="10"></textarea>
									</div>
								</div>
							</div>
			         	</div>
			         	<div className="panel-footer">
							<input className="btn btn-success btn-lg" value="Submit Ticket" type="submit"></input>
						</div>
			         </form>}
			         
			      </div>
			   </div>
			</div>			
			);
	}
}

function mapStateToProps(state) {
	return {
		data: state.addticketdata
	};
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({refreshContent: refreshContent}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTicket);