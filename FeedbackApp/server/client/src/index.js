import "materialize-css/dist/css/materialize.min.css"
import React from 'react';
import ReduxThunk from 'redux-thunk';
import ReactDOM  from 'react-dom';
import App from "./Components/App";
import {Provider} from 'react-redux'
import { createStore,applyMiddleware } from 'redux';
import reducers from "./reducers";


const store = createStore(reducers,{},applyMiddleware(ReduxThunk))

ReactDOM.render(<Provider store={store}><App/></Provider>,document.querySelector("#root"));