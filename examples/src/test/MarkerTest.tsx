import React, { useRef } from "react";
import {Map} from "react-naver-map-sdk";
import {Marker} from "react-naver-map-sdk";

const MarkerTest = () => {
  const ref = useRef<naver.maps.Marker>();

  return (
    <>
      <Map mapId="123">
        <Marker position={{ lat: 37.3595704, lng: 127.105399 }} ref={ref} />
        <Marker position={{ x: 127.105399, y: 37.4595704 }} />
      </Map>
    </>
  );
};

export default MarkerTest;
