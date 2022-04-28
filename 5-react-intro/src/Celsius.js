import React, { Component } from "react";

export default class Celsius extends Component {
  render() {
    return (
      <div>
        <h4>Celsius: {this.props.celsius}</h4>
      </div>
    );
  }
}
