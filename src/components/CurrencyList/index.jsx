import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './currencyList.scss';

export default function CurrencyList (props) {
  return ( 
    <div className={styles.root}>
      {
        props.currencies.map((item, index) => {
          return (
            <button
              className={styles.item}
              key={index}
              onClick={props.changeCurrency}
              data-meaning={props.currencyListMeaning} >
              {item}
            </button>
          )
        })
      }
    </div>
  )
}

CurrencyList.propTypes = {
  currencies: PropTypes.array,
}