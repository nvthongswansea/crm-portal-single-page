import { combineReducers } from 'redux'; 
import SidemenuReducer from './reducer_sidemenu.jsx';
import DatatableReducer from './reducer_datatable.jsx';
import FaqReducer from './reducer_faq.jsx';
import AddTicketReducer from './reducer_addticket.jsx';
import TicketReducer from './reducer_ticket.jsx';
import ContactReducer from './reducer_contact.jsx';
import TicketPickerReducer from './reducer_ticketpicker.jsx';
import StudentTransferReducer from './reducer_studentTransfer.jsx';
import SumTableReducer from './reducer_sumtable.jsx';
import ModalReducer from './reducer_modal.jsx';
import PostLoaderReducer from './reducer_postloader.jsx';
import { reducer as awaitReducer } from 'redux-await';
import { reducer as notifications } from 'react-redux-notifications';

const rootReducer = combineReducers({
	sidemenu: SidemenuReducer,
	datatable: DatatableReducer,
	faq: FaqReducer,
	addticketdata: AddTicketReducer,
	ticketdata: TicketReducer,
	contactdata: ContactReducer,
	ticketpickerdata: TicketPickerReducer,
	StudentTransfer: StudentTransferReducer,
	await: awaitReducer,
	SumTable: SumTableReducer,
	Modal: ModalReducer,
	PostLoader: PostLoaderReducer,
	notifications
});

export default rootReducer;