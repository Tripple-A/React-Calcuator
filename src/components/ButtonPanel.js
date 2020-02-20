import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


const ButtonPanel = props => {
  const { clickHandler } = props;
  const items1 = ['AC', '+/-', '%'].map(item => <Button key={item} name={item} color="rgb(240, 241, 243)" clickHandler={clickHandler} />);
  const items2 = ['7', '8', '9'].map(item => <Button key={item} name={item} color="rgb(240, 241, 243)" clickHandler={clickHandler} />);
  const items3 = ['4', '5', '6'].map(item => <Button key={item} name={item} color="rgb(240, 241, 243)" clickHandler={clickHandler} />);
  const items4 = ['1', '2', '3'].map(item => <Button key={item} name={item} color="rgb(240, 241, 243)" clickHandler={clickHandler} />);
  const show = true;
  return (
    <div>
      <div className="group1">
        {items1}
        <Button name="÷" clickHandler={clickHandler} />
      </div>
      <div className="group1">
        {items2}
        <Button name="X" clickHandler={clickHandler} />
      </div>
      <div className="group1">
        {items3}
        <Button name="-" clickHandler={clickHandler} />
      </div>
      <div className="group1">
        {items4}
        <Button name="+" clickHandler={clickHandler} />
      </div>
      <div className="group1">
        <Button name="0" wide={show} color="rgb(240, 241, 243)" clickHandler={clickHandler} />
        <Button name="." color="rgb(240, 241, 243)" clickHandler={clickHandler} />
        <Button name="=" clickHandler={clickHandler} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
export default ButtonPanel;
