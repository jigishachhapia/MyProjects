import React from 'react';
import ReactDOM  from 'react-dom';
import App from "./Components/App";
import {Provider} from 'react-redux'
import { createStore,applyMiddleware } from 'redux';

const store = createStore(()=>[],{},applyMiddleware())

ReactDOM.render(<Provider store={store}><App/></Provider>,document.querySelector("#root"));