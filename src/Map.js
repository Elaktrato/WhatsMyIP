import React from "react";
import Card from "./Card"


function Map (props){

    console.log("Map props.locationData")
    console.log(props.locationData)

    return <Card locationData={ props.locationData } />
}

export default Map;