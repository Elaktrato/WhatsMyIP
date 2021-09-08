import React from "react";

function Flag(props) {
  return (
    <div>
      <img id="countryFlag" src={props.flag} alt="country flag"></img>
    </div>
  );
}

export default Flag;