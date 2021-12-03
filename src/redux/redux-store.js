import { createStore, combineReducers, applyMiddleware } from 'redux';
import { authReducer } from './authReducer';
import { dialogsPageReducer } from './dialogsPageReducer';
import { postPageReducer } from './postPageReducer';
import { usersPageReducer } from './usersPageReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    postsPage: postPageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;