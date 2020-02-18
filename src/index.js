import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const App = props => {
  const styling = { color: 'coral', textAlign: 'center' };
  App.propTypes = {
    name: PropTypes.string.isRequired,
  };
  const { name } = props;
  return (
    <div style={styling}>
      <h1>
        Testing the Deployment of this New React App to
        {name}
      </h1>
    </div>
  );
};


ReactDOM.render(<App name="Heroku" />, document.getElementById('root'))