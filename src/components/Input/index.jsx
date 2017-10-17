import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './input.scss';

export default function Input (props) {
  return ( 
    <div className={styles.root}>
      <input 
        className={styles.input} 
        type='number'
        value={props.value}
        onChange={props.onChange}
        readOnly={props.readonly ? true : false} />
      <button 
        className={styles.button}
        onClick={props.openCurrencyList}
        >{props.currency}</button>
    </div>
  )
}

Input.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  readonly: PropTypes.bool,
  openCurrencyList: PropTypes.func,
}