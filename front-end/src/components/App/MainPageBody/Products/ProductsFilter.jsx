import React, {Component} from 'react';
import styles from './products_filter.scss';

export default class ProductsFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <button className={this.props.className} onClick={ () => { this.props.filterProducts(this.props.category_id)}}>{this.props.title}</button>
    );
  }
}
