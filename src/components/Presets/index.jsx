import React from 'react';
import PropTypes from 'prop-types';
import styles from './presets.scss';

export default function Presets (props) {
  return ( 
    <div className={styles.root}>
      <h4 className={styles.title}>exchange presets</h4>
      {
        props.presets.map((item, index) => {
          return (
            <button 
              className={styles.item}
              key={index}
              data-currfrom={item.currFrom}
              data-currto={item.currTo}
              onClick={props.changePreset} >
              <span>{item.currFrom}</span>
              <svg data-svg="arrows" xmlns="http://www.w3.org/2000/svg" viewBox="152.774 303.53 16.961 16.961">
                <g transform="translate(152.774 274.235)">
                  <path data-svg-layer="arrow-left" d="M12.357,28.044l.747.737,3.71-3.659a.518.518,0,0,0,0-.737L13.1,20.726l-.747.742,2.809,2.765H.013v1.045H15.166Z" transform="translate(-0.013 17.476)"/>
                  <path data-svg-layer="arrow-right" d="M16.961,248.233H1.808l2.809-2.765-.753-.742-3.71,3.659a.518.518,0,0,0,0,.737l3.71,3.659.747-.737-2.8-2.765H16.961Z" transform="translate(0 -215.43)"/>
                </g>
              </svg>
              <span>{item.currTo}</span>
            </button>
          )
        })
      }
    </div>
  )
}

Presets.propTypes = {
  presets: PropTypes.array,
}