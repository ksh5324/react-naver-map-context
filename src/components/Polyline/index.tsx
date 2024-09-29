import { forwardRef, useImperativeHandle, useState } from "react";
import { useNaverMap } from "../../contexts/naverMapContext";
import useMapEffect from "../../hooks/useMapEffect";
import { convertToCoord } from "../../utils/convertToCoord";
import type { OptionalRecord } from "../../@types/generic";
import type { PolylineEventFunctionType } from "../../@types/NaverEvent";
import type { LatLng, Point } from "../Marker/types";

type PolylineProps = {
  path: (LatLng | naver.maps.LatLng)[] | (Point | naver.maps.Point)[];
} & Omit<naver.maps.PolylineOptions, "path" | "map"> &
  OptionalRecord<keyof PolylineEventFunctionType, (e: any) => any>;

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
    },
    ref
  ) {
    const naverMap = useNaverMap();
    const [polyline, setPolyline] = useState<naver.maps.Polyline>();
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
