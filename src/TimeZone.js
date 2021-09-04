import React from "react";

function TimeZone(props) {
    return <div> Your IP is { DateTime.now().setLocale("fr").locale } </div>
}

export default TimeZone;