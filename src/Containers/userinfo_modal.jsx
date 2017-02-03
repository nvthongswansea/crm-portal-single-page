import React, { Component } from 'react';
import { connect } from 'redux-await';
import {refreshContent,getContentByParam} from '../Actions/displaymodulename.js';
import {bindActionCreators} from 'redux';
import Loader from 'halogen/PulseLoader';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

class UserInfoModal extends Component { 
	constructor(props) {
		super(props);
		this.state = {isOpen: false};
		this.openModal=this.openModal.bind(this);
		this.hideModal=this.hideModal.bind(this);
		this.submit=this.submit.bind(this);
		this.renderInfo=this.renderInfo.bind(this);
		this.renderError=this.renderError.bind(this);
	}
	openModal() {
	  this.props.getContentByParam('confirmTransferInfo', jQuery('#email').val());
	  this.setState({
	    isOpen: true
	  });
	};

	hideModal() {
	  this.setState({
	    isOpen: false
	  });
	};
	submit() {
		let txt;
		if (this.props.formname=="TransferCourse") {
			let Jsondata = jQuery('#changeStudentForm').serialize();
			this.props.getContentByParam("changeStudent", Jsondata);
			
		} else if (this.props.formname=="TransferVoucher") {
			let Jsondata = jQuery('#changeStudentForm').serialize();
			this.props.getContentByParam("changeVoucherOwner", Jsondata);
		}
		
	}
	renderInfo() {
		return (
			<div>
			  <ModalHeader>
			    <ModalClose onClick={this.hideModal}/>
			    <ModalTitle>Thông tin người nhận</ModalTitle>
			  </ModalHeader>
			  <ModalBody>
			    	<b>Tên người nhận:</b> <p dangerouslySetInnerHTML={{__html: this.props.data.lastname}} />
			    	<b>Email:</b><p dangerouslySetInnerHTML={{__html: this.props.data.email}} />
			    	<b>Số điện thoại:</b><p dangerouslySetInnerHTML={{__html: this.props.data.mobile}} />
			    	<div style={{color: 'red'}}><b>Lưu ý: </b>Sau khi chuyển nhượng, bạn không còn sở hữu vé/voucher này nữa. Vì thế bạn không thể truy cập, chỉnh sửa hay đăng kí vé/voucher này. </div>
			  </ModalBody>
			  <ModalFooter>
			    <button className='btn btn-default' onClick={this.hideModal}>
			      Hủy
			    </button>
			    <button className='btn btn-primary' onClick={this.submit}>
			    { (this.props.statuses.postResult == 'success' || !this.props.statuses.postResult) ? (<div>Chuyển nhượng</div>) : ""}
			    { this.props.statuses.postResult === 'pending' && (<div><i className="fa fa-spinner fa-spin"></i> Xin chờ</div>) }
			    </button>
			  </ModalFooter>
			  </div>
			);
	}
	renderError() {
		return (
			<div>
			  <ModalHeader>
			    <ModalClose onClick={this.hideModal}/>
			    <ModalTitle>Lỗi</ModalTitle>
			  </ModalHeader>
			  <ModalBody>
			    	<div style={{color: 'red'}}>Email này không tồn tại.</div>
			  </ModalBody>
			  <ModalFooter>
			    <button className='btn btn-default' onClick={this.hideModal}>
			      Hủy
			    </button>
			  </ModalFooter>
			  </div>
			);
	}
	render() {
		return (
			<div>
				<a className="btn btn-success" onClick={() => {this.openModal()}}>Chuyển nhượng</a>
				<Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
				{ this.props.statuses.loadedModal === 'pending' && <Loader color="#26A65B" size="16px" margin="4px"/> }
	      		{ this.props.statuses.loadedModal === 'success' && (this.props.data? this.renderInfo() : this.renderError())}
				</Modal>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.Modal
	};
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({refreshContent: refreshContent, getContentByParam: getContentByParam}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoModal);