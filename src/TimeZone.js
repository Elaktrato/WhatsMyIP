import React from "react";
import {DateTime} from "luxon"

function TimeZone(props) {
    var local = DateTime.local();

    return <div> Your time zone is { local.zoneName } </div>
}

export default TimeZone;