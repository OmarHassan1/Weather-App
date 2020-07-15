import React, { Component } from "react";
import Form from "./Form";
import Weather from "./Whather";

const API_KEY = "885fef60f482de251586a370a230f47a";

export default class App extends Component {
  getWeather = async (e) => {
    console.log("weather");
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44"
    );
    const data = await api.json();
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
