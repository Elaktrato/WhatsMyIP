import React from "react";

function BasicInfo(props) {
  console.log("props.languages");

  console.log(props.languages);
  return (
    <div>
      <div>Language: {props.languages}</div>
      <div>Capital city: {props.capitalCity}</div>
      <div>Calling Code: {props.callingCode}</div>
    </div>
  );
}

export default BasicInfo;