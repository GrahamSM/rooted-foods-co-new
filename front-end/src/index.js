import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Header from './components/App/Header/Header.jsx';
import Layout from './components/App.jsx';
import MainTitle from './components/App/Header/MainTitle.jsx';
import HeaderBtn from './components/App/Header/HeaderBtn.jsx';
import SignUpForm from './components/App/SignUpForm/SignUp.jsx';
import MainBanner from './components/App/MainBanner/MainBanner.jsx';



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={MainBanner}></IndexRoute>
      <Route path="/login" component={SignUpForm}></Route>
    </Route>
  </Router>,
  document.getElementById('app'));
