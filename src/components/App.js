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
    };
  }

    checkShow = (buttonName) => {
      if (buttonName == '.' && !this.state.typed[-1] != '.') {
        this.setState({typed: this.state.typed += buttonName})
      }
      else if (buttonName != '=' && buttonName != 'AC' && buttonName != '.' && buttonName != '+/-') {
      this.setState({typed: this.state.typed += buttonName})
      }
      else if (buttonName == 'AC') {
        this.setState({typed: this.state.typed = ''})
      }
     
    }

    handleClick = (buttonName) => {
    this.checkShow(buttonName)
    let { total, next, operation } = Calculate(this.state, buttonName)
    this.setState({total, next, operation})
  }


  render() {
    return (
      <div id="App-div">
        <Display result = {this.state.total} typed= {this.state.typed} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default Check;
