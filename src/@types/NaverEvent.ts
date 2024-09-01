const enum EventType {
  ADD_LAYER = "addLayer",
  BOUNDS_CHANGED = "bounds_changed",
  CENTER_CHANGED = "center_changed",
  CENTER_POINT_CHANGED = "centerPoint_changed",
  CLICK = "click",
  DBL_CLICK = "dblclick",
  DOUBLE_TAP = "doubletap",
  DRAG = "drag",
  DRAG_END = "dragend",
  DRAG_START = "dragstart",
  IDLE = "idle",
  INIT = "init",
  KEY_DOWN = "keydown",
  KEY_UP = "keyup",
  LONG_TAP = "longtap",
  MAP_TYPE_CHANGED = "mapType_changed",
  MAP_TYPE_ID_CHANGED = "mapTypeId_changed",
  MOUSE_DOWN = "mousedown",
  MOUSE_MOVE = "mousemove",
  MOUSE_OUT = "mouseout",
  MOUSE_OVER = "mouseover",
  MOUSE_UP = "mouseup",
  PANNING = "panning",
  PINCH = "pinch",
  PINCH_END = "pinchend",
  PINCH_START = "pinchstart",
  PROJECTION_CHANGED = "projection_changed",
  REMOVE_LAYER = "removeLayer",
  RESIZE = "resize",
  RIGHT_CLICK = "rightclick",
  SIZE_CHANGED = "size_changed",
  TAP = "tap",
  TILES_LOADED = "tilesloaded",
  TOUCH_END = "touchend",
  TOUCH_MOVE = "touchmove",
  TOUCH_START = "touchstart",
  TWO_FINGER_TAP = "twofingertap",
  ZOOM_CHANGED = "zoom_changed",
  ZOOM_END = "zoomend",
  ZOOM_START = "zoomstart",
}
type EventParamType = {
  [EventType.ADD_LAYER]: naver.maps.Layer;
  [EventType.BOUNDS_CHANGED]: naver.maps.Bounds;
  [EventType.CENTER_CHANGED]: naver.maps.Coord;
  [EventType.CENTER_POINT_CHANGED]: naver.maps.Point;
  [EventType.CLICK]: naver.maps.PointerEvent;
  [EventType.DBL_CLICK]: naver.maps.PointerEvent;
  [EventType.DOUBLE_TAP]: naver.maps.PointerEvent;
  [EventType.DRAG]: naver.maps.PointerEvent;
  [EventType.DRAG_END]: naver.maps.PointerEvent;
  [EventType.DRAG_START]: naver.maps.PointerEvent;
  [EventType.IDLE]: never;
  [EventType.INIT]: never;
  [EventType.KEY_DOWN]: KeyboardEvent;
  [EventType.KEY_UP]: KeyboardEvent;
  [EventType.LONG_TAP]: naver.maps.PointerEvent;
  [EventType.MAP_TYPE_CHANGED]: naver.maps.MapType;
  [EventType.MAP_TYPE_ID_CHANGED]: naver.maps.MapTypeId | string;
  [EventType.MOUSE_DOWN]: naver.maps.PointerEvent;
  [EventType.MOUSE_MOVE]: naver.maps.PointerEvent;
  [EventType.MOUSE_OUT]: naver.maps.PointerEvent;
  [EventType.MOUSE_OVER]: naver.maps.PointerEvent;
  [EventType.MOUSE_UP]: naver.maps.PointerEvent;
  [EventType.PANNING]: never;
  [EventType.PINCH]: naver.maps.PointerEvent;
  [EventType.PINCH_END]: naver.maps.PointerEvent;
  [EventType.PINCH_START]: naver.maps.PointerEvent;
  [EventType.PROJECTION_CHANGED]: naver.maps.Projection;
  [EventType.REMOVE_LAYER]: string;
  [EventType.RESIZE]: never;
  [EventType.RIGHT_CLICK]: naver.maps.PointerEvent;
  [EventType.SIZE_CHANGED]: naver.maps.Size;
  [EventType.TAP]: naver.maps.PointerEvent;
  [EventType.TILES_LOADED]: never;
  [EventType.TOUCH_END]: naver.maps.PointerEvent;
  [EventType.TOUCH_MOVE]: naver.maps.PointerEvent;
  [EventType.TOUCH_START]: naver.maps.PointerEvent;
  [EventType.TWO_FINGER_TAP]: naver.maps.PointerEvent;
  [EventType.ZOOM_CHANGED]: number;
  [EventType.ZOOM_END]: never;
  [EventType.ZOOM_START]: never;
};
type OnEventListener<T extends EventType> = T extends `${infer R}${infer Rest}`
  ? `on${Uppercase<R>}${Rest}`
  : `on${Uppercase<T>}`;

type RecordEventType<T extends EventType> = {
  [k in T as OnEventListener<k>]?: (
    event: EventParamType[k],
    ...args: any
  ) => any;
};
export const MapEventType = [
  EventType.ADD_LAYER,
  EventType.BOUNDS_CHANGED,
  EventType.CENTER_CHANGED,
  EventType.CENTER_POINT_CHANGED,
  EventType.CLICK,
  EventType.DBL_CLICK,
  EventType.DOUBLE_TAP,
  EventType.DRAG,
  EventType.DRAG_END,
  EventType.DRAG_START,
  EventType.IDLE,
  EventType.INIT,
  EventType.KEY_DOWN,
  EventType.KEY_UP,
  EventType.LONG_TAP,
  EventType.MAP_TYPE_CHANGED,
  EventType.MAP_TYPE_ID_CHANGED,
  EventType.MOUSE_DOWN,
  EventType.MOUSE_MOVE,
  EventType.MOUSE_OUT,
  EventType.MOUSE_OVER,
  EventType.MOUSE_UP,
  EventType.PANNING,
  EventType.PINCH,
  EventType.PINCH_END,
  EventType.PINCH_END,
  EventType.PINCH_START,
  EventType.PROJECTION_CHANGED,
  EventType.REMOVE_LAYER,
  EventType.RESIZE,
  EventType.RIGHT_CLICK,
  EventType.SIZE_CHANGED,
  EventType.TAP,
  EventType.TILES_LOADED,
  EventType.TOUCH_END,
  EventType.TOUCH_MOVE,
  EventType.TOUCH_START,
  EventType.TWO_FINGER_TAP,
  EventType.ZOOM_CHANGED,
  EventType.ZOOM_END,
  EventType.ZOOM_START,
];
export type MapEventFunctionType = RecordEventType<
  (typeof MapEventType)[number]
>;
