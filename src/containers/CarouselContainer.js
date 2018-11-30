import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import LoadingSpinner from '../components/LoadingSpinner';
import FailFetch from '../components/FailFetch';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faAngleRight, faAngleLeft);

export default class CarouselContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      error: '',
      currentIndex: 0,
      isPending: false,
      showCard: false,
      direction: undefined
    }
  }

  componentDidMount() {
    this.setState({isPending: true});
    fetch('http://localhost/api/v1/monsters')
      .then(response => {
          return response.json();
       })
      .then(data => this.setState(() => ({ cards: data.data, isPending: false, showCard: true })))
      .catch(error => this.setState(() => ({ error, isPending: false })));
  }

  nextCard = () => {
    this.setState((prevState) => {
      return {
        currentIndex: prevState.currentIndex === prevState.cards.length - 1 ? 0 : prevState.currentIndex + 1,
        direction: 'next'
      }
    });
  }

  prevCard = () => {
    this.setState((prevState) => {
      return {
        currentIndex: prevState.currentIndex === 0 ? prevState.cards.length - 1 : prevState.currentIndex - 1,
        direction: 'prev'
      }
    });
  }

  getPrevIndex = () => {
    const currIndex = this.state.currentIndex;
    if (currIndex === 0) {
      return this.state.cards.length - 1;
    }
    return currIndex - 1;
  }

  getNextIndex = () => {
    const currIndex = this.state.currentIndex;
    if (currIndex === this.state.cards.length - 1) {
      return 0;
    }
    return currIndex + 1;
  }


  render() {
    const {isPending, error} = this.state;
    if (error) {
      return <FailFetch />;
    }
  
    if (isPending || this.state.cards.length === 0) {
      return <LoadingSpinner/>;
    }

    return <Carousel {...this.state} prevIndex={this.getPrevIndex} nextIndex={this.getNextIndex} prevCard={this.prevCard} nextCard={this.nextCard}/>
  }
}

