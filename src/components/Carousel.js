import React from 'react';
import CardContainer from '../containers/CardContainer';
import { CardButton } from './CardButton';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Moon from './Moon';

const childFactoryCreator = (classNames) => (
  (child) => (
    React.cloneElement(child, {
      classNames
    })
  )
);

const Carousel = ({ cards, prevIndex, nextIndex, currentIndex, prevCard, nextCard, showCard, direction }) => (
  <CSSTransition 
      in={showCard}
      appear={true}
      classNames="space"
      timeout={2000}
    >
    <div className="space">
      <div className="starfield-big"></div>
      <div className="starfield-medium"></div>
      <div className="starfield-small"></div>
      <Moon />
      <TransitionGroup childFactory={childFactoryCreator(direction === 'next' ? 'card-next' : 'card-prev')} component={null}>
        <CardButton onClick={prevCard} side="left" {...cards[prevIndex()]}/>
          <CSSTransition
            key={cards[currentIndex].name}
            classNames={direction === 'next' ? 'card-next' : 'card-prev'}
            timeout={600}
            appear={true}
            onmountOnExit
            onEntered={el => el.classList.add('spaceship--open')}
            onExit={el => el.classList.remove('spaceship--open')}
          > 
            <CardContainer {...cards[currentIndex]}/>
          </CSSTransition>
        <CardButton onClick={nextCard} side="right" {...cards[nextIndex()]}/>
      </TransitionGroup>
    </div>
  </CSSTransition>
);
    
export default Carousel;

