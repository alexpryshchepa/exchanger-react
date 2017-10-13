import React from 'react';
import ReactDom from 'react-dom';
import styles from './input.scss';

export default class Main extends React.Component {
  render() {
    return ( 
      <div className={styles.root}>
        <label className={styles.label}>
          {this.props.currency}
          <input 
            className={styles.input} 
            type='text' 
            onFocus={this.props.focus}
            onKeyUp={this.props.onKeyUp}
            placeholder={this.props.placeholder}
            value={this.props.value}
            readOnly={this.props.readonly ? true : false} />
        </label>
      </div>
    )
  }
}