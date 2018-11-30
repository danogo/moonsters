import React from 'react';
import ImageLoader from './ImageLoader';
import LoadingSpinner from  "../components/LoadingSpinner";

const Card = ({name, images, description, statistics, isPending}) => (
  <div className="spaceship">
    <div className="spaceship__top">
      <div className="capsule">
        <ImageLoader src={images.big} alt="monster"/>
      </div>
    </div>
    <div className="spaceship__bottom">
      <h3>{name}</h3>
      { isPending 
        ? <LoadingSpinner />
        : statistics && 
          <div className="info">
            <p className="description">{description}</p>
            <div className="stats">
              <div className="labels">
                <p className="label">power</p>
                <p className="label">danger</p>
                <p className="label">frequency</p>
              </div>
              <div className="charts">
                <p className="chart"><span className="data" style={{flexBasis: `${statistics.power*100}%`}}>&nbsp;</span></p>
                <p className="chart"><span className="data" style={{flexBasis: `${statistics.danger*100}%`}}>&nbsp;</span></p>
                <p className="chart"><span className="data" style={{flexBasis: `${statistics.frequency*100}%`}}>&nbsp;</span></p>
              </div>
            </div>
          </div> 
      }  
    </div>
  </div>
)

export default Card;
