import React, { useEffect, useState } from "react";
import { DateTime } from "luxon"

function TimeZone(props) {
    let locale = DateTime.local().zoneName;
    const [currentTime, setCurrentTime] = useState("")
    

    useEffect(() => {
        const interval = setInterval(() => {
            let timeRightNow = DateTime.now().toFormat('tttt')
           setCurrentTime(timeRightNow)
        }, 1000);
        return () => clearInterval(interval);
      }, []);


    return <div> Your time is { currentTime } {locale} </div>
}

export default TimeZone;