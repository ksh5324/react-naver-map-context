import React from "react";
import Map from "../components/Map";
import CustomControl from "../components/CustomControl";

const CustomControlTest = () => {
  const clickEvent = () => {
    console.log("click");
  };
  const clickEvent2 = () => {
    console.log("click2");
  };
  return (
    <>
      <Map mapId="123">
        <CustomControl position="TOP_LEFT">
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
