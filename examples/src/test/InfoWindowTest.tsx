import React, { useState } from "react";
import {Map} from "react-naver-map-sdk";
import {InfoWindow} from "react-naver-map-sdk";
import TestComponent from "./TestComponent";

const InfoWindowTest = () => {
  const [state, setState] = useState(234);
  const clickEvent = () => {
    console.log("click", state);
  };
  return (
    <Map mapId="123">
      <InfoWindow position={{ lat: 37.5666805, lng: 126.9784147 }}>
        <TestComponent onClick={clickEvent} classname="abc" />
      </InfoWindow>
    </Map>
  );
};

export default InfoWindowTest;
