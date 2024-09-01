export type PlatFormType = "ncp" | "gov" | "fin";
export type PlatFormURL<T extends PlatFormType> =
  `https://oapi.map.naver.com/openapi/v3/maps.js?${T}ClientId=${string}`;
