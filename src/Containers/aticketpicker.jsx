import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../Actions/CourseRegisterActions.js';
import {bindActionCreators} from 'redux';
import Loader from 'halogen/PulseLoader';
import { InlineNotification } from 'react-redux-notifications';
import {NO_COUPON, COUPON_EXIST, COUPON_USED, COUPON_INVALID} from '../Actions/actiontypes.js';

class TicketPicker extends Component {
	constructor(props) {
		super(props);
		this.state = {productId: this.props.params.productId , couponcode: null};

		this.props.getContent(this.state.productId);
		this.renderProductInfo=this.renderProductInfo.bind(this);
		this.renderTicket=this.renderTicket.bind(this);
		this.renderCouponInput=this.renderCouponInput.bind(this);
		this.registerTimtable=this.registerTimtable.bind(this);
		this.cancelTimetable=this.cancelTimetable.bind(this);
		this.submit=this.submit.bind(this);
		this.renderUsedCoupon=this.renderUsedCoupon.bind(this);
		this.cancelTimetableCoupon=this.cancelTimetableCoupon.bind(this);
		this.couponChange=this.couponChange.bind(this);
	}
	componentWillReceiveProps(nextProps){
		if (this.state.productId != nextProps.params.productId)
			this.setState({
      			productId: nextProps.params.productId
    		}, () => {
    			nextProps.getContent(this.state.productId);
    		});
		
	}
	renderProductInfo() {
		let data = this.props.fetchedData.data;
		if (!data.productinfo) return "";
		let info_arr = [];
		info_arr.push(<tr><td><b>Tên Khóa học: </b></td><td dangerouslySetInnerHTML={{__html: data.productinfo.productname}}/></tr>);
		info_arr.push(<tr><td><b>Địa chỉ tổ chức: </b></td><td dangerouslySetInnerHTML={{__html: data.productinfo.address}}/></tr>);
		info_arr.push(<tr><td><b>Ngày bắt đầu học: </b></td><td dangerouslySetInnerHTML={{__html: data.productinfo.startdate}}/></tr>);
		return info_arr;
	}
	registerTimtable(tickcontproductid, productid) {
		let param = {tickcontproductid: tickcontproductid, productid: productid, defaultprodid: this.state.productId, cancelrequest: "false"};
		this.props.registerCourse(param);
	}
	cancelTimetable(tickcontproductid, productid) {
		let param = {tickcontproductid: tickcontproductid, productid: productid, defaultprodid: this.state.productId, cancelrequest: "true"};
		this.props.registerCourse(param);
	}
	cancelTimetableCoupon(atickcontprodid) {
		let param = {atickcontprodid: atickcontprodid, defaultprodid: this.state.productId};
		this.props.cancelCourseByCoupon(param);
	}
	renderTicket() {
		let data = this.props.fetchedData.data;
		if (!data.ticketinfo && !data.usedticketinfo) return "";
		let info_arr = [];
		if (!data.usedcouponinfo) {
			if (data.usedticketinfo) {
				data.usedticketinfo.map( (field, index) => {
					info_arr.push(<tr>
						<td>
							<b>Vé {field.atickets_type} {field.atickets_code}</b>
						</td>
						<td>
							{field.status=="CANCEL_REQUEST"? <p style={{color: "#ff9900"}}>Đang chờ xử lý yêu cầu hủy! </p> : <a className="btn btn-danger btn-sm" onClick={() =>{this.cancelTimetable(field.atickcontprodid,data.defaultprodid)}}>Hủy đăng kí</a>}
						</td></tr>);
				});
			} else {
				if (data.ticketinfo)
				data.ticketinfo.map( (field, index) => {
				info_arr.push(<tr>
					<td>
						<b>Vé {field.atickets_type} {field.atickets_code}</b>
					</td>
					<td>
						<a className="btn btn-primary btn-sm" onClick={() =>{this.registerTimtable(field.atickcontprodid,this.state.productId)}}>Đăng kí</a>
					</td></tr>);
				});
			}
		}
		return info_arr;
	}
	submit() {
		let param = {
			couponcode: this.state.couponcode,
			productid: this.state.productId
		};
		this.props.registerCourseByCoupon(param);
	}
	// keyDown(event) {
	// 	if (event.keyCode === 13) {
	// 		let param = {
	// 			coupon: event.target.value.trim(),
	// 			productid: this.state.productId
	// 		}
 //            //this.props.getContent("checkCoupon",param);
 //            event.preventDefault();
 //            //console.log(this.state.vouchercode);
 //        } 
	// }
	renderUsedCoupon() {
		let data = this.props.fetchedData.data;
		if (!data.couponinfo && !data.usedcouponinfo) return "";
		let info_arr = [];
		if (data.usedcouponinfo)
			data.usedcouponinfo.map( (field, index) => {
				info_arr.push(<tr>
					<td>
						<b dangerouslySetInnerHTML={{__html: "Coupon "+field.acoupons_code}}/>
					</td>
					<td>
						{field.status=="CANCEL_REQUEST"? <p style={{color: "#ff9900"}}>Đang chờ xử lý yêu cầu hủy! </p> : <a className="btn btn-danger btn-sm" onClick={() =>{this.cancelTimetableCoupon(field.atickcontprodid)}}>Hủy đăng kí</a>}
						
					</td></tr>);
			});
		return info_arr;
	}
	couponChange(e) {
		this.setState({ couponcode: e.target.value.trim() });
	}
	renderCouponInput() {
		let data = this.props.fetchedData.data;
		let info_arr;
		
		if (!data.usedticketinfo) { 
			if (!data.usedcouponinfo) {
				info_arr= (<tbody>{this.renderUsedCoupon()}<tr><td>
						<b>Điền coupon (nếu có):</b>
					</td> <td>
					<form id="fillCouponForm">
							<div className="form-group">
			  					<input type="text" className="form-control" name="email" onChange={(event) => this.couponChange(event)} />
			  					{this.props.fetchedData.checkcoupon == "none" ? <div style={{color: "red"}}>Coupon này không tồn tại!</div> : ''}
			  					{this.props.fetchedData.checkcoupon == "used" ? <div style={{color: "red"}}>Bạn đã sử dụng coupon này! Vui lòng dùng coupon khác.</div> : ''}
			  					{this.props.fetchedData.checkcoupon == "invalid" ? <div style={{color: "red"}}>Coupon không được sử dụng cho khóa này! Vui lòng dùng coupon khác.</div> : ''}
							</div>
								
						</form>
						<a className="btn btn-success btn-xs" onClick={() => {this.submit()}}>Đăng ký</a></td></tr></tbody>);
			} else {
				info_arr = (<tbody>{this.renderUsedCoupon()}</tbody>);
			}
		} 	
		
		return info_arr;
	}
	render() {
		return (
		   <div>
		   {this.props.fetchedData.regloading ? 
					        	<div className="panel-footer text-center">
					        		<i className="fa fa-spinner fa-spin"></i>
						            <b>Xin vui lòng chờ trong giây lát...</b>
						            <div className="clearfix" />
					          	</div> : 
					          	""}
		   { this.props.fetchedData.loading === true && <Loader color="#26A65B" size="16px" margin="4px"/> }
	        { !this.props.fetchedData.loading && !this.props.fetchedData.regloading ?
	        <div className="row">
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading">Thông tin khóa học đăng ký: </div>
	              <table className="table">
	                <tbody>{this.props.fetchedData.data? this.renderProductInfo() : ""}
	                </tbody>
	               </table>
	            </div>
	          </div> 
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading">Đăng kí bằng vé: </div>
	              <table className="table">
	                <tbody>{this.props.fetchedData.data? this.renderTicket() : ""}
	                </tbody></table>
	            </div>
	          </div> 
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading">Đăng kí bằng Coupon: </div>
	              <table className="table">
	                {this.props.fetchedData.data? this.renderCouponInput() : ""}
	                </table>
	            </div>
	          </div> 
	        </div> : ""}
	        <div className="row">
	        </div>
	      </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		fetchedData: state.ticketpickerdata
	};
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({
   	getContent: actions.loadTicketPicker, 
   	registerCourse: actions.registerCourse, 
   	registerCourseByCoupon: actions.registerCourseByCoupon, 
   	cancelCourseByCoupon: actions.cancelCourseByCoupon}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketPicker);