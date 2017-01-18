import React, { Component } from 'react';
import { connect } from 'redux-await';
import {refreshContent,getContentByParam} from '../Actions/displaymodulename.js';
import {bindActionCreators} from 'redux';
import Loader from 'halogen/PulseLoader';
import { InlineNotification } from 'react-redux-notifications';
import {NO_EMAIL, EMAIL_EXIST} from '../Actions/actiontypes.js';
import jQuery from 'jquery';

class ATCPEditor extends Component {
	constructor(props) {
		super(props);
		this.state = {ATickConProdId: this.props.params.ATickConProdId};
		this.props.getContentByParam("ATCPDetail", this.state.ATickConProdId);
		this.renderProductInfo=this.renderProductInfo.bind(this);
		this.keyDown = this.keyDown.bind(this);
		this.submit=this.submit.bind(this);
	}
	componentWillReceiveProps(nextProps){
		if (this.state.ATickConProdId != nextProps.params.ATickConProdId)
			this.setState({
      			ATickConProdId: nextProps.params.ATickConProdId
    		}, () => {
    			nextProps.getContentByParam("ATCPDetail", this.state.ATickConProdId);
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
    	let res = confirm("Lưu ý: Sau khi đổi tên người đi học, bạn sẽ không thể chỉnh sửa, sử dụng hay truy cập thông tin vé này nữa. Bạn có chắc chắn muốn đổi?");
		if (res == true) {
			let Jsondata = jQuery(dom).serialize();
			this.props.getContentByParam("changeStudent", Jsondata);
		}
		
	}
	renderProductInfo() {
		let data = this.props.data;
		if (!data.data) return "";
		let info_arr = [];
		info_arr.push(<tr><td><b>Tên Khóa học: </b></td><td>{data.data.productname}</td></tr>);
		info_arr.push(<tr><td><b>Mã vé: </b></td><td>{data.data.atickets_code}</td></tr>);
		info_arr.push(
			<tr>
				<td>
					<b>Email người đi học: </b>
				</td>
				<td> 
					<form id="changeStudentForm">
						<div className="form-group">
							<input type="hidden" className="form-control" name="atickcontprodid" value={data.data.atickcontprodid}/>
		  					<input type="text" className="form-control" name="email" defaultValue={data.data.email} onKeyDown={(event) => this.keyDown(event)} onBlur={(event) => {this.props.getContentByParam("checkStudentEmail",event.target.value.trim())}}/>
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
		info_arr.push(<tr><td><b>Tình trạng: </b></td><td>{data.data.atcp_statusatcp_status}</td></tr>);
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
	                <tbody>{this.props.data? this.renderProductInfo() : ""}
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

export default connect(mapStateToProps, mapDispatchToProps)(ATCPEditor);