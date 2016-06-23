import React, { Component } from 'react';
import styles from './order_history_item.scss';
export default class OrderHistoryItem extends React.Component{

  render(){
    return(
      <li className='order-history-item'>
        <div className='item-header'></div>
        <div className='item-body'></div>
      </li>
    )
  }
}
