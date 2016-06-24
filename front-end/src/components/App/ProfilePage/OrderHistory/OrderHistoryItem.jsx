import React, { Component } from 'react';
import styles from './order_history_item.scss';
export default class OrderHistoryItem extends React.Component{

  render(){
    return(
      <li className='order-history-item'>
        <div className='item-header'>
          <div className='order-time'>
            <label>Order Placed</label>
            <label>{this.props.created_at}</label>
          </div>
          <div className='order-price'>
            <label>Cost</label>
            <label>{this.props.price}</label>
          </div>
        </div>
        <div className='item-body'>
          <div className='item-image'>
            <img src={this.props.image} height='75' width='75'></img>
          </div>
          <div className='item-information'>
            <p>
              {this.props.name}
            </p>
            <p>
              {this.props.description}
            </p>
          </div>
        </div>
      </li>
    )
  }

// order_history_items.push(<OrderHistoryItem created_at={created_at} name={name} price={price} isBundle={bundle} item_id={item_id} description={description} key={order_items.id}/>)


}
