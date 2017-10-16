import React, { Component } from 'react';
import ReactDom from 'react-dom';
import styles from './currencyList.scss';

export default class CurrencyList extends Component {
  render() {
    return ( 
      <div className={styles.root}>
        {
          this.props.currencies.map((item, index) => {
            return (
              <button className={styles.item} key={index}>
                {item}
              </button>
            )
          })
        }
      </div>
    )
  }
}