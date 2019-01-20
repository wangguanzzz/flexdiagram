import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Jumbotron } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1>Flex diagram</h1>
          <p>
            This is a demo site to enable user to easily creat, store, search,
            display the system architect diagram
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
