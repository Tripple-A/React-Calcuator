import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../logic/Calculate';
import './index.css';

class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      typed: '',
      result: null,
    };
    this.checkShow = this.checkShow.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  checkShow(buttonName) {
    let { typed } = this.state;
    if (buttonName === '.' && !typed[-1] !== '.') {
      this.setState({ typed: typed += buttonName });
    } else if (buttonName !== '=' && buttonName !== 'AC' && buttonName !== '.' && buttonName !== '+/-') {
      this.setState({ typed: typed += buttonName });
    } else if (buttonName === 'AC') {
      this.setState({ typed: typed = '' });
    }
  }

  handleClick(buttonName) {
    this.checkShow(buttonName);
    const {
      total, next, operation, result,
    } = Calculate(this.state, buttonName);
    this.setState({ total, next, operation });
    if (result) { this.setState({ result }); }
  }


  render() {
    const { result, typed } = this.state;
    return (
      <div id="App-div">
        <Display result={result} typed={typed} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default Check;
