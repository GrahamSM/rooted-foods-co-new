import React, {Component} from 'react';
import styles from './featured_product_container.scss';
import FeaturedProductDisplay from './FeaturedProductDisplay.jsx';
import Reqwest from 'reqwest';



export default class FeaturedProductContainer extends React.Component {
  constructor(props) {
      super(props)
      this.state = {top_products: []}
  }

    componentDidMount = () => {
      this.props.getTopProducts()
      .then((response) => {
        let top_products = []
        for (var i = 0; i < response.length; i++){
          let single_bundle = {bundle_description: response[i].description, bundle_name: "Some Name", products: response[i].products, image: response[i].image, price: response[i].price};
          top_products.push(single_bundle)
        }
        this.setState({top_products})
      })
    .catch((error) => {
      alert(error.message);
    })
  }


  // {getTopProducts};
  ///parse appropriately
  ///TODO: Retrieve products with parent function _getTopProducts
  // {/*render the four top products returned by the reqwest call (getTopProducts)*/}
  // {/*this consists of rendering four FeaturedProductDisplay components with the appropriate properties*/}
  // {/*something like: top_products_parsed = top_products.map... => <FeaturedProductDisplay ...props.../>*/}

  render() {
      return (
          <div className='featured_product_container'>
              {this._getTopProducts}
              {/*top_products_parsed*/}
          </div>
      );
  }
}
