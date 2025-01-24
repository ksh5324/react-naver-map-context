import React, { useRef, useState } from "react";
import {Map} from "react-naver-map-sdk";
import {Circle} from "react-naver-map-sdk";

const CircleTest = () => {
  const ref = useRef<naver.maps.Circle>();
  const [clickable, setClickable] = useState(false);
  const [visible, setVisible] = useState(false);
  const [zIndex, setZIndex] = useState(0);

  return (
    <Map
      mapId="123"
      mapOptions={{ center: { lat: 37.5666805, lng: 126.9784147 } }}
      onClick={() => {
        setClickable(!clickable);
        setVisible(!visible);
        ref.current?.setZIndex(zIndex + 1);
        setZIndex(zIndex + 1);
      }}
    >
      <Circle
        ref={ref}
        center={{ lat: 37.5666805, lng: 126.9784147 }}
        radius={1000}
        strokeColor="#000000"
        strokeWeight={1}
        strokeOpacity={1}
        fillColor="crimson"
        fillOpacity={0.8}
        onClick={() => {
          console.log("click");
        }}
        onClickableChanged={() => {
          console.log("clickable changed");
        }}
        onVisibleChanged={() => {
          console.log("visible changed");
        }}
        onZIndexChanged={() => {
          // ref.current?.setZIndex(zIndex + 1);을 통해서만 이벤트가 발생. zIndex 직접 변경시 이벤트 발생 안됨.
          console.log("zIndex changed");
        }}
        clickable={clickable}
        visible={visible}
        zIndex={zIndex}
      />
    </Map>
  );
};

export default CircleTest;
