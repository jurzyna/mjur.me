import React, { Component } from 'react';

class Portfolio extends Component {
  componentDidUpdate() {
    console.log(this.props);
  }
  render() {
    // console.log(this.props.portfolio);
    return (
      <p>Hello</p>
    )
  }
}

export default Portfolio;
