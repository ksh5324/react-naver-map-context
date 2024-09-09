import { forwardRef } from "react";
import { useNaverMap } from "../../contexts/naverMapContext";
import useMapEffect from "../../hooks/useMapEffect";
import type { MakerOptions } from "./types";

type MarkerProps = MakerOptions;

const Marker = forwardRef<naver.maps.Marker | undefined, MarkerProps>(
  function Marker({ ...options }) {
    const naverMap = useNaverMap();

    useMapEffect(() => {
      if (!naverMap) {
        return;
      }

      new naver.maps.Marker({
        map: naverMap,
        ...(options as naver.maps.MarkerOptions),
      });
    }, [naverMap]);

    return <></>;
  }
);

export default Marker;
