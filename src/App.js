
import './App.css';
import { useState, useEffect } from "react";
import Map from "./Map";
import Loader from "./Loader"
import ErrorIpify from './ErrorIpify'



function App() {
  const [locationData, setLocationData] = useState({});

const [errorState, setErrorState] = useState(false);

const [loadingIp, setLoadingIp] = useState(true);

const getIp = async () => {
  let ipUrl = "https://geo.ipify.org/api/v1?apiKey=";
  let ipApiKey = "at_VF7kJXfX3dBVqla8cpVBLGmfQO3cg";
  let currentIpInfo = {error: "unknown"};
  try {
    const response = await fetch(ipUrl + ipApiKey)
    if(response.ok) {
      setErrorState(false);
      currentIpInfo = await response.json()
    }else{
      setErrorState(true);
      return currentIpInfo
    }
  } catch(error) {
    setErrorState(true);
    currentIpInfo.error = error.message
  }
  return currentIpInfo
}


useEffect(() =>  {
  async function getLoc() {
  setLocationData(await getIp());
  console.log(locationData);
  setLoadingIp(false);
  }

  getLoc()
}, [])

let mapSection;
if(errorState){
  mapSection = <ErrorIpify  />
}else if(!loadingIp){
  mapSection = <Map locationData={locationData} />
}
else{
  mapSection = <Loader />
}


  return (
    <div className="App">
      {mapSection}
      <div></div>
    </div>
  );
}

export default App;
