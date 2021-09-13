import React from "react";

function BasicInfo(props) {
  console.log("props.languages");

  console.log(props.languages);
  return (
    <div>
      <div><strong>Language: </strong> 
          <span>{props.languages.map((language) => {
          return language.name
        }).join(", ")
        }</span>
        </div>
      <div><strong>Capital city:</strong> {props.capitalCity}</div>
      <div><strong>Calling Code:</strong> {props.callingCode}</div>
    </div>
  );
}

export default BasicInfo;