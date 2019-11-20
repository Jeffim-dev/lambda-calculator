import React from "react";

const OperatorButton = props => {
  return (
    <>
      <button className="opButton"> {props.operator.char} </button>
    </>
  );
};

export default OperatorButton;