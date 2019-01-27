import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/svg/logo.svg';
import './App.css';
import { getPortfolioThunk } from '../services/state/actions/portfolio.action';
import Portfolio from './portfolio/Portfolio'

class App extends Component {

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
const mapStateToProps = state => ({
  portfolio: state.portfolio
});

const mapDispatch = dispatch => {
  dispatch(getPortfolioThunk());
  return {}
};

export default connect(mapStateToProps, mapDispatch)(App);

