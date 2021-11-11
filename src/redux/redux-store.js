import {createStore, combineReducers} from 'redux';
import { dialogsPageReducer } from './dialogsPageReducer';
import { postPageReducer } from './postPageReducer';

let reducers = combineReducers({
    postsPage:postPageReducer,
    dialogsPage:dialogsPageReducer
})
let store = createStore(reducers);

export default store;