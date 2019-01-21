import React from "react";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  InputGroup
} from "react-bootstrap";

const pannel = props => {
  return (
    <form>
      <FormGroup>
        <ControlLabel>Diagram DSL</ControlLabel>

        <FormControl
          componentClass="textarea"
          value={props.dsl}
          rows="5"
          onChange={props.changed}
        />
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <FormControl type="text" placeholder="DSL Name" />
          <InputGroup.Button>
            <Button bsStyle="primary">Save</Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    </form>
  );
};

export default pannel;
