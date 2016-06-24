import React, { Component } from 'react';
import styles from './profile_page.scss';
import FilterBtn from './FilterBtn/FilterBtn.jsx';
import OrderHistoryContainer from './OrderHistory/OrderHistoryContainer.jsx';
var Reqwest = require('reqwest');
export default class ProfilePage extends React.Component{

  constructor() {
      super();
      this.state = {display_order_history: false, favourite: false}
  };

  render(){
    // TODO: Give each FilterBtn a click handler that renders relevant data
    return(
      <div className='wrapper'>
        <div className='filter-btn-container'>
          <FilterBtn className="test-btn" label="Favourites" clickHandler={this.getFavourites}/>
          <FilterBtn className="test-btn" label="Order History" clickHandler={this.renderOrderHistory}/>
        </div>
        <div className='account-page-container'>
          <div className='account-page-col-1'>
            {this.state.display_order_history && this.state.order_history}
          </div>
          <div className='account-page-col-2'>
          </div>
        </div>
      </div>
    )
  }

  renderOrderHistory = () =>{
    this.getOrderHistory();
  }

  getOrderHistory = () =>{
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
      this.generateOrderHistory(response)
    }).catch((error) => {
        alert(error.message);
    })
  }

  generateOrderHistory = (orders) =>{
    let order_history = []
    for (var i = 0; i < orders.length; i++){
      let current_order = orders[i]
      order_history.push(<OrderHistoryContainer order={orders[i]} key={orders[i].id}/>)
    }
    this.setState({order_history: order_history})
    this.setState({display_order_history: true})
  }


  _getFavourites = () =>{

  }

}
