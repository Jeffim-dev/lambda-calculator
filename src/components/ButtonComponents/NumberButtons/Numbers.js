import React, { useState } from "react";
import { numbers } from "../../../data"
import  NumberButton  from "./NumberButton"

const Numbers = props => {
  const [numberState, setNumberState] = useState(numbers);
  console.log(numberState)
  return (
    <div>
     {numberState.map((number, index) => {
        return (
          <NumberButton 
            key={index}
            number={number}
            setDisplayValue={props.setDisplayValue}
          />
        )
      })}
    </div>
  );
}
export default Numbers;


