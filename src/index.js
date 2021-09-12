import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import Details from './screens/details/Details';
import Home from "./screens/home/Home";
import BookShow from "./screens/bookshow/BookShow";


ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/details/:id" component={Details}></Route>
    <Route exacat path="/bookShow" component={BookShow}></Route>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
