import { forwardRef, useImperativeHandle, useState } from "react";
import { useNaverMap } from "../../contexts/naverMapContext";
import useMapEffect from "../../hooks/useMapEffect";
import useNaverEvent from "../../hooks/useNaverEvent";
import { isLatLng } from "../../utils/isLatLng";
import type { MarkerProps } from "./types";

const Marker = forwardRef<naver.maps.Marker | undefined, MarkerProps>(
  function Marker(
    {
      position,
      animation,
      clickable,
      cursor,
      draggable,
      icon,
      shape,
      title,
      visible,
      zIndex,
      ...Events
    },
    ref
  ) {
    const naverMap = useNaverMap();
    const [marker, setMarker] = useState<naver.maps.Marker>();
    useNaverEvent(marker, Events);
    useMapEffect(() => {
      if (!naverMap) {
        return;
      }

      let pos: naver.maps.Coord | naver.maps.CoordLiteral;

      if (isLatLng(position)) {
        pos = new naver.maps.LatLng(position.lat, position.lng);
      } else {
        pos = new naver.maps.Point(position.x, position.y);
      }

      const m = new naver.maps.Marker({
        map: naverMap,
        position: pos,
        animation,
        clickable,
        cursor,
        draggable,
        icon,
        shape,
        title,
        visible,
        zIndex,
      });

      setMarker(m);

      return () => {
        marker?.setMap(null);
      };
    }, [naverMap]);

    useImperativeHandle(
      ref,
      () => {
        return marker;
      },
      [marker]
    );

    return <></>;
  }
);

export default Marker;
