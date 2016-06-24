import React, { Component } from 'react';
import styles from './order_history_container.scss';
import OrderHistoryItem from './OrderHistoryItem.jsx';
var Reqwest = require('reqwest');
export default class OrderHistoryContainer extends React.Component{

  constructor() {
      super();
  };

  render(){
    return(
      <div className='order-history-container'>
        <ul className='order-history-items'>
          {this.generateOrderHistoryItems()}
        </ul>
      </div>
    )
  }

  generateOrderHistoryItems = () =>{
    let order_history_items = []
    let order = this.props.order
    let order_items = order.order_items
    for (var i = 0; i < order_items.length; i++){
      let bundle = false
      let name = null
      let price = null
      let description = null
      let created_at = order_items[i].created_at
      let item_id = this.getItemId(order_items[i])
      let image = null
      if (this.isBundle(order_items[i])){
        bundle = true
        name = "Bundle"
        price = order_items[i].bundle.price
        description = order_items[i].bundle.description
        image = order_items[i].bundle.image
      }else{
        name = order_items[i].product.name
        price = order_items[i].product.price
        description = order_items[i].product.description
        image = order_items[i].product.images
      }
      order_history_items.push(<OrderHistoryItem created_at={created_at} name={name} price={price} isBundle={bundle} item_id={item_id} description={description} image={image} key={order_items[i].id}/>)
    }
    return order_history_items
  }


  isBundle(item){
    return !(item.product_id)
  }

  getItemId(item){
    return item.product_id || item.bundle_id
  }

}
