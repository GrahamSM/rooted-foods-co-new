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

  _getUserProducts = () => {
      //TODO: Make reqwest, return JSON with products
      if (localStorage.access_token){
        let token = localStorage.access_token
      return Reqwest({
          url: "http://localhost:3000/users/get_products",
          type: 'json',
          method: 'get',
          contentType: 'application/json',
          headers: {
              'X-ACCESS-TOKEN': token
          },
      }).then(response => {
        return response
        // TODO: Use toaster
      }).catch((error) => {
          alert(error.message);
          // TODO: Use toaster
      })
    }
  }
}
