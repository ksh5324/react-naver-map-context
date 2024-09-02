import {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useState,
} from "react";
import NaverApiLoader from "../api/NaverScriptLoader";
import { MapEventFunctionType } from "../@types/NaverEvent";
import useMapEffect from "../hooks/useMapEffect";

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

  useMapEffect(() => {
    setMaps(new NaverApiLoader.instance.Map(mapId, mapOptions));

    return () => {
      maps?.destroy();
    };
  });

  useImperativeHandle(
    ref,
    () => {
      return maps;
    },
    [maps]
  );

  return (
    <div style={{ width: "400px", height: "400px" }} id={mapId}>
      {children}
    </div>
  );
});

export default Map;
