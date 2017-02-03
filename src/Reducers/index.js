import { combineReducers } from 'redux'; 
import BooksReducer from './reducer_books.js';
import SidemenuReducer from './reducer_sidemenu.js';
import DatatableReducer from './reducer_datatable.js';
import FaqReducer from './reducer_faq.js';
import AddTicketReducer from './reducer_addticket.js';
import TicketReducer from './reducer_ticket.js';
import ContactReducer from './reducer_contact.js';
import TicketPickerReducer from './reducer_ticketpicker.js';
import ATickConProdReducer from './reducer_atickconprod.js';
import SumTableReducer from './reducer_sumtable.js';
import ModalReducer from './reducer_modal.js';
import PostLoaderReducer from './reducer_postloader.js';
import { reducer as awaitReducer } from 'redux-await';
import { reducer as notifications } from 'react-redux-notifications';

const rootReducer = combineReducers({
	book: BooksReducer,
	sidemenu: SidemenuReducer,
	datatable: DatatableReducer,
	faq: FaqReducer,
	addticketdata: AddTicketReducer,
	ticketdata: TicketReducer,
	contactdata: ContactReducer,
	ticketpickerdata: TicketPickerReducer,
	ATCPeditor: ATickConProdReducer,
	await: awaitReducer,
	SumTable: SumTableReducer,
	Modal: ModalReducer,
	PostLoader: PostLoaderReducer,
	notifications
});

export default rootReducer;