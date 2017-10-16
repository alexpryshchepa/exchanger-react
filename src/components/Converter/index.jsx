import React, { Component } from 'react';
import ReactDom from 'react-dom';
import styles from './converter.scss';

import Input from 'components/Input';

export default class Converter extends Component {
  render() {
    return ( 
      <main className={styles.root}>
        <Input 
          currency={this.props.currencyBase}
          selectCurrency={this.props.selectCurrency}
          value={this.props.valueBase}
          onChange={this.props.onChange} />
        <button className={styles.button}>
          <svg data-svg='arrows' xmlns="http://www.w3.org/2000/svg" viewBox="255 154 28 28">
            <g transform="translate(312.296 154) rotate(90)">
              <path data-svg-layer='arrow-down' d="M20.391,32.806l1.234,1.217,6.125-6.04a.854.854,0,0,0,0-1.217l-6.125-6.04-1.234,1.225,4.637,4.565H.013v1.726H25.029Z" transform="translate(-0.012 23.273)"/>
              <path data-svg-layer='arrow-up' d="M28,250.516H2.984l4.637-4.565-1.242-1.225-6.125,6.04a.854.854,0,0,0,0,1.217l6.125,6.04,1.234-1.217-4.629-4.565H28Z" transform="translate(0 -215.43)"/>
            </g>
          </svg>
        </button>
        <Input 
          currency={this.props.currency}
          selectCurrency={this.props.selectCurrency}
          value={this.props.value}
          readonly />
      </main>
    )
  }
}