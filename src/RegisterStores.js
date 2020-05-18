import { combineReducers } from 'redux';
import { createStore } from 'redux';

const reducers = combineReducers({
  //import reducers
});

 const store = createStore(reducers);


export default store;