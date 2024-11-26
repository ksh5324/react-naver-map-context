import type {
  EventProps,
  EllipseEventFunctionType,
} from "../../@types/NaverEvent";
import type { LatLng, Point } from "../Marker/types";

export type EllipseProps = EllipseOptions &
  EventProps<EllipseEventFunctionType, naver.maps.Ellipse>;

type EllipseOptions = Omit<naver.maps.EllipseOptions, "map" | "bounds"> & {
  bounds: {
    ne: LatLng | Point;
    sw: LatLng | Point;
  };
};
