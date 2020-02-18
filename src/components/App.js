import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Calculator App</h1>
        <ButtonPanel />
        <Display />
      </div>
    );
  }
}

export default Check;
