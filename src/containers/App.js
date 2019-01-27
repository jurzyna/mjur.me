import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/svg/logo.svg';
import './App.css';
import { fetchPortfolio, getPortfolioThunk } from '../services/state/actions/portfolio.action';
import Portfolio from './portfolio/Portfolio'

class App extends Component {

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Portfolio portfolio={this.props.portfolio} />
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => {
 console.log(state);
  return {
    portfolio: state.portfolio
  };
};

const mapDispatch = dispatch => {
  dispatch(getPortfolioThunk());
  return {}
};

export default connect(mapStateToProps, mapDispatch)(App);

