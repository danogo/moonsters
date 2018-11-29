import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CardButton = ({images, onClick, side}) => (
  <button onClick={onClick}  className={`card-btn card-btn--${side}`}>
    <div className='capsule' style={{backgroundImage: `url(${images.thumb})`}}></div>
    {
      side === 'left'
      ? <FontAwesomeIcon className="icon-angle" icon="angle-right" />
      : <FontAwesomeIcon className="icon-angle" icon="angle-left" />
    }
    
  </button>
);