import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './Forms/Loginform.jsx';
import LostpassForm from './Forms/Lostpass.jsx';
export default class FormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogin: true
		};
		this.changeForm = this.changeForm.bind(this);
	}
	changeForm(isLoginPass) {
		this.setState({
      		isLogin: isLoginPass
    	});
  
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div id="formcontainer" className="col-md-4 col-md-offset-4">
						{this.state.isLogin ? <LoginForm onChange={this.changeForm}/> : <LostpassForm onChange={this.changeForm}/>}
					</div>
				</div>
			</div>
		);
	}
}