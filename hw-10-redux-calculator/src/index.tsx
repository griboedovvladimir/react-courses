import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import {combineReducers,createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import * as reducers from './reducers/reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer({name:'calculator'}));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
