import { PropsWithChildren } from "react";
import {
  EventProps,
  InfoWindowEventFunctionType,
} from "../../@types/NaverEvent";
import { LatLng, Point } from "../Marker/types";

export type InfoWindowProps = PropsWithChildren<
  Omit<naver.maps.InfoWindowOptions, "content" | "position"> & {
    position: LatLng | Point | naver.maps.Coord;
  }
> &
  EventProps<InfoWindowEventFunctionType, naver.maps.InfoWindow>;
