import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

class NavSideBar extends Component {
   constructor(props) {
      super(props);
      this.renderList = this.renderList.bind(this);
   }
   renderList() {
      return this.props.menuconponents.map((component) => {
         return (
            <li>
               <Link to={component.url} >{component.title}</Link>
            </li>
            );
      });
   }
	render() {
		return (
      <div className="navbar-default sidebar" role="navigation">
         <div className="sidebar-nav navbar-collapse">
            <ul className="nav" id="side-menu">
               {this.props.menuconponents ? this.renderList() : ""}
            </ul>
         </div>
      </div>
			);
	}
}

function mapStateToProps(state) {
   return {
      menuconponents: state.sidemenu
   };
}


export default connect(mapStateToProps)(NavSideBar);