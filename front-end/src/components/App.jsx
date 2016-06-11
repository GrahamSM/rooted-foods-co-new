import React, { Component } from 'react';
import Header from './App/Header/Header.jsx';
export default class Layout extends React.Component{

  render(){
    return(
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
