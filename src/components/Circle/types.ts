import type {
  EventProps,
  CircleEventFunctionType,
} from "../../@types/NaverEvent";
import { LatLng, Point } from "../Marker/types";

export type CircleProps = CircleOptions &
  EventProps<CircleEventFunctionType, naver.maps.Circle>;

type CircleOptions = Omit<naver.maps.CircleOptions, "map" | "center"> & {
  center: LatLng | Point;
};
