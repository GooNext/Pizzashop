import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Routes/>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
