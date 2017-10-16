import React, { Component } from 'react';
import ReactDom from 'react-dom';
import styles from './input.scss';

export default class Input extends Component {
  render() {
    return ( 
      <div className={styles.root}>
        <input 
          className={styles.input} 
          type='number'
          value={this.props.value}
          onChange={this.props.onChange}
          readOnly={this.props.readonly ? true : false} />
        <button 
          className={styles.button}
          onClick={this.props.selectCurrency}
          >{this.props.currency}</button>
      </div>
    )
  }
}