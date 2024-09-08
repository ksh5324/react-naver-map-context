import { forwardRef, useImperativeHandle, useMemo, useState } from "react";
import type { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";
import NaverApiLoader from "../api/NaverScriptLoader";
import type { NaverEventFunctionObject } from "../@types/NaverEvent";
import useMapEffect from "../hooks/useMapEffect";
import useNaverEvent from "../hooks/useNaverEvent";
import { OptionalRecord } from "../@types/generic";
import { NaverMapContext } from "../contexts/naverMapContext";

type MapProps = PropsWithChildren<
  {
    mapId: string;
    mapOptions?: naver.maps.MapOptions;
    style?: CSSProperties;
    className?: HTMLAttributes<HTMLDivElement>["className"];
  } & OptionalRecord<keyof NaverEventFunctionObject, (e: any) => any>
>;

const Map = forwardRef<naver.maps.Map | undefined, MapProps>(function Map(
  {
    mapId,
    children,
    mapOptions,
    style = { width: "400px", height: "400px" },
    className,
    ...Events
  },
  ref
) {
  const [maps, setMaps] = useState<naver.maps.Map>();
  const naverMapProvidervalue = useMemo(() => ({ map: maps }), [maps]);

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

  useNaverEvent(maps, Events);

  return (
    <NaverMapContext.Provider value={naverMapProvidervalue}>
      <div id={mapId} style={style} className={className}>
        {children}
      </div>
    </NaverMapContext.Provider>
  );
});

export default Map;
