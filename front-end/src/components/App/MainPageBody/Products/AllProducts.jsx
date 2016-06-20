import React, {Component} from 'react';
import styles from './all_products.scss';
import Reqwest from 'reqwest';
import IndividualProduct from './IndividualProduct.jsx'
import ProductsFilter from './ProductsFilter.jsx'


export default class AllProducts extends React.Component {
    constructor() {
      super();
      this.state = {loading: true, count: 0, filter_by: null}
    }

    render() {
      return (
        <div className="products-container">
          <div className="products-filter">
            <ProductsFilter className='category-filter meat' title="Meat" category_id="1" filterProducts={this._filterProducts} />
            <ProductsFilter className='category-filter produce' title="Produce" category_id="2" filterProducts={this._filterProducts} />
            <ProductsFilter className='category-filter grains' title="Grains" category_id="3" filterProducts={this._filterProducts} />
          </div>
          <div className="list">
            {!this.state.loading && this.displayAllProducts()}
          </div>
        </div>
      );
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
        this.setState({categories: [1,2,3,4]})
        this.setState({loading: false})
      }).catch((error) => {
          alert(error.message);
      })
    }

    displayAllProducts = () =>{
      let all_products = []
      for (var i = 0; i<this.state.products.length; i++){
        if (this.state.filter_by === null){
          all_products.push(<IndividualProduct product_id={this.state.products[i].id} title={this.state.products[i].name} description={this.state.products[i].description} image={this.state.products[i].images} price={this.state.products[i].price} count={this.state.count} category_id={this.state.products[i].category_id} />)
        }else if (this.state.products[i].category_id === this.state.filter_by){
          all_products.push(<IndividualProduct product_id={this.state.products[i].id} title={this.state.products[i].name} description={this.state.products[i].description} image={this.state.products[i].images} price={this.state.products[i].price} count={this.state.count} category_id={this.state.products[i].category_id} />)
        }
      }
      return all_products
    }

    _filterProducts = (category_id) =>{
      if (this.state.filter_by === parseInt(category_id)){
        this.setState({filter_by: null}) //Display all products
        $('.category-filter').css('background-color', 'white');
      }else{
        $('.category-filter').css('background-color', 'white');
        this.setState({filter_by: parseInt(category_id)}) //Filter by the passed in category_id
        if (category_id === "1"){
          $('.meat').css('background-color', '#c0392b');
        }else if (category_id === "2"){
          $('.produce').css('background-color', '#27ae60');
        }else{
          $('.grains').css('background-color', '#E87E04');
        }
      }
    }
}
