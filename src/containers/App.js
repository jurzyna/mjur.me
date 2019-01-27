import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/svg/logo.svg';
import './App.css';
import { fetchPortfolio } from '../services/state/actions/portfolio.action';
import Portfolio from './portfolio/Portfolio'

class App extends Component {
  state = {
    portfolio: {}
  };

  componentDidMount() {
    this.props.dispatch(fetchPortfolio());
  }
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

function mapStateToProps(state) {
  return {
    portfolio: state.portfolio
  }
}

export default connect(mapStateToProps)(App);
