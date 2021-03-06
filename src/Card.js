import React from "react";
import IpDisplay from "./IpDisplay";
import BasicInfo from "./BasicInfo";
import ExpandedInfo from "./ExpandedInfo";
import TimeZone from "./TimeZone";
import Flag from "./Flag"

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoading: true
        };
    }

    async getCountry() {
        let countryUrl = "https://restcountries.eu/rest/v2/alpha/";
        let countryApiKey = this.props.locationData.location.country;
        let currentCountryInfo;
        try {
            const response = await fetch(countryUrl + countryApiKey);
            console.log(response);
            if (response.ok) {
                currentCountryInfo = await response.json();
            }
        } catch (error) {
            console.log(error);
            this.setState({error: true})
        }
        console.log("currentCountryInfo");
        console.log(currentCountryInfo);
        if(!currentCountryInfo){
            this.setState({error: true})
        }
        return currentCountryInfo;
    }

    async componentDidMount() {
        let country = await this.getCountry();
        this.setState({ country });
        console.log(this.state);
        this.setState({isLoading: false})
    }

    render() {
        if (this.state.error == true) {
            return <div className="CardContent" >Whoopee dee doo</div>
        }
        else if (this.state.isLoading || !this.state.country){
            return <div className="CardContent" >Loading</div>
        }
        else if(this.state.country){
        return (
            <div className="CardContent">
                <div id="closeContainer">
                    <span id="closeBtn"
                        onClick={() => {
                            this.props.closeCard();
                        }}>X</span>
                </div>
                <div className="row1">
                    <div className="FlagContent">
                        <Flag 
                            flag={this.state.country.flag}
                            />
                    </div>
                    <div className="infobox">
                        <div className="IpContent">
                            <IpDisplay ip={this.props.locationData.ip} />
                        </div>
                        <div className="TimeZone"><TimeZone /></div>
                        <div className="BasicInfo">
                            <BasicInfo
                                languages={this.state.country.languages}
                                capitalCity={this.state.country.capital}
                                callingCode={this.state.country.callingCodes}
                            />
                        </div>
                    </div>
                </div>

                <div className="row2">
                    <ExpandedInfo info={this.state.country}/>
                </div>
            </div>
        );}
    }
}

export default Card;