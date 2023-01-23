import React, { Component } from "react";

class Game extends Component {
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
      <button type="button">
        <span>Show </span>
        <span>all </span>
        <span> tasks</span>
      </button>
    );
  }
}

export default Game;
