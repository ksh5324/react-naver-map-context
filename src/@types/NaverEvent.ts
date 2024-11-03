const enum EventType {
  ADD_LAYER = "addLayer",
  BOUNDS_CHANGED = "bounds_changed",
  CENTER_CHANGED = "center_changed",
  CENTER_POINT_CHANGED = "centerPoint_changed",
  CLICK = "click",
  CLICKABLE_CHANGED = "clickable_changed",
  DBL_CLICK = "dblclick",
  DOUBLE_TAP = "doubletap",
  DRAG = "drag",
  DRAGGABLE_CHANGED = "draggable_changed",
  DRAG_END = "dragend",
  DRAG_START = "dragstart",
  ICON_CHANGED = "icon_changed",
  ICON_LOADED = "icon_loaded",
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
  POSITION_CHANGED = "position_changed",
  PROJECTION_CHANGED = "projection_changed",
  REMOVE_LAYER = "removeLayer",
  RESIZE = "resize",
  RIGHT_CLICK = "rightclick",
  SIZE_CHANGED = "size_changed",
  TAP = "tap",
  TILES_LOADED = "tilesloaded",
  TITLE_CHANGED = "title_changed",
  TOUCH_END = "touchend",
  TOUCH_MOVE = "touchmove",
  TOUCH_START = "touchstart",
  TWO_FINGER_TAP = "twofingertap",
  VISABLE_CHANGED = "visible_changed",
  ZINDEX_CHANGED = "zIndex_changed",
  ZOOM_CHANGED = "zoom_changed",
  ZOOM_END = "zoomend",
  ZOOM_START = "zoomstart",
  ANCHORCOLOR_CHANGED = "anchorColor_changed",
  ANCHORSIZE_CHANGED = "anchorSize_changed",
  ANCHORSKEW_CHANGED = "anchorSkew_changed",
  BACKGROUNDCOLOR_CHANGED = "backgroundColor_changed",
  BORDERCOLOR_CHANGED = "borderColor_changed",
  BORDERWIDTH_CHANGED = "borderWidth_changed",
  CLOSE = "close",
  CONTENT_CHANGED = "content_changed",
  DISABLEANCHOR_CHANGED = "disableAnchor_changed",
  DISABLEAUTOPAN_CHANGED = "disableAutoPan_changed",
  MAXWIDTH_CHANGED = "maxWidth_changed",
  OPEN = "open",
  PIXELOFFSET_CHANGED = "pixelOffset_changed",
}
type EventParamType = {
  [EventType.ADD_LAYER]: naver.maps.Layer;
  [EventType.BOUNDS_CHANGED]: naver.maps.Bounds;
  [EventType.CENTER_CHANGED]: naver.maps.Coord;
  [EventType.CENTER_POINT_CHANGED]: naver.maps.Point;
  [EventType.CLICK]: naver.maps.PointerEvent;
  [EventType.CLICKABLE_CHANGED]: boolean;
  [EventType.DBL_CLICK]: naver.maps.PointerEvent;
  [EventType.DOUBLE_TAP]: naver.maps.PointerEvent;
  [EventType.DRAG]: naver.maps.PointerEvent;
  [EventType.DRAGGABLE_CHANGED]: boolean;
  [EventType.DRAG_END]: naver.maps.PointerEvent;
  [EventType.DRAG_START]: naver.maps.PointerEvent;
  [EventType.ICON_CHANGED]:
    | string
    | naver.maps.ImageIcon
    | naver.maps.SymbolIcon
    | naver.maps.HtmlIcon;
  [EventType.ICON_LOADED]: naver.maps.Marker;
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
  [EventType.POSITION_CHANGED]: naver.maps.Coord;
  [EventType.PROJECTION_CHANGED]: naver.maps.Projection;
  [EventType.REMOVE_LAYER]: string;
  [EventType.RESIZE]: never;
  [EventType.RIGHT_CLICK]: naver.maps.PointerEvent;
  [EventType.SIZE_CHANGED]: naver.maps.Size;
  [EventType.TAP]: naver.maps.PointerEvent;
  [EventType.TILES_LOADED]: never;
  [EventType.TITLE_CHANGED]: string;
  [EventType.TOUCH_END]: naver.maps.PointerEvent;
  [EventType.TOUCH_MOVE]: naver.maps.PointerEvent;
  [EventType.TOUCH_START]: naver.maps.PointerEvent;
  [EventType.TWO_FINGER_TAP]: naver.maps.PointerEvent;
  [EventType.VISABLE_CHANGED]: boolean;
  [EventType.ZINDEX_CHANGED]: number;
  [EventType.ZOOM_CHANGED]: number;
  [EventType.ZOOM_END]: never;
  [EventType.ZOOM_START]: never;
  [EventType.ANCHORCOLOR_CHANGED]: string;
  [EventType.ANCHORSIZE_CHANGED]: naver.maps.Size;
  [EventType.ANCHORSKEW_CHANGED]: boolean;
  [EventType.BACKGROUNDCOLOR_CHANGED]: string;
  [EventType.BORDERCOLOR_CHANGED]: string;
  [EventType.BORDERWIDTH_CHANGED]: number;
  [EventType.CLOSE]: naver.maps.PointerEvent;
  [EventType.CONTENT_CHANGED]: HTMLElement;
  [EventType.DISABLEANCHOR_CHANGED]: boolean;
  [EventType.DISABLEAUTOPAN_CHANGED]: boolean;
  [EventType.MAXWIDTH_CHANGED]: number;
  [EventType.OPEN]: naver.maps.PointerEvent;
  [EventType.PIXELOFFSET_CHANGED]: naver.maps.Point;
};
type OnEventListener<T extends string> = T extends `${infer R}${infer Rest}`
  ?
      | `on${Uppercase<R>}${Rest extends `${infer R}_changed`
          ? `${R}Changed`
          : Rest}`
      | `on${Uppercase<R>}${Rest extends `${infer R}_changed`
          ? `${R}Changed`
          : Rest}Once`
  : `on${Uppercase<T>}`;

