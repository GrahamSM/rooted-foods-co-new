import React, {Component} from 'react';
import styles from './product_search.scss';

export default class ProductSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className='product-search-form' id="searchbox5" onSubmit={this.props.productSearch}>
        <input id="search52" name="q" type="text" size="10" placeholder="Search..." />
      </form>
    );
  }
}
