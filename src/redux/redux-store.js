import {createStore, combineReducers} from 'redux';
import { dialogsPageReducer } from './dialogsPageReducer.js';
import { postPageReducer } from './postPageReducer.js';

let reducers = combineReducers({
    postsPage:postPageReducer,
    dialogsPage:dialogsPageReducer
})
let store = createStore(reducers);

export default store;