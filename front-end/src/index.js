import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';
import Header from './components/App/Header/Header.jsx';
import Layout from './components/App.jsx';
import MainTitle from './components/App/Header/MainTitle.jsx';
import HeaderBtn from './components/App/Header/HeaderBtn.jsx';
import SignUpForm from './components/App/Forms/SignUp.jsx';
import LogInForm from './components/App/Forms/LogIn.jsx';
import MainBody from './components/App/MainPageBody/MainPageBody.jsx';
import ViewCart from './components/App/Cart/ViewCart.jsx';
import PaymentProcessing from './components/App/Cart/PaymentProcessing/PaymentProcessing.jsx';
import Products from './components/App/MainPageBody/Products/AllProducts.jsx';
import ProfilePage from './components/App/ProfilePage/ProfilePage.jsx'



ReactDOM.render(
  <Router history = {browserHistory}>
    <Route path = "/" component = { Layout }>
      <IndexRoute component = { MainBody } ></IndexRoute>
      <Route path = "/signup" component = { SignUpForm } ></Route>
      <Route path = "/login" component = { LogInForm } ></Route>
      <Route path = "/view-cart" component = {ViewCart} ></Route>
      <Route path = "/checkout" component = {PaymentProcessing}></Route>
      <Route path = "/products" component = {Products}></Route>
      <Route path = "/profile" component = {ProfilePage}></Route>
    </Route>
  </Router>, document.getElementById('app'));
