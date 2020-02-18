import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  Button.propTypes = {
    name: PropTypes.string.isRequired,
  };
  return (
    <h2>
      {name}
    </h2>
  );
};

export default Button;
