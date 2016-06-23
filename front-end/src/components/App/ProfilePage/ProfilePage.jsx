import React, { Component } from 'react';
import styles from './profile_page.scss';
import FilterBtn from './FilterBtn/FilterBtn.jsx'
export default class ProfilePage extends React.Component{

  render(){
    // TODO: Give each FilterBtn a click handler that renders relevant data
    return(
      <div className='wrapper'>
        <div className='filter-btn-container'>
          <FilterBtn className="test-btn" label="Favourites"/>
          <FilterBtn className="test-btn" label="Order History"/>
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

  }

  _getFavourites = () =>{

  }
}
