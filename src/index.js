import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/startPage/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HallWay } from './components/HallWay/HallWay';

ReactDOM.render(< React.StrictMode >
    < BrowserRouter >
        <Provider store={store} >
            <HallWay />
            { /* <App /> */}
        </Provider>
    </BrowserRouter >
</React.StrictMode >,
    document.getElementById('root')
);

reportWebVitals();