import React, { useEffect, useRef, useState } from "react";
import Map from "../components/Map";
import CustomControl from "../components/CustomControl";

const CustomControlTest = () => {
  const ref = useRef<naver.maps.CustomControl>();
  return (
    <>
      <Map mapId="123">
        <CustomControl position="TOP_LEFT" >
          <button className="btn_mylct">
            <span className="spr_trff spr_ico_mylct">NAVER 그린팩토리</span>
          </button>
        </CustomControl>
      </Map>
    </>
  );
};

export default CustomControlTest;
