import { DependencyList, EffectCallback, useEffect } from "react";
import NaverApiLoader from "../api/NaverScriptLoader";
import { useNaverMapIsLoaded } from "../contexts/naverMapLoadContext";

/**
 * naver map script가 로드되는 시점이 첫 동작입니다.
 * @param effect - deps가 변경될 경우 MapScript가 로드된 후 한번 실행 될 effect
 * @param deps - deps가 존재한 경우에, list의 값이 변경될 경우 effect를 실행시킵니다
 */
const useMapEffect = (effect: EffectCallback, deps: DependencyList = []) => {
  const isMapLoaded = useNaverMapIsLoaded();
  useEffect(() => {
    if (!NaverApiLoader.instance) {
      return;
    }
    effect();
  }, [isMapLoaded, ...deps]);
};

export default useMapEffect;
