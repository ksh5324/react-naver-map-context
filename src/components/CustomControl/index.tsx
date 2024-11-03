import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useNaverMap } from "../../contexts/naverMapContext";
import useMapEffect from "../../hooks/useMapEffect";
import ReactDOMServer from "react-dom/server";
import type { CustomControlProps } from "./types";
import { mapCustomPositionToNaverPosition } from "./utils";

const CustomControl = forwardRef<naver.maps.CustomControl, CustomControlProps>(
  function CustomControl({ children, position }, ref) {
    const naverMap = useNaverMap();
    const [customControl, setCustomControl] =
      useState<naver.maps.CustomControl>();

    useMapEffect(() => {
      if (!naverMap) return;

      if (customControl) customControl.setMap(null);

      if (!children) {
        console.error("children is required");
        return;
      }

      const childrenString = ReactDOMServer.renderToString(children);

      const control = new naver.maps.CustomControl(childrenString, {
        position: mapCustomPositionToNaverPosition(position),
      });

      if (!customControl) {
        naver.maps.Event.once(naverMap, "init", () => {
          control.setMap(naverMap);
        });
      } else {
        control.setMap(naverMap);
      }
      setCustomControl(control);
    }, [naverMap, children, position]);

    useImperativeHandle(ref, () => {
      if (!customControl) {
        throw new Error("customControl is not initialized");
      }
      return customControl;
    }, [customControl]);

    return <></>;
  }
);

export default CustomControl;
