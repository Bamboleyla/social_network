import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from './authReducer';
import { dialogsPageReducer } from './dialogsPageReducer';
import { postPageReducer } from './postPageReducer';
import { usersPageReducer } from './usersPageReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as FormReducer } from 'redux-form';

let reducers = combineReducers({
    postsPage: postPageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: FormReducer
})

// подключаем Redux DevTools
//1 Если приложение будет открыто в браузере где нет расширения Redux DevTools, тогда вместо window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ вызовется compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//2 создаем Store и оборачиваем его дополнительной функцией composeEnhancers
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));

/***********************************************************************************/
/*************** Если нужно использовать redux без Redux DevTools ******************/
//let store = createStore(reducers, applyMiddleware(thunkMiddleware));
/***********************************************************************************/

//Что бы достучаться к store из консоли
window.store = store;

export default store;