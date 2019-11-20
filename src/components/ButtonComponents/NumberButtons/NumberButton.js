import React from "react";

 const NumberButton = props => {
   return (
    <>
        <button className="nuButton" onClick={() => 
          props.setDisplayValue(props.number)}>
            {props.number}
        </button>
    </>
  );
 }
export default NumberButton;