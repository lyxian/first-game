import React, { Component } from "react";
// import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    // this.firstNameInput = this.firstNameInput.bind(this);
    // this.state = {
    //   firstName: "",
    //   lastName: "",
    // }
  }

  render() {
    return (
      <div className="game_card">
        <img src={this.props.image} alt="Image of Baron" />
        <h4>{this.props.name}</h4>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default Card;
