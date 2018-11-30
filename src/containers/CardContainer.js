import React, { Component } from "react";
import Card from "../components/Card";

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: null,
      error: '',
      isPending: true
    };
  }

  componentDidMount() {
    fetch(`https://monsters-api-danogo.herokuapp.com/api/v1/monster/${this.props.slug}`)
      .then(response => response.json())
      .then(data => {
        this.setState(() => ({
          card: data.data,
          isPending: false
        }))
      })
      .catch(error => this.setState(() => ({ error, isPending: false })));
  }


  render() {
    return <Card {...this.state.card} {...this.props} isPending={this.state.isPending}/>;
  }
}

export default CardContainer;