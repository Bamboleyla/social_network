import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state.js";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/startPage/App';
import { BrowserRouter } from 'react-router-dom';


let reset = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

reset(store.getState());
store.subscribe(reset);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
