import React, {Component} from 'react';
import styles from './footer.scss';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className = 'footer'>
            <em>Rooted Foods Co. </em>
            <em>2016</em>
          </div>
        );
    };
}
