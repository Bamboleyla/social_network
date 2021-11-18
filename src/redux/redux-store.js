import { createStore, combineReducers } from 'redux';
import { dialogsPageReducer } from './dialogsPageReducer';
import { postPageReducer } from './postPageReducer';
import { usersPageReducer } from './usersPageReducer';

let reducers = combineReducers({
    postsPage: postPageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer
})
let store = createStore(reducers);

export default store;