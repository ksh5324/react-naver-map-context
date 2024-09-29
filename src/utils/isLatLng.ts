type LatLng = { lat: number; lng: number };
type Point = { x: number; y: number };

export function isLatLng(position: LatLng | Point): position is LatLng {
  return (position as LatLng).lat !== undefined;
}
