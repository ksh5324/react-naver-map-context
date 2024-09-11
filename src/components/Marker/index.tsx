import { forwardRef, useImperativeHandle, useState } from "react";
import { useNaverMap } from "../../contexts/naverMapContext";
import useMapEffect from "../../hooks/useMapEffect";
import type { MakerOptions } from "./types";

type MarkerProps = MakerOptions;

const Marker = forwardRef<naver.maps.Marker | undefined, MarkerProps>(
  function Marker({ position, ...options }, ref) {
    const naverMap = useNaverMap();
    const [marker, setMarker] = useState<naver.maps.Marker>();

    useMapEffect(() => {
      if (!naverMap) {
        return;
      }

      let pos: naver.maps.Coord | naver.maps.CoordLiteral;

      if (Array.isArray(position)) {
        pos = new naver.maps.LatLng(position[0], position[1]);
      } else {
        pos = new naver.maps.Point(position.x, position.y);
      }

      const m = new naver.maps.Marker({
        map: naverMap,
        position: pos,
        ...(options as Omit<naver.maps.MarkerOptions, "position">),
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
