import { Children, PropsWithChildren, useState } from "react";
import { useNaverMap } from "../../contexts/naverMapContext";
import useMapEffect from "../../hooks/useMapEffect";
import { convertToCoord } from "../../utils/convertToCoord";
import { ReactNodeToStaticHTMLElement } from "../../utils/ReactNodeToStaticHTMLElement";
import { LatLng, Point } from "../Marker/types";

const InfoWindow = ({
  children,
  position,
}: PropsWithChildren<
  Omit<naver.maps.InfoWindowOptions, "content" | "position"> & {
    position: LatLng | Point | naver.maps.Coord;
  }
>) => {
  const naverMap = useNaverMap();
  const [infoWindow, setInfoWindow] = useState<naver.maps.InfoWindow>();
  useMapEffect(() => {
    if (!naverMap) {
      return;
    }
    if (infoWindow) {
      infoWindow?.setMap(null);
    }

    const pos = convertToCoord(position);

    if (!Children.only(children)) {
      console.error("children");
      return;
    }

    const info = new naver.maps.InfoWindow({
      content: ReactNodeToStaticHTMLElement(children) || "",
      position: pos,
    });
    info.open(naverMap);
  }, [naverMap]);
  return <></>;
};

export default InfoWindow;
