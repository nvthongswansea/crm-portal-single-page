import React, { Component } from 'react';
import { connect } from 'redux-await';
import {refreshContent,getContentByParam} from '../Actions/displaymodulename.js';
import {bindActionCreators} from 'redux';
import Loader from 'halogen/PulseLoader';

class TicketPicker extends Component {
	constructor(props) {
		super(props);
		this.state = {productId: this.props.params.productId};
		this.props.getContentByParam("ticketpicker", this.state.productId);
		this.renderProductInfo=this.renderProductInfo.bind(this);
		this.renderTicket=this.renderTicket.bind(this);
	}
	componentWillReceiveProps(nextProps){
		if (this.state.productId != nextProps.params.productId)
			this.setState({
      			productId: nextProps.params.productId
    		}, () => {
    			nextProps.getContentByParam("ticketpicker", this.state.productId);
    		});
		
	}
	renderProductInfo() {
		let data = this.props.data;
		if (!data.productinfo) return "";
		let info_arr = [];
		info_arr.push(<tr><td><b>Tên Khóa học: </b></td><td>{data.productinfo.productname}</td></tr>);
		info_arr.push(<tr><td><b>Địa chỉ tổ chức: </b></td><td>{data.productinfo.address}</td></tr>);
		info_arr.push(<tr><td><b>Ngày bắt đầu học: </b></td><td>{data.productinfo.startdate}</td></tr>);
		return info_arr;
	}
	renderTicket() {
		let data = this.props.data;
		if (!data.ticketinfo) return "";
		let info_arr = [];
		data.ticketinfo.map( (field, index) => {
			info_arr.push(<tr><td><b>Vé {field.atickets_type} {field.atickets_code}</b></td><td>{field.atickcontprodid}<a className="btn btn-primary btn-sm openticketpicker" href="#">Đăng kí</a></td></tr>);
		});
		return info_arr;
	}
	render() {
		return (
		   <div>
	        <div className="row">
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading">Thông tin khóa học đăng ký: </div>
	              { this.props.statuses.loadedTicketPicker === 'pending' && <Loader color="#26A65B" size="16px" margin="4px"/> }
	              <table className="table">
	                <tbody>{this.props.data? this.renderProductInfo() : ""}
	                </tbody>
	               </table>
	            </div>
	          </div> 
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading">Chọn vé: </div>
	              <table className="table">
	                <tbody>{this.props.data? this.renderTicket() : ""}
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
		data: state.ticketpickerdata
	};
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({getContentByParam: getContentByParam}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketPicker);