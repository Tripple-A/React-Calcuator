import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  return (
    <h2>
      {name}
    </h2>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
