import React, { Component } from 'react';
import { connect } from 'redux-await';
import {refreshContent,getContentByParam} from '../Actions/displaymodulename.js';
import {bindActionCreators} from 'redux';
import Loader from 'halogen/PulseLoader';
import { InlineNotification } from 'react-redux-notifications';
import {NO_EMAIL, EMAIL_EXIST} from '../Actions/actiontypes.js';
import jQuery from 'jquery';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class StudentTransfer extends Component {
	constructor(props) {
		super(props);
		if (this.props.route.formname=="TransferCourse") {
			this.state = {ATickConProdId: this.props.params.ATickConProdId, warning: false};
			this.props.getContentByParam("ATCPDetail", this.state.ATickConProdId);
		} else if (this.props.route.formname=="TransferVoucher") {
			this.state = {AVouchersId: this.props.params.AVouchersId};
			this.props.getContentByParam("VoucherDetail", this.state.AVouchersId);
		}
		this.renderProductInfo=this.renderProductInfo.bind(this);
		this.renderVoucherInfo=this.renderVoucherInfo.bind(this);
		this.keyDown = this.keyDown.bind(this);
		this.submit=this.submit.bind(this);
		this.toggleWarning = this.toggleWarning.bind(this);
	}
	componentWillReceiveProps(nextProps){
		if (this.props.route.formname=="TransferCourse") {
			if (this.state.ATickConProdId != nextProps.params.ATickConProdId)
				this.setState({
	      			ATickConProdId: nextProps.params.ATickConProdId
	    		}, () => {
	    			nextProps.getContentByParam("ATCPDetail", this.state.ATickConProdId);
	    		});
		} else if (this.props.route.formname=="TransferVoucher") {
			if (this.state.AVouchersId != nextProps.params.AVouchersId)
				this.setState({
	      			AVouchersId: nextProps.params.AVouchersId
	    		}, () => {
	    			nextProps.getContentByParam("VoucherDetail", this.state.AVouchersId);
	    		});
		}
	}
	toggleWarning() {
	    this.setState({
	      warning: !this.state.warning
	    });
	}
	keyDown(event) {
		if (event.keyCode === 13) {
            this.props.getContentByParam("checkStudentEmail",event.target.value.trim());
            event.preventDefault();
        } 
	}
	submit(dom) {
		let txt;
		if (this.props.route.formname=="TransferCourse") {
	    	let res = confirm("Lưu ý: Sau khi đổi tên người đi học, bạn sẽ không thể chỉnh sửa, sử dụng hay truy cập thông tin vé này nữa. Bạn có chắc chắn muốn đổi?");
			if (res == true) {
				let Jsondata = jQuery(dom).serialize();
				this.props.getContentByParam("changeStudent", Jsondata);
			}
		} else if (this.props.route.formname=="TransferVoucher") {
			let res = confirm("Lưu ý: Sau khi chuyển nhượng, bạn sẽ không thể chỉnh sửa, sử dụng hay truy cập thông tin voucher này nữa. Bạn có chắc chắn muốn chuyển?");
			if (res == true) {
				let Jsondata = jQuery(dom).serialize();
				this.props.getContentByParam("changeVoucherOwner", Jsondata);
			}
		}
		
	}
	renderProductInfo() {
		let data = this.props.data;
		if (!data) return "";
		let info_arr = [];
		info_arr.push(<tr><td><b>Tên Khóa học: </b></td><td>{data.productname}</td></tr>);
		info_arr.push(<tr><td><b>Mã vé: </b></td><td>{data.atickets_code}</td></tr>);
		info_arr.push(
			<tr>
				<td>
					<b>Email người đi học: </b>
				</td>
				<td> 
					<form id="changeStudentForm">
						<div className="form-group">
							<input type="hidden" className="form-control" name="atickcontprodid" value={data.atickcontprodid}/>
		  					<input type="text" className="form-control" name="email" defaultValue={data.email} onKeyDown={(event) => this.keyDown(event)} onBlur={(event) => {this.props.getContentByParam("checkStudentEmail",event.target.value.trim())}}/>
		  					<div style={{color: "red"}}>
		  					<InlineNotification
					          defaultMessage='Email người học không tồn tại! Xin nhập email đã tồn tại trong hệ thống.'
					          hideAfter={2500}
					          triggeredBy={NO_EMAIL} /></div>
							</div>
							<div style={{color: "green"}}>
							<InlineNotification
					          defaultMessage='Có thể chuyển vé cho người đi học này!'
					          hideAfter={2500}
					          triggeredBy={EMAIL_EXIST} /></div>
					</form>
					<a className="btn btn-success btn-xs" onClick={() => {this.submit("#changeStudentForm")}}>Đổi người đi học</a>
				</td>
			</tr>);
		info_arr.push(<tr><td><b>Tình trạng: </b></td><td>{data.atcp_statusatcp_status}</td></tr>);
		return info_arr;
	}
	renderVoucherInfo() {
		let data = this.props.data;
		if (!data) return "";
		let info_arr = [];
		info_arr.push(<tr><td><b>Mã voucher: </b></td><td>{data.avouchers_code}</td></tr>);
		info_arr.push(<tr><td><b>Loại voucher: </b></td><td>{data.avouchers_type} VND</td></tr>);
		info_arr.push(
			<tr>
				<td>
					<b>Email người đi học: </b>
				</td>
				<td> 
					<form id="changeStudentForm">
						<div className="form-group">
							<input type="hidden" className="form-control" name="voucherid" value={data.avouchersid}/>
		  					<input type="text" className="form-control" name="email" defaultValue={data.email} onKeyDown={(event) => this.keyDown(event)} onBlur={(event) => {this.props.getContentByParam("checkStudentEmail",event.target.value.trim())}}/>
		  					<div style={{color: "red"}}>
		  					<InlineNotification
					          defaultMessage='Email người học không tồn tại! Xin nhập email đã tồn tại trong hệ thống.'
					          hideAfter={2500}
					          triggeredBy={NO_EMAIL} /></div>
							</div>
							<div style={{color: "green"}}>
							<InlineNotification
					          defaultMessage='Có thể chuyển vé cho người đi học này!'
					          hideAfter={2500}
					          triggeredBy={EMAIL_EXIST} /></div>
					</form>
					<Button color="warning" onClick={this.toggleWarning}>Warning modal</Button>
	                <Modal isOpen={this.state.warning} toggle={this.toggleWarning} className={'modal-warning ' + this.props.className}>
	                  <ModalHeader toggle={this.toggleWarning}>Modal title</ModalHeader>
	                  <ModalBody>
	                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	                  </ModalBody>
	                  <ModalFooter>
	                    <Button color="primary" onClick={this.toggleWarning}>Do Something</Button>{' '}
	                    <Button color="secondary" onClick={this.toggleWarning}>Cancel</Button>
	                  </ModalFooter>
	                </Modal>
					<a className="btn btn-success btn-xs" onClick={() => {this.submit("#changeStudentForm")}}>Chuyển nhượng voucher</a>
				</td>
			</tr>);
		return info_arr;
	}
	render() {
		this.props.data? console.log(this.props.data.data): "";
		return (
		   <div>
		   { this.props.statuses.loadedATCPeditor === 'pending' && <Loader color="#26A65B" size="16px" margin="4px"/> }
	        { this.props.statuses.loadedATCPeditor === 'success' && 
	        <div className="row">
	          <div className="col-lg-6">
	            <div className="panel panel-default">
	              <div className="panel-heading">Thông tin cơ bản: </div>
	              <table className="table">
	                <tbody>{this.props.route.formname=="TransferCourse"? (this.props.data? this.renderProductInfo() : ""):""}
	                {this.props.route.formname=="TransferVoucher"? (this.props.data? this.renderVoucherInfo() : ""):""}
	                </tbody>
	               </table>
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
		data: state.ATCPeditor
	};
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({getContentByParam: getContentByParam}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentTransfer);