import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, color, wide, clickHandler,
}) => {
  const show = e => {
    e.preventDefault();
    clickHandler(name);
  };
  return (
    <button type="button" className="Btn" style={{ backgroundColor: color, width: wide ? '50%' : null }} onClick={show}>
      {name}
    </button>
  );
};


Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};
export default Button;
