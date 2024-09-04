import React, { forwardRef, useImperativeHandle, useState } from "react";
import type { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";
import NaverApiLoader from "../api/NaverScriptLoader";
import type { MapEventFunctionType } from "../@types/NaverEvent";
import useMapEffect from "../hooks/useMapEffect";
import useNaverEvent from "../hooks/useNaverEvent";

type MapProps = PropsWithChildren<
  {
    mapId: string;
    mapOptions?: naver.maps.MapOptions;
    style?: CSSProperties;
    className?: HTMLAttributes<HTMLDivElement>["className"];
  } & MapEventFunctionType
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
    <div id={mapId} style={style} className={className}>
      {children}
    </div>
  );
});

export default Map;
