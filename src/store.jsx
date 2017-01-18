import logger from 'redux-logger';
import reducer from './Reducers/index.js';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { createStore, applyMiddleware } from 'redux';
import { middleware as awaitMiddleware } from 'redux-await';
import { middleware as NotificationMiddleware } from 'react-redux-notifications';


const preloadedState = window.__PRELOADED_STATE__;
const store = applyMiddleware(promise(), thunk, logger(), awaitMiddleware, NotificationMiddleware)(createStore)(reducer,preloadedState);
export default store;