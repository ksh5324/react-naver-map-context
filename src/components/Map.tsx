import React, {
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import NaverApiLoader from "../api/NaverScriptLoader";
import { MapEventFunctionType } from "../@types/NaverEvent";
import { useNaverMapIsLoaded } from "../contexts/naverMapLoad";
// import useListener from "../hooks/useListener";

type MapProps = PropsWithChildren<
  {
    mapId: string;
    mapOptions?: naver.maps.MapOptions;
    style?: CSSProperties;
    className?: HTMLAttributes<HTMLDivElement>['className'];
  } & MapEventFunctionType
>;

const Map = forwardRef<naver.maps.Map | undefined, MapProps>(function Map(
  { 
    mapId, 
    children, 
    mapOptions, 
    style = { width: "400px", height: "400px"}, 
    className, 
    ...Events
  },
  ref
) {
  const [maps, setMaps] = useState<naver.maps.Map>();
  const isLoaded = useNaverMapIsLoaded();

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
    <div id={mapId} style={style} className={className}>
      {children}
    </div>
  );
});

export default Map;
