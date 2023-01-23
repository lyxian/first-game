import React, { Component } from "react";
import "./LoveLetter.css";
import Card from "./Card";

class LoveLetter extends Component {
  constructor(props) {
    super(props);
    // this.firstNameInput = this.firstNameInput.bind(this);
    // this.state = {
    //   firstName: "",
    //   lastName: "",
    // }
  }

  render() {
    const playerHand = (
      <div className="game_info_player_hand">
        <Card
          name="card-1"
          image="data:image/jpeg;base64,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"
          value="4"
        />
        <Card name="card-2" value="4" />
      </div>
    );
    return (
      <div className="game_loveletter">
        <h2>Love Letter</h2>
        <div className="game_content">
          <div className="game_info_match"></div>
          <div className="game_info_player">
            {playerHand}
            <div className="game_info_player_move">
              <button>Confirm</button>
            </div>
          </div>
        </div>
        <a href="/">Back to Main</a>
      </div>
    );
  }
}

export default LoveLetter;
