import React, {Component} from 'react';
import styles from './individual_product.scss';

export default class IndividualProduct extends React.Component {
    constructor() {
      super();
    }
    render() {
      return (
        <article className="list--item">
          <figure>
            <img src={this.props.image} alt=""></img>
            <header>
            <div className="floater">
            </div>
              <h2>{this.props.title}</h2>
            </header>
            <figcaption>
              {this.props.description}
            </figcaption>
          </figure>
        </article>
      );
    }
}