type RecordEventType<T extends string> = {
  [k in T as OnEventListener<k>]: EventParamType[k & keyof EventParamType];
};

type MapEventType =
  | EventType.ADD_LAYER
  | EventType.BOUNDS_CHANGED
  | EventType.CENTER_CHANGED
  | EventType.CENTER_POINT_CHANGED
  | EventType.CLICK
  | EventType.DBL_CLICK
  | EventType.DOUBLE_TAP
  | EventType.DRAG
  | EventType.DRAG_END
  | EventType.DRAG_START
  | EventType.IDLE
  | EventType.INIT
  | EventType.KEY_DOWN
  | EventType.KEY_UP
  | EventType.LONG_TAP
  | EventType.MAP_TYPE_CHANGED
  | EventType.MAP_TYPE_ID_CHANGED
  | EventType.MOUSE_DOWN
  | EventType.MOUSE_MOVE
  | EventType.MOUSE_OUT
  | EventType.MOUSE_OVER
  | EventType.MOUSE_UP
  | EventType.PANNING
  | EventType.PINCH
  | EventType.PINCH_END
  | EventType.PINCH_END
  | EventType.PINCH_START
  | EventType.PROJECTION_CHANGED
  | EventType.REMOVE_LAYER
  | EventType.RESIZE
  | EventType.RIGHT_CLICK
  | EventType.SIZE_CHANGED
  | EventType.TAP
  | EventType.TILES_LOADED
  | EventType.TOUCH_END
  | EventType.TOUCH_MOVE
  | EventType.TOUCH_START
  | EventType.TWO_FINGER_TAP
  | EventType.ZOOM_CHANGED
  | EventType.ZOOM_END
  | EventType.ZOOM_START;

type MarkerEvent =
  | EventType.CLICK
  | EventType.CLICKABLE_CHANGED
  | EventType.DBL_CLICK
  | EventType.DRAGGABLE_CHANGED
  | EventType.ICON_CHANGED
  | EventType.ICON_LOADED
  | EventType.MOUSE_DOWN
  | EventType.MOUSE_UP
  | EventType.POSITION_CHANGED
  | EventType.RIGHT_CLICK
  | EventType.TITLE_CHANGED
  | EventType.TOUCH_END
  | EventType.TOUCH_START
  | EventType.VISABLE_CHANGED
  | EventType.ZINDEX_CHANGED;

type PolylineEvent =
  | EventType.CLICK
  | EventType.DBL_CLICK
  | EventType.CLICKABLE_CHANGED
  | EventType.MOUSE_DOWN
  | EventType.MOUSE_OUT
  | EventType.MOUSE_UP
  | EventType.VISABLE_CHANGED
  | EventType.ZINDEX_CHANGED;

type PolygonEvent =
  | EventType.CLICK
  | EventType.CLICKABLE_CHANGED
  | EventType.DBL_CLICK
  | EventType.MOUSE_DOWN
  | EventType.MOUSE_OUT
  | EventType.MOUSE_OVER
  | EventType.MOUSE_UP
  | EventType.VISABLE_CHANGED
  | EventType.ZINDEX_CHANGED;

type InfoWindowEvent =
  | EventType.ANCHORCOLOR_CHANGED
  | EventType.ANCHORSIZE_CHANGED
  | EventType.ANCHORSKEW_CHANGED
  | EventType.BACKGROUNDCOLOR_CHANGED
  | EventType.BORDERCOLOR_CHANGED
  | EventType.BORDERWIDTH_CHANGED
  | EventType.CLOSE
  | EventType.CONTENT_CHANGED
  | EventType.DISABLEANCHOR_CHANGED
  | EventType.DISABLEAUTOPAN_CHANGED
  | EventType.MAXWIDTH_CHANGED
  | EventType.OPEN
  | EventType.PIXELOFFSET_CHANGED
  | EventType.POSITION_CHANGED
  | EventType.ZINDEX_CHANGED;

export type MarkerEventFunctionType = RecordEventType<MarkerEvent>;
export type PolygonEventFunctionType = RecordEventType<PolygonEvent>;
export type MapEventFunctionType = RecordEventType<MapEventType>;
export type PolylineEventFunctionType = RecordEventType<PolylineEvent>;
export type InfoWindowEventFunctionType = RecordEventType<InfoWindowEvent>;

export type EventTargetType =
  | naver.maps.Map
  | naver.maps.Marker
  | naver.maps.InfoWindow
  | naver.maps.Polygon
  | naver.maps.Polyline
  | naver.maps.Rectangle
  | naver.maps.Circle;

export type EventFunctionType<T extends EventTargetType> =
  T extends naver.maps.Map ? NaverEventFunctionObject : never;

export type NaverEventFunctionObject = RecordEventType<EventType>;
export type EventProps<
  T extends Record<string, unknown>,
  U extends EventTargetType
> = {
  [t in keyof T]?: (e: T[t], target: U) => any;
};
