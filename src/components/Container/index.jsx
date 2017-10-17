import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './container.scss';

import CurrencyList from 'components/CurrencyList';

export default function Container (props) {
  return ( 
    <div className={styles.root}>
      <div className={styles.content}>
        {props.children}
      </div>
      {
        props.currencyListVisibility 
          ? <CurrencyList 
              currencies={props.currencies}
              changeCurrency={props.changeCurrency} />
          : false
      }
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.element,
  currencyListVisibility: PropTypes.bool,
}