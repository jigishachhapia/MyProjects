import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App";
import reducers from "./reducers";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
ReactDOM.render( 
    <Provider store={createStore(reducers,applyMiddleware(thunk))}>
        <App/>
    </Provider>,
    document.querySelector("#root")
);