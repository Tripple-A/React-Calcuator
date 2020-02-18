import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  Display.propTypes = {
    result: PropTypes.string,
  };

  Display.defaultProps = {
    result: '0',
  };
  return (
    <h2>
      {result}
    </h2>
  );
};

export default Display;
