import React, { Component } from 'react';
import styles from './order_history_container.scss';
import OrderHistoryItem from './OrderHistoryItem.jsx'
export default class OrderHistoryContainer extends React.Component{

  render(){
    return(
      <div className='order-history-container'>
        <ul className='order-history-items'>
          {/*<OrderHistoryItem />*/}
        </ul>
      </div>
    )
  }
}
