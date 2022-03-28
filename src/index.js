import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/startPage/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HallWayContainer } from './components/HallWay/HallWayContainer';

ReactDOM.render(< React.StrictMode >
    < BrowserRouter >
        <Provider store={store} >
            <HallWayContainer />
            { /* <App /> */}
        </Provider>
    </BrowserRouter >
</React.StrictMode >,
    document.getElementById('root')
);

reportWebVitals();