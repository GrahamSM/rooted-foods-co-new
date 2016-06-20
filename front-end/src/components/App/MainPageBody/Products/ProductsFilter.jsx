import React, {Component} from 'react';
import styles from './products_filter.scss';

export default class ProductsFilter extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <div className="products-filter">
          <button className='category-filter meat'>Meat</button>
          <button className='category-filter produce'>Produce</button>
          <button className='category-filter grains'>Grains</button>
          <button className='category-filter dairy'>Eggs & Dairy</button>
        </div>
      );
    }
}
