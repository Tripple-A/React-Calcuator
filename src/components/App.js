import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import './index.css';

class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="App-div">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default Check;
