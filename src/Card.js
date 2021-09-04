import React from "react";
import IpDisplay from "./IpDisplay";
import Flag from "./Flag";
import TimeZone from "./TimeZone";
import BasicInfo from "./BasicInfo";
import ExpandedInfo from "./ExpandedInfo";


function Card(props) {
    console.log("Card props.locationData")
    console.log(props.locationData)
    return (
    <div className="card">
        <div className="flagWithInfo" >
            {/* <Flag /> */}
            <div className="ipAndInfo">
                <IpDisplay ip={ props.locationData.ip } />
                <TimeZone />
                {/* <BasicInfo /> */}
            </div>
        </div>
        {/* <ExpandedInfo /> */}
    </div>)
}

export default Card;