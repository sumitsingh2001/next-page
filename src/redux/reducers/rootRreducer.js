import { combineReducers } from 'redux';

import apiReducer from './apiReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  api: apiReducer,
  count: counterReducer,
});

export default rootReducer;
