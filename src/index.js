import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import { BrowserRouter } from "react-router-dom";

import Greatvet from './Greatvet';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';



ReactDOM.render(
  
  <BrowserRouter>
  <Greatvet />
</BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
