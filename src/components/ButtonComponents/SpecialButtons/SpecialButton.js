import React from "react";

const SpecialButton = props => {
  return (
    <>
    <button className="spButton">
       {props.special}
    </button>
    </>
  );
};

export default SpecialButton;