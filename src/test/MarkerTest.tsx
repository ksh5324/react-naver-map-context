import React from "react";
import Map from "../components/Map";
import Marker from "../components/Marker";

const MarkerTest = () => {
  return (
    <>
      <Map mapId="123">
        <Marker position={{ lat: 37.3595704, lng: 127.105399 }} />
      </Map>
    </>
  );
};

export default MarkerTest;
