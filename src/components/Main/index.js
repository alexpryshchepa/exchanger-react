import React from 'react';
import ReactDom from 'react-dom';
import Input from 'components/Input';
import styles from './main.scss';

export default class Main extends React.Component {
  render() {
    return ( 
      <main className={styles.root}>
        {this.props.children}
      </main>
    )
  }
}