import React from "react";
import { FormGroup, Label, Button, InputGroup, Input } from "reactstrap";

const pannel = props => {
  return (
    <form>
      <FormGroup>
        <Label>Diagram DSL</Label>
        <Input
          type="textarea"
          value={props.dsl}
          rows="5"
          onChange={props.changed}
        />
      </FormGroup>
      <FormGroup>
        <Button block color="primary">
          Save
        </Button>
      </FormGroup>
    </form>
  );
};

export default pannel;
