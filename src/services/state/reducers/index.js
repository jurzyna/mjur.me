import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import PortfolioReducer from './portfolio.reducer';
import thunkMiddleware from 'redux-thunk'
import React from "react";


const rootReducer = combineReducers({
  Portfolio: PortfolioReducer
});

const composeEnhancers = composeWithDevTools({});
export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  )
);
