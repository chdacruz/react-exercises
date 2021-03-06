import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //Importing bootstrap (Reactstrap and react-popper)
import './index.css'; //CSS must be imported later so they can overrun bootstrap
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);