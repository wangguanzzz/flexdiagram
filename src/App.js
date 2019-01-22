import React, { Component } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Pannel from "./components/Pannel/Pannel";
import Diagram from "./components/Diagram/Diagram";
import { Container, Row, Col } from "reactstrap";

class App extends Component {
  state = {
    diagram_options: { theme: "simple" },
    currentDSL:
      "Andrew->China: Says Hello\n" +
      "Note right of China: China thinks\\nabout it\n" +
      "China-->Andrew: How are you?\n" +
      "Andrew->>China: I am good thanks!",
    storedDSL: []
  };

  editDslHandler = event => {
    //console.log(event);
    this.setState({ currentDSL: event.target.value });
  };
  saveDslHandler = () => {};
  render() {
    return (
      <div className="App">
        <Container>
          <Banner />
          <Row>
            <Col md="4">
              <Pannel
                dsl={this.state.currentDSL}
                changed={this.editDslHandler}
              />
            </Col>
            <Col md="8">
              <Diagram dsl={this.state.currentDSL} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
