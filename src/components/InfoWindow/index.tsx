import {
  Children,
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useState,
} from "react";
import {
  EventProps,
  InfoWindowEventFunctionType,
} from "../../@types/NaverEvent";
import { useNaverMap } from "../../contexts/naverMapContext";
import useMapEffect from "../../hooks/useMapEffect";
import useNaverEvent from "../../hooks/useNaverEvent";
import { convertToCoord } from "../../utils/convertToCoord";
import { ReactNodeToStaticHTMLElement } from "../../utils/ReactNodeToStaticHTMLElement";
import { LatLng, Point } from "../Marker/types";

type infoWindowProps = PropsWithChildren<
  Omit<naver.maps.InfoWindowOptions, "content" | "position"> & {
    position: LatLng | Point | naver.maps.Coord;
  }
> &
  EventProps<InfoWindowEventFunctionType, naver.maps.InfoWindow>;

const InfoWindow = forwardRef<
  naver.maps.InfoWindow | undefined,
  infoWindowProps
>(function InfoWindow(
  {
    children,
    position,
    anchorColor,
    anchorSize,
    anchorSkew,
    backgroundColor,
    borderColor,
    borderWidth,
    disableAnchor,
    disableAutoPan,
    maxWidth,
    pixelOffset,
    zIndex,
    ...Events
  },
  ref
) {
  const naverMap = useNaverMap();
  const [infoWindow, setInfoWindow] = useState<naver.maps.InfoWindow>();
  useNaverEvent(infoWindow, Events);
  useMapEffect(() => {
    if (!naverMap) {
      return;
    }
    if (infoWindow) {
      infoWindow?.setMap(null);
    }

    const pos = convertToCoord(position);

    if (!Children.only(children)) {
      console.error("children 최상위 노드는 하나로 구성되어야합니다.");
      return;
    }

    const info = new naver.maps.InfoWindow({
      content: ReactNodeToStaticHTMLElement(children) || "",
      position: pos,
      anchorColor,
      anchorSize,
      anchorSkew,
      backgroundColor,
      borderColor,
      borderWidth,
      disableAnchor,
      disableAutoPan,
      maxWidth,
      pixelOffset,
      zIndex,
    });
    info.open(naverMap);

    setInfoWindow(info);

    return () => {
      info.setMap(null);
    };
  }, [
    naverMap,
    position,
    anchorColor,
    anchorSize,
    anchorSkew,
    backgroundColor,
    borderColor,
    borderWidth,
    disableAnchor,
    disableAutoPan,
    maxWidth,
    pixelOffset,
    zIndex,
  ]);

  useImperativeHandle(
    ref,
    () => {
      return infoWindow;
    },
    [infoWindow]
  );

  return <></>;
});

export default InfoWindow;
