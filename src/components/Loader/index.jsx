import React from 'react';
import styles from './loader.scss';

export default function Loader (props) {
  return ( 
    <div className={styles.root}>
      <div className={styles.loader}>
        <div></div>
      </div>
    </div>
  )
}