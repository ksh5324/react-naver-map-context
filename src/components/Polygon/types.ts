import type {
  EventProps,
  PolygonEventFunctionType,
} from "../../@types/NaverEvent";
import type { LatLng, Point } from "../Marker/types";

export type PolygonProps = PolygonOptions &
  EventProps<PolygonEventFunctionType, naver.maps.Polygon>;

type PolygonOptions = {
  paths: (LatLng | Point | naver.maps.Coord)[][];
} & Omit<naver.maps.PolygonOptions, "paths" | "map">;
