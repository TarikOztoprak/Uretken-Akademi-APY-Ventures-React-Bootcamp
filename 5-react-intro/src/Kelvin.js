import React, { Component } from "react";

export default class Kelvin extends Component {
  render() {
    return (
      <div>
        <h4>Kelvin: {this.props.celsius + 273}</h4>
      </div>
    );
  }
}
