import React from "react";
import { specials } from "../../../data";
import  SpecialButton  from "./SpecialButton";

const Specials = props => {
  return (
    <div>
      {specials.map((special, index) => {
        return (
          <SpecialButton key={index} special={special} />
        )
      })}
    </div>
  );
};
export default Specials;

