import React, {Component} from 'react';
import ReactDOM from 'react-dom';
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.min.js');
require('./sb-admin-2.css');
import store from './store.jsx';
import NavBar from './Components/Navbars.jsx';
import MainContent from './Components/Maincontent.jsx';
import PotentialDetail from './Components/OpportunitiesDetail.jsx'
import Datatable from './Containers/datatable.jsx';
import FAQ from './Containers/FAQ.jsx';
import AddTicket from './Containers/addticket.jsx';
import TicketDetail from './Containers/ticketdetail.jsx';
import ContactDetail from './Containers/contactdetail.jsx';
import TicketPicker from './Containers/aticketpicker.jsx';
import SumTable from './Containers/sumtable.jsx';
import StudentTransfer from './Containers/StudentTransfer.jsx';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, Link, hashHistory } from 'react-router';


class App extends Component  {
	render() {
		return (
		<div id="wrapper">
			<NavBar/>
			{this.props.children}
		</div>
		);
	}
};

class Test extends Component  {
	render() {
		return (
		<div id="page-wrapper">
			<a onClick={() => console.log(store.getState())}><h1>something wrong</h1></a>
		</div>
		);
	}
};

window.onload = () => {
  ReactDOM.render((
  		<Provider store={store}>
  			<Router history={hashHistory}>
        		<Route path="/" component={App}>
        			<IndexRedirect to="/HelpDesk" />
        			<Route path="HelpDesk" component={MainContent} title="Help Desk">
        				<IndexRedirect to="/HelpDesk/main" />
        				<Route path="/HelpDesk/main" component={Datatable} tablename="HelpDesk"/>
        				<Route path="/HelpDesk/add" component={AddTicket}/>
                <Route path="/HelpDesk/ticket/:ticketId" component={TicketDetail}/>
        			</Route>
        			<Route path="Faq" component={MainContent} title="FAQ"> 
        				<IndexRedirect to="/Faq/main" />
        				<Route path="/Faq/main" component={FAQ}/>
        			</Route>
              <Route path="Contacts" component={MainContent} title="Contacts"> 
                <IndexRedirect to="/Contacts/main"/>
                <Route path ="/Contacts/main" component={Datatable} tablename="Contacts"/>
                <Route path="/Contacts/contact/:contactId" component={ContactDetail}/>
              </Route>
              <Route path="Products" component={MainContent} title="Products"> 
                <IndexRedirect to="/Products/main"/>
                <Route path ="/Products/main" component={Datatable} tablename="Products"/>
                <Route path="/Products/register/:productId" component={TicketPicker}/>
              </Route>
              <Route path="ATickets" component={MainContent} title="ATickets"> 
                <IndexRedirect to="/ATickets/main"/>
                <Route path ="/ATickets/main" component={Datatable} tablename="ATickets"/>
              </Route>
              <Route path="ATickConProd" component={MainContent} title="ATickConProd"> 
                <IndexRedirect to="/ATickConProd/main"/>
                <Route path ="/ATickConProd/main" component={Datatable} tablename="ATickConProd"/>
                <Route path="/ATickConProd/edit/:ATickConProdId" component={StudentTransfer} formname="TransferCourse"/>
              </Route>
              <Route path="Opportunities" component={MainContent} title="Opportunities"> 
                <IndexRedirect to="/Opportunities/main"/>
                <Route path ="/Opportunities/main" component={Datatable} tablename="Opportunities"/>
                <Route path="/Opportunities/potential/:potentialid" component={PotentialDetail}>
                  <IndexRedirect to="/Opportunities/potential/:potentialid/PotentialATCP"/>
                  <Route path ="/Opportunities/potential/:potentialid/PotentialATCP" component={{Main: Datatable}} tablename="PotentialATCP"/>
                  <Route path ="/Opportunities/potential/:potentialid/PotentialTrans" component={{Main: Datatable, Tab: SumTable}} tablename="PotentialTrans"/>
                </Route>
              </Route>
              <Route path="AVouchers" component={MainContent} title="AVouchers"> 
                <IndexRedirect to="/AVouchers/main"/>
                <Route path ="/AVouchers/main" component={Datatable} tablename="AVouchers"/>
                <Route path="/AVouchers/edit/:AVouchersId" component={StudentTransfer} formname="TransferVoucher"/>
              </Route>
        		</Route>
        	</Router>
  		</Provider>
  		)
  		
  	, document.getElementById('body'));
};
