import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import { Provider } from 'react-redux';
import store from './redux/store';
import smoothscroll from 'smoothscroll-polyfill';
import App from './public/App';

smoothscroll.polyfill();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);