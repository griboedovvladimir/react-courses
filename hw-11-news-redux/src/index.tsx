import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
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
serviceWorker.unregister();
