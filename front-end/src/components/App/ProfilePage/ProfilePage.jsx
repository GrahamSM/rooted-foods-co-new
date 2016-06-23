import React, { Component } from 'react';
import styles from './profile_page.scss';
import FilterBtn from './FilterBtn/FilterBtn.jsx';
import OrderHistoryContainer from './OrderHistory/OrderHistoryContainer.jsx';
var Reqwest = require('reqwest');
export default class ProfilePage extends React.Component{

  render(){
    // TODO: Give each FilterBtn a click handler that renders relevant data
    return(
      <div className='wrapper'>
        <div className='filter-btn-container'>
          <FilterBtn className="test-btn" label="Favourites" clickHandler={this._getFavourites}/>
          <FilterBtn className="test-btn" label="Order History" clickHandler={this._getOrderHistory}/>
        </div>
        <div className='account-page-container'>
          <div className='account-page-col-1'>
          </div>
          <div className='account-page-col-2'>
          </div>
        </div>
      </div>
    )
  }

  _getOrderHistory = () =>{
    let token = localStorage.access_token
    Reqwest({
        url: "http://localhost:3000/orders",
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        headers: {
            'X-ACCESS-TOKEN': token
        },
    }).then((response) => {
      debugger;
      return response
    }).catch((error) => {
        alert(error.message);
    })
  }

  _getFavourites = () =>{

  }
}
