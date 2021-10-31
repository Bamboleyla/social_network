import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/startPage/App';
import { BrowserRouter } from 'react-router-dom';

let reset = (state, addPost, addMessage) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} addMessage={addMessage} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

export default reset;