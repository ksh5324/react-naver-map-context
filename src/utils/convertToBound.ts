import type { LatLng, Point } from "../components/Marker/types";
import { isLatLng, isPoint } from "./locationTypeGuards";

export function convertToBound(bounds: {
  ne: LatLng | Point;
  sw: LatLng | Point;
}): naver.maps.Bounds | naver.maps.BoundsLiteral {
  if (isLatLng(bounds.ne) && isLatLng(bounds.sw)) {
    return new naver.maps.LatLngBounds(
      new naver.maps.LatLng(bounds.sw.lat, bounds.sw.lng),
      new naver.maps.LatLng(bounds.ne.lat, bounds.ne.lng)
    );
  } else if (isPoint(bounds.ne) && isPoint(bounds.sw)) {
    return new naver.maps.PointBounds(
      new naver.maps.Point((bounds.sw as Point).x, (bounds.sw as Point).y),
      new naver.maps.Point((bounds.ne as Point).x, (bounds.ne as Point).y)
    );
  }

  throw new Error("Invalid bounds");
}
