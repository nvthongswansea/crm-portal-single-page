import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavHeader from './NavComponents/Navheader.jsx';
import NavSideBar from '../Containers/Navsidebar.jsx';
import NavTopRight from './NavComponents/Navtopright.jsx';

export default class NavBar extends Component {
	render() {
		return (
			<div className="navbar navbar-default navbar-static-top" role="navigation" > 
				<NavHeader/>
				<NavSideBar/>
				<NavTopRight/>
			</div>
			);
	}
}