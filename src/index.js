import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

ReactDOM.render(< React.StrictMode >
    < BrowserRouter >
        <Provider store={store} >
            <App />
        </Provider>
    </BrowserRouter >
</React.StrictMode >,
    document.getElementById('root')
);

reportWebVitals();