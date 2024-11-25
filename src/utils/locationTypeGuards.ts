type LatLng = { lat: number; lng: number };
type Point = { x: number; y: number };

export function isLatLng(position: LatLng | Point): position is LatLng {
  return (position as LatLng).lat !== undefined;
}

export function isPoint(position: LatLng | Point): position is Point {
  return (position as Point).x !== undefined;
}
