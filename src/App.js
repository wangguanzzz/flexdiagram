import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Jumbotron,
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import SequenceDiagram from "react-sequence-diagram";

const input =
  "Andrew->China: Says Hello\n" +
  "Note right of China: China thinks\\nabout it\n" +
  "China-->Andrew: How are you?\n" +
  "Andrew->>China: I am good thanks!";

const options = {
  theme: "simple"
};

function onError(error) {
  console.log(error);
}

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
        <Grid>
          <Row className="show-grid">
            <Col md={6}>
              <form>
                <FormGroup>
                  <ControlLabel>Diagram DSL</ControlLabel>
                  <FormControl componentClass="textarea" rows="5" />
                </FormGroup>
              </form>
            </Col>
            <Col md={6}>
              <SequenceDiagram
                col-md-6
                input={input}
                options={options}
                onError={onError}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
