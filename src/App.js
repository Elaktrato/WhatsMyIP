
import './App.css';
import { useState, useEffect } from "react";
import Map from "./Map";
import Loader from "./Loader"
import ErrorIpify from './ErrorIpify'



function App() {
  
const [locationData, setLocationData] = useState({});

const [errorState, setErrorState] = useState(false);

const [loadingIp, setLoadingIp] = useState(0);

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
  setLoadingIp(prevState+1);
  }

  getLoc()
}, [])

let mapSection;
if(errorState){
  mapSection = <ErrorIpify  />
}else if(loadingIp !== 2){
  mapSection = <Map locationData={locationData} />
}
else{
  mapSection = <Loader loadingState={loadingIp} />
}


  return (
    <div className="App">
      {mapSection}
    </div>
  );
}

export default App;
