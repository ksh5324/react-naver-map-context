import type { OptionalRecord } from "../../@types/generic";
import type { PolygonEventFunctionType } from "../../@types/NaverEvent";
import type { LatLng, Point } from "../Marker/types";

export type PolygonProps = PolygonOptions &
  OptionalRecord<keyof PolygonEventFunctionType, (e: any) => any>;

type PolygonOptions = {
  paths: (LatLng[] | Point[])[];
} & Omit<naver.maps.PolygonOptions, "paths" | "map">;
