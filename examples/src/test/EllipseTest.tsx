import React, { useRef } from "react";
import {Map} from "react-naver-map-sdk";
import {Ellipse} from "react-naver-map-sdk";

const EllipseTest = () => {
  const ref = useRef<naver.maps.Ellipse>();

  return (
    <Map
      mapId="123"
      mapOptions={{ center: { lat: 37.5666805, lng: 126.9784147 } }}
    >
      <Ellipse
        ref={ref}
        bounds={{
          ne: { lat: 37.1793196, lng: 127.6795594 },
          sw: { lat: 37.5398662, lng: 128.4312422 },
        }}
        strokeColor="yellowgreen"
        strokeOpacity={1}
        strokeWeight={3}
        fillColor="yellowgreen"
        fillOpacity={0.3}
        onClick={() => {
          console.log("click");
          console.log(ref.current?.getBounds());
        }}
        clickable={true}
      />
    </Map>
  );
};

export default EllipseTest;
