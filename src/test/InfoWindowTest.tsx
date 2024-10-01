import React from "react";
import InfoWindow from "../components/InfoWindow";
import Map from "../components/Map";

const InfoWindowTest = () => {
  return (
    <Map mapId="123">
      <InfoWindow position={{ lat: 37.5666805, lng: 126.9784147 }}>
        <div>234</div>
      </InfoWindow>
    </Map>
  );
};

export default InfoWindowTest;
