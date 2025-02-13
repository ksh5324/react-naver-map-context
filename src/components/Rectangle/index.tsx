import React, { forwardRef, useImperativeHandle, useState } from "react";
import type { RectangleProps } from "./types";
import { useNaverMap } from "../../contexts/naverMapContext";
import useNaverEvent from "../../hooks/useNaverEvent";
import useMapEffect from "../../hooks/useMapEffect";
import { convertToBound } from "../../utils/convertToBound";

const Rectangle = forwardRef<naver.maps.Rectangle | undefined, RectangleProps>(
  function Rectangle(
    {
      bounds,
      strokeWeight,
      strokeOpacity,
      strokeColor,
      strokeStyle,
      strokeLineCap,
      strokeLineJoin,
      fillColor,
      fillOpacity,
      clickable,
      visible,
      zIndex,
      ...Events
    },
    ref
  ) {
    const naverMap = useNaverMap();
    const [rectangle, setRectangle] = useState<naver.maps.Rectangle>();
    useNaverEvent(rectangle, Events);
    useMapEffect(() => {
      if (!naverMap) return;
      if (rectangle) {
        rectangle.setMap(null);
      }

      const convertedBounds = convertToBound(bounds);

      const r = new naver.maps.Rectangle({
        map: naverMap,
        bounds: convertedBounds,
        strokeWeight,
        strokeOpacity,
        strokeColor,
        strokeStyle,
        strokeLineCap,
        strokeLineJoin,
        fillColor,
        fillOpacity,
        clickable,
        visible,
        zIndex,
      });

      setRectangle(r);

      return () => {
        r.setMap(null);
      };
    }, [
      naverMap,
      bounds,
      strokeWeight,
      strokeOpacity,
      strokeColor,
      strokeStyle,
      strokeLineCap,
      strokeLineJoin,
      fillColor,
      fillOpacity,
      clickable,
      visible,
      zIndex  
    ]);

    useImperativeHandle(ref, () => {
      return rectangle;
    }, [rectangle]);

    return <></>;
  }
);

export default Rectangle;
