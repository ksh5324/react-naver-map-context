import type {
  EventProps,
  PolylineEventFunctionType,
} from "../../@types/NaverEvent";
import type { LatLng, Point } from "../Marker/types";

export type PolylineProps = {
  path: (LatLng | Point | naver.maps.Coord)[];
} & Omit<naver.maps.PolylineOptions, "path" | "map"> &
  EventProps<PolylineEventFunctionType, naver.maps.Polyline>;
