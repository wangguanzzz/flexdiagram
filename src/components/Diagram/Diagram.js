import React from "react";
import SequenceDiagram from "react-sequence-diagram";

const onError = error => {
  console.log(error);
};
const options = { theme: "simple" };

const diagram = props => {
  return (
    <SequenceDiagram input={props.dsl} options={options} onError={onError} />
  );
};

export default diagram;
