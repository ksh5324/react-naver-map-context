import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { PlatFormType } from "../@types/platform";
import NaverApiLoader from "../api/NaverScriptLoader";

export type NaverMapProps<T extends PlatFormType> = PropsWithChildren<{
  client:
    | {
        key: string;
        platform: T;
      }
    | string;
  callback?: VoidFunction;
}>;

type Context = { isLoaded: boolean; setIsLoaded: (bool: boolean) => unknown };
export const NaverContext = createContext<Context>({} as Context);

const NaverInnerProvider = <T extends PlatFormType>({
  client,
  callback,
  children,
}: NaverMapProps<T>) => {
  const { setIsLoaded } = useContext(NaverContext);
  useEffect(() => {
    new NaverApiLoader<T>({
      client,
    })
      .loadScript()
      .then(() => {
        callback && callback();
        setIsLoaded(true);
      })
      .catch((e) => console.log(e));
  }, []);
  return <>{children}</>;
};

const NaverMapProvider = <T extends PlatFormType>({
  client,
  callback,
  children,
}: NaverMapProps<T>) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <NaverContext.Provider value={{ isLoaded, setIsLoaded }}>
      <NaverInnerProvider
        client={client}
        callback={callback}
        children={children}
      />
    </NaverContext.Provider>
  );
};

export default NaverMapProvider;
