import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../Actions/SumTableActions.js';
import {bindActionCreators} from 'redux';
import Loader from 'halogen/PulseLoader';

class SumTable extends Component {
	constructor(props) {
		super(props);
		this.state = {potentialid: this.props.params.potentialid};
		console.log(this.state.potentialid);
		this.props.refreshContent(this.state.potentialid);
		this.renderSumData=this.renderSumData.bind(this);
	} 
	componentWillReceiveProps(nextProps){
		if (this.state.potentialid != nextProps.params.potentialid)
			this.setState({
      			potentialid: nextProps.params.potentialid
    		}, () => {
    			nextProps.refreshContent(this.state.potentialid);
    		});
		
	}
	renderSumData() {
		let ticketinfo_arr = [];
		let data = this.props.sumtableData.data;
		let grandtotal = 0;
		let total = 0;
		let refund = 0;
		if (data.total) {
			grandtotal += data.total;
			ticketinfo_arr.push(<tr><td><b>Tổng tiền hóa đơn: </b></td><td dangerouslySetInnerHTML={{__html: data.total.toLocaleString() + " VND"}} /></tr>);
		}
		if (data.penalty) {
			grandtotal += data.penalty;
			ticketinfo_arr.push(<tr><td><b>Tổng phí phạt: </b></td><td dangerouslySetInnerHTML={{__html: data.penalty.toLocaleString() + " VND"}} /></tr>);
		}
		if (data.detail) {
			data.detail.map((field) => {
				if (field.acashflow_type!="Refund") {
					total += field.sum;
				} else  {
					refund += field.sum;
				} 
			});
			grandtotal -= total;
			grandtotal -= refund;
			ticketinfo_arr.push(<tr><td><b>Tổng đã thanh toán: </b></td><td dangerouslySetInnerHTML={{__html: total.toLocaleString('de-DE') + " VND"}} /></tr>);
			ticketinfo_arr.push(<tr><td><b>Tổng trả lại: </b></td><td dangerouslySetInnerHTML={{__html: refund.toLocaleString('de-DE') + " VND"}} /></tr>);
		}
		if (grandtotal < 0) {
			grandtotal *= -1;
			ticketinfo_arr.push(<tr><td><b>Tổng tiền dư: </b></td><td dangerouslySetInnerHTML={{__html: grandtotal.toLocaleString('de-DE') + " VND"}} /></tr>);
		} else {
			ticketinfo_arr.push(<tr><td><b>Tổng tiền còn thiếu: </b></td><td dangerouslySetInnerHTML={{__html: grandtotal.toLocaleString('de-DE') + " VND"}} /></tr>);
		}
		return ticketinfo_arr;
	}
	render() {
		return (
			<div>
			{ this.props.sumtableData.loading === true && <Loader color="#26A65B" size="16px" margin="4px"/> }
			{ this.props.sumtableData.loading === false && 
			<div className="row">
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading">Tóm tắt thông tin thanh toán: </div>
	              <table className="table">
	                <tbody>{ this.props.sumtableData.data? this.renderSumData() : "" }
	                </tbody></table>
	            </div>
	          </div>
	        </div>}
	        </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {sumtableData: state.SumTable};
}
const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({refreshContent: actions.refreshSumTable}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SumTable);