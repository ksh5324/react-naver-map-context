import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useNaverMap } from "../../contexts/naverMapContext";
import useNaverEvent from "../../hooks/useNaverEvent";
import useMapEffect from "../../hooks/useMapEffect";
import type { PolygonProps } from "./types";
import { convertToCoord } from "../../utils/convertToCoord";

const Polygon = forwardRef<naver.maps.Polygon | undefined, PolygonProps>(
  function Polygon(
    {
      paths,
      strokeWeight,
      strokeColor,
      strokeOpacity,
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
    const [polygon, setPolygon] = useState<naver.maps.Polygon>();
    useNaverEvent(polygon, Events);
    useMapEffect(() => {
      if (!naverMap) {
        return;
      }

      if (polygon) {
        polygon.setMap(null);
      }

      // 2차원 배열인지 체크 / throw Error
      const pathList = paths.map((path) => {
        return path.map((p) => convertToCoord(p));
      });

      const p = new naver.maps.Polygon({
        map: naverMap,
        paths: pathList,
        strokeWeight,
        strokeColor,
        strokeOpacity,
        strokeLineCap,
        strokeLineJoin,
        fillColor,
        fillOpacity,
        clickable,
        visible,
        zIndex,
      });

      setPolygon(p);

      return () => {
        p.setMap(null);
      };
    }, [
      naverMap,
      paths,
      strokeWeight,
      strokeColor,
      strokeOpacity,
      strokeLineCap,
      strokeLineJoin,
      fillColor,
      fillOpacity,
      clickable,
      visible,
      zIndex,
    ]);
    useImperativeHandle(ref, () => polygon, [polygon]);

    return <></>;
  }
);

export default Polygon;
