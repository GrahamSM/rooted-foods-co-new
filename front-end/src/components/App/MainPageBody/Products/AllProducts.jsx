import React, {Component} from 'react';
import styles from './all_products.scss';
import Reqwest from 'reqwest';
import IndividualProduct from './IndividualProduct.jsx'
import ProductsFilter from './ProductsFilter.jsx'


export default class AllProducts extends React.Component {
    constructor() {
      super();
      this.state = {loading: true, count: 0}
    }

    componentWillMount = () =>{
      Reqwest({
          url: "http://localhost:3000/products",
          type: 'json',
          method: 'get',
          contentType: 'application/json',
          headers: new Headers()
      }).then(products => {
        this.setState({products})
        this.setState({loading: false})
      }).catch((error) => {
          alert(error.message);
      })
    }

    displayAllProducts = () =>{
      let all_products = []
      for (var i = 0; i<this.state.products.length; i++){
        all_products.push(<IndividualProduct product_id={this.state.products[i].id} title={this.state.products[i].name} description={this.state.products[i].description} image={this.state.products[i].images} price={this.state.products[i].price} count={this.state.count}/>)
      }
      return all_products
    }

    render() {
      return (
        <div className="products-container">
          <ProductsFilter />
          <div className="list">
            {!this.state.loading && this.displayAllProducts()}
          </div>
        </div>
      );
    }
}
