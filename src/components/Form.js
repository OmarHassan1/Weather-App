import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" placeholder="City....." />
        <input type="text" placeholder="Country" />
        <button>Get Weather</button>
      </form>
    );
  }
}
export default Form;
