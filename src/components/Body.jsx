import React, { Component } from "react";
import { data } from "../data/data";
import {
  Link,
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

import LoveLetter from "./games/LoveLetter";

class Body extends Component {
  convertReadableName(name) {
    let newArray = [];
    name.split("-").map((i, index) => {
      newArray[index] = `${i[0].toUpperCase()}${i.slice(1)}`;
    });
    return newArray.join(" ");
  }

  render() {
    // console.log(data);
    const availableGames = data.availableGames.map((gameName, index) => (
      <a key={index} href={gameName}>
        {this.convertReadableName(gameName)}
      </a>
      // <Link key={index} to={"/" + gameName}>{this.convertReadableName(gameName)}</Link>
    ));
    return (
      <div className="body">
        <div className="gameSelector">{availableGames}</div>
      </div>
    );
  }
}

export default Body;
