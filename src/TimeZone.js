import React from "react";


function TimeZone(props) {
    console.log("props.ip")

    console.log(props.ip)
    return <div> Your IP is { props.ip } </div>
}

export default TimeZone;