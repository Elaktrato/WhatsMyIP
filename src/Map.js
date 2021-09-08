import { MapContainer, Marker, TileLayer } from "react-leaflet";
import Card from "./Card";
import { useState } from "react";

export default function Map (props) {
    const locationData = props.locationData.location;
    const centerLoc = [locationData.lat, locationData.lng];
    const [cardVisible, setCardVisible] = useState(true);
    const handleClick = () => {
        setCardVisible((prevState) => !prevState);
    };
    return (
        <MapContainer
            style={{ height: "100vh", width: "100vw" }}
            center={centerLoc}
            zoom={13}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={centerLoc}
                eventHandlers={{
                    click: () => {
                        handleClick();
                    }
                }}
            ></Marker>
            {cardVisible && (
                <Card locationData={props.locationData} closeCard={handleClick} />
            )}
        </MapContainer>
    );
};