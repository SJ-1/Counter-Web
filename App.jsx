import React, { useState } from "react";

let App = () => {
  const state = useState(); //hook

  const [count, setCount] = useState(0); //in paranthesis , I've set intital value and it will go to count whereas setCount is updated value

  const IncNum = () => { //Event 
    setCount (count + 1); //act as updated value . now count value is updated
    // count first will show 0 then will show updated value.
  };
  return(
    <div className="heading"> 
      <h1> {count} </h1> 
      <div className="button">
      <button onClick={IncNum}>Click Me</button></div>
      </div>
  )
};

export default App;
