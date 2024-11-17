import { forwardRef, useImperativeHandle, useState } from "react";
import type { CircleProps } from "./types";
import { useNaverMap } from "../../contexts/naverMapContext";
import useNaverEvent from "../../hooks/useNaverEvent";
import useMapEffect from "../../hooks/useMapEffect";
import { convertToCoord } from "../../utils/convertToCoord";

const Circle = forwardRef<naver.maps.Circle | undefined, CircleProps>(
  function Circle(
    {
      center,
      radius,
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
    const [circle, setCircle] = useState<naver.maps.Circle>();
    useNaverEvent(circle, Events);
    useMapEffect(() => {
      if (!naverMap) return;
      if (circle) {
        circle.setMap(null);
      }

      const convertedCenter = convertToCoord(center);

      const c = new naver.maps.Circle({
        map: naverMap,
        center: convertedCenter,
        radius,
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

      setCircle(c);

      return () => {
        c.setMap(null);
      };
    }, [
      naverMap,
      center,
      radius,
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
    ]);

    useImperativeHandle(ref, () => {
      return circle;
    }, [circle]);

    return <></>;
  }
);

export default Circle;
