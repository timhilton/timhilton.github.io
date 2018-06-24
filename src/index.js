import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//bootstrap dependencies
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.css"

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
