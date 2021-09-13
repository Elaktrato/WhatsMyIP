import React from "react";

function ExpandedInfo(props) {
    return (
        <div className="CountryInfo">
            <h3 className="CountryInfoCol">Some interesting info about your country:</h3>
            <div className="CountryInfoCol">
                <p><strong>Native name:</strong> {props.info.nativeName}</p>
                <p><strong>Currency:</strong> {props.info.currencies[0].name} ({props.info.currencies[0].symbol})</p>
                <p><strong>Population:</strong> {props.info.population.toLocaleString("en-GB")} people</p>
            </div>
            <div className="CountryInfoCol">
                <p><strong>Region:</strong> {props.info.region}</p>
                <p><strong>Subregion:</strong> {props.info.subregion}</p>
                {props.info.regionalBlocs[0] && <p><strong>Regional bloc:</strong> {props.info.regionalBlocs[0]["name"]}</p> }
                
            </div>
        </div>
    );
}

export default ExpandedInfo;