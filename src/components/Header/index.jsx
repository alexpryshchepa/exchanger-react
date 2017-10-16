import React, { Component } from 'react';
import ReactDom from 'react-dom';
import styles from './header.scss';

export default class Header extends Component {
  render() {
    return ( 
      <header className={styles.root}>
        {this.props.date}
      </header>
    )
  }
}