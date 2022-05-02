import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "./authReducer";
import { dialogsPageReducer } from "./dialogsPageReducer";
import { postPageReducer } from "./postPageReducer";
import { usersPageReducer } from "./usersPageReducer";
import thunkMiddleware from "redux-thunk";

let rootReducer = combineReducers({
  postsPage: postPageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  //Добавляем FormReducer в state приложения, очень важно что бы он был добавлен под значением form: , так как redux-form будет его искать в state именно
  //под этим названием, есть конечно вариант добавить под другим значением, но здесь нужно будет заморочится и искать в документации как это сделать
});

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;

// Напишим дженерик, который будет сам получать типы из переданных ему actions в методах объектов
type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActyonsType<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>;

// подключаем Redux DevTools
//1 Если приложение будет открыто в браузере где нет расширения Redux DevTools, тогда вместо window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ вызовется compose
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//2 создаем Store и оборачиваем его дополнительной функцией composeEnhancers

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

/***********************************************************************************/
/*************** Если нужно использовать redux без Redux DevTools ******************/
//let store = createStore(reducers, applyMiddleware(thunkMiddleware));
/***********************************************************************************/

//Что бы достучаться к store из консоли
//@ts-ignore
window.store = store;

export default store;
