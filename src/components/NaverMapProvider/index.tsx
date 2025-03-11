import { useEffect, Suspense } from "react";
import NaverApiLoader from "../../api/NaverScriptLoader";
import { NaverMapLoadContext, NaverMapClientContext } from "../../contexts/naverMapLoadContext";
import { useNaverMapProvider } from "./hooks";

import type { PlatFormType } from "../../@types/platform";
import type { NaverMapProps } from "../../@types/naverMap";

const NaverMapProvider = <T extends PlatFormType>({
  client,
  callback,
  children,
}: NaverMapProps<T>) => {
  const { isLoaded, naverMapApiReady } = useNaverMapProvider();

  useEffect(() => {
    new NaverApiLoader<T>({
      client,
    })
      .loadScript()
      .then(() => {
        naverMapApiReady();
        callback && callback();
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <NaverMapClientContext.Provider value={client}>
      <NaverMapLoadContext.Provider value={isLoaded}>
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </NaverMapLoadContext.Provider>
    </NaverMapClientContext.Provider>
  );
};

export default NaverMapProvider;
