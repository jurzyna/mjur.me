import { combineReducers } from 'redux';
import PortfolioReducer from './portfolio.reducer';

const rootReducer = combineReducers({
  Portfolio: PortfolioReducer,
  AboutMe: "Some Description"
});

export default rootReducer;

// good example https://codesandbox.io/s/j3378m4v3y
