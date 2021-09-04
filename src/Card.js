import React from 'react';
import IpDisplay from "./IpDisplay";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
        <div className="CardContent">

            <div className="row1">
            <div className="FlagContent">
             {/* <Flag /> */}
            </div>
            <div className="infobox">
            <div className="IpContent">
                <IpDisplay ip={ this.props.locationData.ip } /></div>
            {/* <div className="Timezone"><TimeZone /></div> */}
            <div className="BasicInfo">{/* <BasicInfo /> */}</div>
            </div>
            </div>

            <div className="row2">
            <div className="CountryInfo">
                <h3>Country Info</h3>
                {/* <ExpandedInfo /> */}
            </div>
    </div>

</div>

    )}

}

export default Card
