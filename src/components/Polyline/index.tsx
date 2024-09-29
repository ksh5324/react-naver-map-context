import { forwardRef, useImperativeHandle, useState } from "react";
import { useNaverMap } from "../../contexts/naverMapContext";
import useMapEffect from "../../hooks/useMapEffect";
import { convertToCoord } from "../../utils/convertToCoord";
import type { LatLng, Point } from "../Marker/types";
import useNaverEvent from "../../hooks/useNaverEvent";
import type { PolylineProps } from "./types";

const Polyline = forwardRef<naver.maps.Polyline | undefined, PolylineProps>(
  function Polygon(
    {
      path,
      clickable,
      endIcon,
      endIconSize,
      startIcon,
      startIconSize,
      strokeColor,
      strokeLineCap,
      strokeLineJoin,
      strokeOpacity,
      strokeStyle,
      strokeWeight,
      visible,
      zIndex,
      ...Event
    },
    ref
  ) {
    const naverMap = useNaverMap();
    const [polyline, setPolyline] = useState<naver.maps.Polyline>();
    useNaverEvent(polyline, Event);
    useMapEffect(() => {
      if (!naverMap) {
        return;
      }
      if (polyline) {
        polyline?.setMap(null);
      }

      const positionList = path.map((position: LatLng | Point) => {
        return convertToCoord(position);
      });

      const polylines = new naver.maps.Polyline({
        map: naverMap,
        path: positionList,
        clickable,
        endIcon,
        endIconSize,
        startIcon,
        startIconSize,
        strokeColor,
        strokeLineCap,
        strokeLineJoin,
        strokeOpacity,
        strokeStyle,
        strokeWeight,
        visible,
        zIndex,
      });

      setPolyline(polylines);

      return () => {
        polylines?.setMap(null);
      };
    }, [
      naverMap,
      path,
      clickable,
      endIcon,
      endIconSize,
      startIcon,
      startIconSize,
      strokeColor,
      strokeLineCap,
      strokeLineJoin,
      strokeOpacity,
      strokeStyle,
      strokeWeight,
      visible,
      zIndex,
    ]);

    useImperativeHandle(
      ref,
      () => {
        return polyline;
      },
      [polyline]
    );

    return <></>;
  }
);

export default Polyline;
