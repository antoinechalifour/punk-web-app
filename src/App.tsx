import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    try {
      console.log(fetch);
      fetch("https://api.punkapi.com/v2/beers", {
        mode: "cors"
      })
        .then(response => response.json())
        .then(beers => console.log("Beers: ", beers))
        .catch(err => console.log("err:", err));
    } catch (err) {
      console.log("Fetch error:", err);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
