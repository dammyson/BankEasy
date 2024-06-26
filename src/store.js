import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import reducers from './reducers'; //Import the reducer

// Connect our store to the reducers
export default createStore(reducers, applyMiddleware(logger));