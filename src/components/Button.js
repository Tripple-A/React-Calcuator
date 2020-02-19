import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => (
  <button type="button" className="Btn" style={{ backgroundColor: color, width: wide ? '50%' : null }}>
    {name}
  </button>
);


Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};
export default Button;
