import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const pannel = props => {
  return (
    <form>
      <FormGroup>
        <ControlLabel>Diagram DSL</ControlLabel>
        <FormControl
          componentClass="textarea"
          value={props.dsl}
          rows="5"
          onChange={props.onChange}
        />
      </FormGroup>
    </form>
  );
};

export default pannel;
