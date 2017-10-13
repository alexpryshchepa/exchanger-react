import React from 'react';
import ReactDom from 'react-dom';
import styles from './header.scss';

export default class Header extends React.Component {
  render() {
    return ( 
      <header className={styles.root}>
        <h2>Header</h2>
        <span>Subtitle here</span>
      </header>
    )
  }
}