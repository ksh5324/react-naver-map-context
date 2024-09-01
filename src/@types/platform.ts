export type PlatFormType = "ncp" | "gov" | "fin";
export type PlatFormURL<T extends PlatFormType> =
  `https://oapi.map.naver.com/openapi/v3/maps.js?${ClientIdString<T>}${
    | SubModuleString
    | ""}${LangString | ""}`;
type ClientIdString<T extends PlatFormType> = `${T}ClientId=${string}`;
export type SubModuleType =
  | "panorama"
  | "drawing"
  | "geocoder"
  | "visualization";
type SubModuleString = `&submodules=${string}`;
type LangString = `&language=${LangType}`;
type LangType = "en" | "ko" | "zh" | "ja";
