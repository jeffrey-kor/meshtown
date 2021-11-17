import React, { Component } from "react";
import "./test.css";

export default class App extends Component {
  state = {
    name: ""
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ name: "Jeffrey"})}>
          Click
        </button>
      </React.Fragment>
    )
  }
}