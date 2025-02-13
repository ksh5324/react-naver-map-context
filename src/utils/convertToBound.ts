import type { LatLng, Point } from "../components/Marker/types";
import { isLatLng, isPoint } from "./locationTypeGuards";

export type BoundsInput = {
  ne: LatLng | Point;
  sw: LatLng | Point;
} | naver.maps.Bounds;

type BoundsOutput = naver.maps.Bounds | naver.maps.BoundsLiteral;

export function convertToBound(bounds: BoundsInput): BoundsOutput {
  // 이미 네이버 지도 Bounds 객체인 경우 그대로 반환
  if (bounds instanceof naver.maps.LatLngBounds || bounds instanceof naver.maps.PointBounds) {
    return bounds;
  }

  // 위경도 좌표인 경우 LatLngBounds로 변환
  if (isLatLng(bounds.ne) && isLatLng(bounds.sw)) {
    const ne = new naver.maps.LatLng(bounds.ne.lat, bounds.ne.lng);
    const sw = new naver.maps.LatLng(bounds.sw.lat, bounds.sw.lng);
    return new naver.maps.LatLngBounds(sw, ne);
  }

  // 픽셀 좌표인 경우 PointBounds로 변환
  if (isPoint(bounds.ne) && isPoint(bounds.sw)) {
    const ne = new naver.maps.Point(bounds.ne.x, bounds.ne.y);
    const sw = new naver.maps.Point(bounds.sw.x, bounds.sw.y);
    return new naver.maps.PointBounds(sw, ne);
  }

  throw new Error("Invalid bounds");
}
