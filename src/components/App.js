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
      result: null
    };
  }

    checkShow = (buttonName) => {
      let {typed} = this.state;
      if (buttonName === '.' && !this.state.typed[-1] !== '.') {
        this.setState({typed: typed += buttonName})
      }
      else if (buttonName !== '=' && buttonName !== 'AC' && buttonName !== '.' && buttonName !== '+/-') {
      this.setState({typed: typed += buttonName})
      }
      else if (buttonName === 'AC') {
        this.setState({typed: typed = ''})
      }
     
    }

    handleClick = (buttonName) => {
    this.checkShow(buttonName)
    let { total, next, operation, result } = Calculate(this.state, buttonName)
    this.setState({total, next, operation})
    if (result) { this.setState({result}); }
    
  }


  render() {
    return (
      <div id="App-div">
        <Display result = {this.state.result} typed= {this.state.typed} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default Check;
