import React, {Component} from 'react';
import styles from './featured_product_container.scss';
import FeaturedProductDisplay from './FeaturedProductDisplay/FeaturedProductDisplay.jsx';
import Reqwest from 'reqwest';


export default class FeaturedProductContainer extends React.Component {
  constructor(props) {
      super(props)
  }

  componentWillMount = () => {
    this.setState({loading: true})
    this.props.getTopProducts()
    .then((response) => {
      let top_products = []
      for (var i = 0; i < response.length; i++){
        let single_bundle = {id: response[i].id, bundle_description: response[i].description, bundle_name: "Some Name", products: response[i].products, image: response[i].image, price: response[i].price};
        top_products.push(single_bundle)
      }
      this.setState({top_products, loading: false})
    })
    .catch((error) => {
      alert(error.message);
    })
  }

  _setProductsComp(){
    if(this.state.loading){

    }else{
      return this.state.top_products.map(
        ({id, bundle_description, bundle_name, products, image, price}) => <FeaturedProductDisplay {...{id, bundle_description, bundle_name, products, image, price}} key={price} addToCart={this.props.addToCart} />
      )
    }
  }

  render() {
    return (
      <div className='featured_product_container'>
          {this._setProductsComp()}
      </div>
    );
  }
}
