import { forwardRef, useImperativeHandle, useMemo, useState } from "react";
import NaverApiLoader from "../../api/NaverScriptLoader";
import useMapEffect from "../../hooks/useMapEffect";
import useNaverEvent from "../../hooks/useNaverEvent";
import { NaverMapContext } from "../../contexts/naverMapContext";

import type { MapProps } from "./types";

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

  useNaverEvent(maps, Events);

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
    <NaverMapContext.Provider value={naverMapProvidervalue}>
      <div id={mapId} style={style} className={className}>
        {children}
      </div>
    </NaverMapContext.Provider>
  );
});

export default Map;
