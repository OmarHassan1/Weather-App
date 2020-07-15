import React, { Component } from "react";
import Form from "./Form";
import Weather from "./Whather";

export default class App extends Component {
  getWeather = (e) => {
    console.log("weather");
    e.preventDefault();
  };
  render() {
    return (
      <div className="App">
        <h1>Weather-App</h1>
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}
