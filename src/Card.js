import React from 'react';


class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
<div className="CardContent">

<div className="row1">
<div className="FlagContent">
<h3>Flag</h3>
</div>

<div className="infobox">
<div className="IpContent">IP-Adress</div>
<div className="Timezone">Timezone</div>
<div className="BasicInfo">Basic Info</div>
</div>
</div>

<div className="row2">
<div className="CountryInfo">
    <h3>Country Info</h3>
<p>Region and Regional Bloc
Currency (e.g. "This country uses €)
Little list of translations of the country's name</p>
</div>
</div>





</div>



    )}

     



}

export default Card