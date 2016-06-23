import React, { Component } from 'react';
import styles from './filter_btn.scss';
export default class FilterBtn extends React.Component{

  render(){
    return(
      <button className={this.props.className} onClick={this.props.clickHandler}>{this.props.label}</button>
    )
  }
}
