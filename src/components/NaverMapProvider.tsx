import  {
  useEffect,
  useState,
} from "react";
import type { PlatFormType } from "../@types/platform";
import type { NaverMapProps } from "../@types/naverMap";
import NaverApiLoader from "../api/NaverScriptLoader";
import { NaverMapLoadContext } from "../contexts/naverMapLoad";

const NaverMapProvider = <T extends PlatFormType>({
  client,
  callback,
  children,
}: NaverMapProps<T>) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const neverMapApiReady = () => {
    setIsLoaded(true)
  }

  useEffect(() => {
    new NaverApiLoader<T>({
      client,
    })
      .loadScript()
      .then(() => {
        callback && callback();
        neverMapApiReady();
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
