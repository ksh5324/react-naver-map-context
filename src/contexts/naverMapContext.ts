import { createContext, useContext } from "react";

export const NaverMapContext = createContext<{
  map: naver.maps.Map | undefined;
} | null>(null);

export const useNaverMap = () => {
  const naverMap = useContext(NaverMapContext);
  if (!naverMap) throw Error("Map 컴포넌트로 감싸주세요");
  return naverMap.map;
};
