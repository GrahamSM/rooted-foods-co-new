import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Header from './components/App/Header/Header.jsx';
import Layout from './components/App.jsx';
import MainTitle from './components/App/Header/MainTitle.jsx';
import HeaderBtn from './components/App/Header/HeaderBtn.jsx';
import SignUpForm from './components/App/SignUpForm/SignUp.jsx';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="/login" component={SignUpForm}></Route>
    </Route>
  </Router>,
  document.getElementById('app'));
