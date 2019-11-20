import React, { useState } from "react";
import "./App.css";
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display"
import Numbers  from "./components/ButtonComponents/NumberButtons/Numbers"
import Operators from "./components/ButtonComponents/OperatorButtons/Operators"
import Specials  from "./components/ButtonComponents/SpecialButtons/Specials"

function App() {
  const [ displayValue, setDisplayValue ] = useState("0")

  return (
    <div className="container">
      <Logo />
      <Display displayValue={displayValue} />

      <div className="App">
        <div>
           <Specials />
           <Numbers setDisplayValue={setDisplayValue} />
        </div>
           <Operators />
      </div>
    </div>
  )}
  
  export default App;