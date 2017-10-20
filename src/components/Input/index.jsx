import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './input.scss';

export default function Input (props) {
  return ( 
    <div className={styles.root}>
      <input 
        className={styles.input} 
        type='number'
        pattern='[0-9]*'
        value={props.value}
        step='10'
        onChange={props.onChange}
        readOnly={props.readonly ? true : false} />
      <button 
        className={styles.button}
        data-meaning={props.meaning}
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