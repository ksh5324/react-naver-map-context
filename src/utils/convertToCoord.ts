import type { LatLng, Point } from "../components/Marker/types";
import { isLatLng } from "./isLatLng";

export function convertToCoord(position: LatLng | Point): naver.maps.Coord | naver.maps.CoordLiteral {
  if (isLatLng(position)) {
    return new naver.maps.LatLng(position.lat, position.lng);
  } else {
    return new naver.maps.Point(position.x, position.y);
  }
}