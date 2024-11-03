export type CustomControlPosition =
  | "TOP_LEFT"
  | "TOP_CENTER"
  | "TOP_RIGHT"
  | "LEFT_CENTER"
  | "CENTER"
  | "RIGHT_CENTER"
  | "BOTTOM_LEFT"
  | "BOTTOM_CENTER"
  | "BOTTOM_RIGHT";

export interface CustomControlProps {
  children: React.ReactNode;
  position: CustomControlPosition;
}
