import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';

// CSS files are referenced here but not directly used in this code
// Webpack (magic) sees that we import the css file and takes care
// of bringing it into the html for us! Webpack is magic.
import './index.css';


// // Mount a true react component using JSX Syntax:
ReactDOM.render(<App />, document.getElementById('root'));