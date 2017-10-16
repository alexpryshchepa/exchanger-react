import React, { Component } from 'react';
import ReactDom from 'react-dom';
import styles from './loader.scss';

export default class Loader extends Component {
  render() {
    return ( 
      <div className={styles.root}>
        <div className={styles.loader}>
          <div></div>
        </div>
      </div>
    )
  }
}