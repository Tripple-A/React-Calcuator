import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const items1 = ['AC', '+/-', '%'].map(item => <Button key={item} name={item} color="rgb(240, 241, 243)" />);
  const items2 = ['7', '8', '9'].map(item => <Button key={item} name={item} color="rgb(240, 241, 243)" />);
  const items3 = ['4', '5', '6'].map(item => <Button key={item} name={item} color="rgb(240, 241, 243)" />);
  const items4 = ['1', '2', '3'].map(item => <Button key={item} name={item} color="rgb(240, 241, 243)" />);
  const show = true
  return (
    <div>
      <div className="group1">
        {items1}
        <Button name="÷" />
      </div>
      <div className="group1">
        {items2}
        <Button name="X" />
      </div>
      <div className="group1">
        {items3}
        <Button name="-" />
      </div>
      <div className="group1">
        {items4}
        <Button name="+" />
      </div>
      <div className="group1">
        <Button name="0" wide={show} color="rgb(240, 241, 243)" />
        <Button name="." color="rgb(240, 241, 243)" />
        <Button name="=" />
      </div>
    </div>
  );
};

export default ButtonPanel;
