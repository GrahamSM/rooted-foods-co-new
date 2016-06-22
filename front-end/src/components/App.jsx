import React, { Component } from 'react';
import Header from './App/Header/Header.jsx';
import Footer from './App/Footer/Footer.jsx';
export default class Layout extends React.Component{

  render(){
    return(
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
