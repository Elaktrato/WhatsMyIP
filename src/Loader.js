
import React from "react";
import { WaveLoader } from "react-loaders-kit";

function Loader() {

    const loaderProps = {
      loading: true,
      size: 275,
      duration: 0.5,
      color: "#0f3c78",
    };
  
    return (
      <div className="loader">
          <WaveLoader {...loaderProps} />
      </div>
    );
  }

  export default Loader
  