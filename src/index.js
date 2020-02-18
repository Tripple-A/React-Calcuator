import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const styling={color:'coral', textAlign:'center'}
    return(
        <div style={styling}>
        <h1 > Testing the Deployment of this New React App to {props.name}</h1>
        </div>
    )
}


ReactDOM.render(<App name="Heroku"/>,document.getElementById('root'))