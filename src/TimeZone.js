import React, { useEffect, useState } from "react";
import { DateTime } from "luxon"

function TimeZone(props) {
    let locale = DateTime.local().zoneName;
    const [currentTime, setCurrentTime] = useState("");
    const [loadingTime, setLoadingTime] = useState(true);
    const [timeError, setTimeError] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            let timeRightNow = () => DateTime.now().toFormat('tttt')
            setCurrentTime(timeRightNow)
            setLoadingTime(false)
        }, 1000);
        return () => clearInterval(interval);
    }, [currentTime]);

    // Need some help with not displaying the error message and instead have everything render anyways

    let timeComponent;
    if (!loadingTime) {
        timeComponent = `Your time is ${currentTime} ${locale}`
    } else if (timeError) {
        timeComponent = "Something has gone wrong when trying to get your time! Please try reloading the page"
    } else {
        timeComponent = "Loading your time..."
    }


    return <div > { timeComponent } < /div>
}

export default TimeZone;