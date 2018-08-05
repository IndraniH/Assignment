import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import empDetailsReducer from './reducers/empDetailsReducer';

export default createStore(empDetailsReducer, applyMiddleware(thunk, logger));