import './index.css';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state.js"
import { addPost, addMessage } from "./redux/state.js";
import reset from './reset';

reset(state, addPost, addMessage);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
