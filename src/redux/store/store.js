import { createStore } from 'redux';

import rootReducer from '../reducers/rootRreducer';

const store = createStore(rootReducer);
export default store;
