import { useEffect } from "react";
import NaverApiLoader from "../../api/NaverScriptLoader";
import { NaverMapLoadContext } from "../../contexts/naverMapLoadContext";
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
    <NaverMapLoadContext.Provider value={isLoaded}>
      {children}
    </NaverMapLoadContext.Provider>
  );
};

export default NaverMapProvider;
