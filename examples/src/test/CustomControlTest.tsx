import React, { useRef } from "react";
import {Map} from "@atlas/naver-react-map";
import {CustomControl} from "@atlas/naver-react-map";

const CustomControlTest = () => {
  const ref = useRef<naver.maps.CustomControl>();
  const clickEvent = () => {
    console.log("click");
  };
  const clickEvent2 = () => {
    console.log(ref.current?.getElement());
    console.log("click2click");
  };
  return (
    <>
      <Map mapId="123">
        <CustomControl position="TOP_LEFT" ref={ref}>
          <div className="btn_mylct">
            <button className="spr_trff spr_ico_mylct" onClick={clickEvent}>
              NAVER 그린팩토리
            </button>
            <button className="spr_trff spr_ico_mylct" onClick={clickEvent2}>
              NAVER 그린팩토리2
            </button>
          </div>
        </CustomControl>
      </Map>
    </>
  );
};

export default CustomControlTest;
