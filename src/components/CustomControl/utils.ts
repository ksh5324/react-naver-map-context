import type { CustomControlPosition } from "./types";

export const mapCustomPositionToNaverPosition = (
  position: CustomControlPosition
): naver.maps.Position => {
  const positionMap: { [key in CustomControlPosition]: naver.maps.Position } = {
    TOP_LEFT: naver.maps.Position.TOP_LEFT,
    TOP_CENTER: naver.maps.Position.TOP_CENTER,
    TOP_RIGHT: naver.maps.Position.TOP_RIGHT,
    LEFT_CENTER: naver.maps.Position.LEFT_CENTER,
    CENTER: naver.maps.Position.CENTER,
    RIGHT_CENTER: naver.maps.Position.RIGHT_CENTER,
    BOTTOM_LEFT: naver.maps.Position.BOTTOM_LEFT,
    BOTTOM_CENTER: naver.maps.Position.BOTTOM_CENTER,
    BOTTOM_RIGHT: naver.maps.Position.BOTTOM_RIGHT,
  };
  return positionMap[position];
};
