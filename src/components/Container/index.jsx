import React, { Component } from 'react';
import ReactDom from 'react-dom';
import styles from './container.scss';

import CurrencyList from 'components/CurrencyList';

export default class Container extends Component {
  render() {
    return ( 
      <div className={styles.root}>
        <div className={styles.content}>
          {this.props.children}
        </div>
        <CurrencyList currencies={this.props.currencies} />
      </div>
    )
  }
}