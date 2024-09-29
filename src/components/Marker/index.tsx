import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useNaverMap } from "../../contexts/naverMapContext";
import useMapEffect from "../../hooks/useMapEffect";
import useNaverEvent from "../../hooks/useNaverEvent";
import type { MarkerProps } from "./types";
import { convertToCoord } from "../../utils/convertToCoord";

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
      if (marker) {
        marker?.setMap(null);
      }

      const pos = convertToCoord(position);

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
        m.setMap(null);
      };
    }, [
      naverMap,
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
    ]);

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
