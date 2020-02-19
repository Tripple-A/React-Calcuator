import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div>
    <div className="group1">
      <Button name="AC" color="rgb(240, 241, 243)" />
      <Button name="+/-" color="rgb(240, 241, 243)" />
      <Button name="%" color="rgb(240, 241, 243)" />
      <Button name="÷" />
    </div>
    <div className="group1">
      <Button name="7" color="rgb(240, 241, 243)" />
      <Button name="8" color="rgb(240, 241, 243)" />
      <Button name="9" color="rgb(240, 241, 243)" />
      <Button name="X" />
    </div>
    <div className="group1">
      <Button name="4" color="rgb(240, 241, 243)" />
      <Button name="5" color="rgb(240, 241, 243)" />
      <Button name="6" color="rgb(240, 241, 243)" />
      <Button name="-" />
    </div>
    <div className="group1">
      <Button name="1" color="rgb(240, 241, 243)" />
      <Button name="2" color="rgb(240, 241, 243)" />
      <Button name="3" color="rgb(240, 241, 243)" />
      <Button name="+" />
    </div>
    <div className="group1">
      <Button name="0" wide="true" color="rgb(240, 241, 243)" />
      <Button name="." color="rgb(240, 241, 243)" />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
