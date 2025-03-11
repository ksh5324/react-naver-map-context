import { createContext, useContext } from "react";
import type { NaverMapProps } from "../@types/naverMap";
import type { PlatFormType } from "../@types/platform";

export const NaverMapLoadContext = createContext(false);
export const useNaverMapIsLoaded = () => useContext(NaverMapLoadContext);

export const NaverMapClientContext = createContext<NaverMapProps<PlatFormType>["client"] | null>(null);
export const useNaverMapClient = () => {
  const client = useContext(NaverMapClientContext);
  if (!client) {
    throw new Error("NaverMapProvider가 설정되지 않았습니다.");
  }
  return client;
};
