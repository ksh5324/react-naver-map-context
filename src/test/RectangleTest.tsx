import React, { useRef } from "react";
import Map from "../components/Map";
import Rectangle from "../components/Rectangle";

const RectangleTest = () => {
  const ref = useRef<naver.maps.Rectangle>();

  return (
    <Map
      mapId="123"
      mapOptions={{ center: { lat: 37.5666805, lng: 126.9784147 } }}
    >
      <Rectangle
        ref={ref} 
        bounds={{
          ne: { lat: 37.565, lng: 126.9761217732253 },
          sw: { lat: 37.566, lng: 126.976655026774 },
        }}
      />
    </Map>
  );
};

export default RectangleTest;
