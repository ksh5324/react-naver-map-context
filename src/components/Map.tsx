import React, {
  forwardRef,
  PropsWithChildren,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import NaverApiLoader from "../api/NaverScriptLoader";
import { MapEventFunctionType } from "../@types/NaverEvent";
import { NaverContext } from "./NaverMapProvider";
// import useListener from "../hooks/useListener";

type MapProps = PropsWithChildren<
  {
    mapId: string;
    mapOptions?: naver.maps.MapOptions;
  } & MapEventFunctionType
>;

const Map = forwardRef<naver.maps.Map | undefined, MapProps>(function Map(
  { mapId, children, mapOptions, ...Events },
  ref
) {
  const [maps, setMaps] = useState<naver.maps.Map>();
  const { isLoaded } = useContext(NaverContext);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    setMaps(new NaverApiLoader.instance.Map(mapId, mapOptions));
  }, [isLoaded]);
  // useListener(maps, Events);

  useEffect(() => {
    console.log(maps);
  }, [maps]);

  useImperativeHandle(
    ref,
    () => {
      return maps;
    },
    [maps]
  );

  useEffect(() => {
    return () => {
      maps?.destroy();
    };
  }, []);

  return (
    <div style={{ width: "400px", height: "400px" }} id={mapId}>
      {children}
    </div>
  );
});

export default Map;
