import React, { Component } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Pannel from "./components/Pannel/Pannel";
import Diagram from "./components/Diagram/Diagram";

import { Grid, Row, Col } from "react-bootstrap";

class App extends Component {
  state = {
    diagram_options: { theme: "simple" },
    currentDSL:
      "Andrew->China: Says Hello\n" +
      "Note right of China: China thinks\\nabout it\n" +
      "China-->Andrew: How are you?\n" +
      "Andrew->>China: I am good thanks!"
  };
  render() {
    return (
      <div className="App">
        <Banner />

        <Grid>
          <Row className="show-grid">
            <Col md={6}>
              <Pannel dsl={this.state.currentDSL} />
            </Col>
            <Col md={6}>
              <Diagram dsl={this.state.currentDSL} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
