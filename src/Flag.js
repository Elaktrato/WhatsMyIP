import React from "react";

function Flag(props) {
  console.log("props.languages");

  
  return (
    <div>
      <img id="countryFlag" src={props.flag} alt="country flag"></img>
    </div>
  );
}

export default Flag;