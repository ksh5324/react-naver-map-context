import type {
  EventProps,
  RectangleEventFunctionType,
} from "../../@types/NaverEvent";
import type { LatLng, Point } from "../Marker/types";

export type RectangleProps = RectangleOptions &
  EventProps<RectangleEventFunctionType, naver.maps.Rectangle>;

type RectangleOptions = Omit<naver.maps.RectangleOptions, "map" | "bounds"> & {
  bounds: {
    ne: LatLng | Point;
    sw: LatLng | Point;
  } | naver.maps.Bounds;
};
