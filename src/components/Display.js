import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result, typed } = props;
  return (
    <div id="Display-div">
      <h3>
        {typed}
      </h3>
      <h2>
        {result}
      </h2>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
  typed: PropTypes.string.isRequired,
};
Display.defaultProps = {
  result: '0',
};

export default Display;
