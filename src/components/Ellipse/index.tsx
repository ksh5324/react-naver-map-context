import React, { forwardRef, useImperativeHandle, useState } from "react";
import type { EllipseProps } from "./types";
import { useNaverMap } from "../../contexts/naverMapContext";
import useNaverEvent from "../../hooks/useNaverEvent";
import useMapEffect from "../../hooks/useMapEffect";
import { convertToBound } from "../../utils/convertToBound";

const Ellipse = forwardRef<naver.maps.Ellipse | undefined, EllipseProps>(
  function Ellipse(
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
    const [ellipse, setEllipse] = useState<naver.maps.Ellipse>();
    useNaverEvent(ellipse, Events);
    useMapEffect(() => {
      if (!naverMap) return;
      if (ellipse) {
        ellipse.setMap(null);
      }

      const convertedBounds = convertToBound(bounds);

      const e = new naver.maps.Ellipse({
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

      setEllipse(e);

      return () => {
        e.setMap(null);
      };
    }, [naverMap]);

    useImperativeHandle(ref, () => {
      return ellipse;
    }, [ellipse]);

    return <></>;
  }
);

export default Ellipse;
