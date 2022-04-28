import React, { Component } from "react";

export default class Fahrenheit extends Component {
  render() {
    return (
      <div>
        <h4>Fahrenheit: {1.8 * this.props.celsius + 32}</h4>
      </div>
    );
  }
}
