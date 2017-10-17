import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './header.scss';

export default function Header (props) {
  return ( 
    <header className={styles.root}>
      {props.date}
    </header>
  )
}

Header.propTypes = {
  date: PropTypes.string,
}