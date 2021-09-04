
import './App.css';
import { useState, useEffect } from "react";
import Map from "./Map"


function App() {
  const [locationData, setLocationData] = useState({
    "ip": "8.8.8.8",
    "location": {
        "country": "US",
        "region": "California",
        "city": "Mountain View",
        "lat": 37.40599,
        "lng": -122.078514,
        "postalCode": "94043",
        "timezone": "-07:00",
        "geonameId": 5375481
    },
    "domains": [
        "0d2.net",
        "003725.com",
        "0f6.b0094c.cn",
        "007515.com",
        "0guhi.jocose.cn"
    ],
    "as": {
        "asn": 15169,
        "name": "Google LLC",
        "route": "8.8.8.0/24",
        "domain": "https://about.google/intl/en/",
        "type": "Content"
    },
    "isp": "Google LLC",
    "proxy": {
        "proxy": false,
        "vpn": false,
        "tor": false
    },
});

const [loadingIp, setLoadingIp] = useState(true);

const getIp = async () => {
  let ipUrl = "https://geo.ipify.org/api/v1?apiKey=";
  let ipApiKey = "at_VF7kJXfX3dBVqla8cpVBLGmfQO3cg";
  let currentIpInfo;
  try {
    const response = await fetch(ipUrl + ipApiKey)
    console.log(response)
    if(response.ok) {
      currentIpInfo = await response.json()
    }
  } catch(error) {
    console.log(error);
  }
  console.log("currentIpInfo")
  console.log(currentIpInfo)
  return currentIpInfo
}


useEffect(async () =>  {
  setLocationData(await getIp());
  console.log(locationData);
  setLoadingIp(false)
}, [])

let mapSection;
if(!loadingIp){
 mapSection = <Map locationData={locationData} />
}else{
  mapSection = ""
}


  return (
    <div className="App">
      {mapSection}
      <div></div>
    </div>
  );
}

export default App;
