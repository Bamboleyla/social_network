import './index.css';
import store from "./redux/redux-store";
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(< BrowserRouter >
    <Provider store={store} >
        <App />
    </Provider>
</BrowserRouter >);