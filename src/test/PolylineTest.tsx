import { useRef, useState } from "react";
import Map from "../components/Map";
import Marker from "../components/Marker";
import Polyline from "../components/Polyline";

declare type Map = naver.maps.Map;

const PolylineTest = () => {
  const mapRef = useRef<Map>();
  const [pathList, setPathList] = useState([
    { lat: 37.359924641705476, lng: 127.1148204803467 },
    { lat: 37.36343797188166, lng: 127.11486339569092 },
    { lat: 37.368520071054576, lng: 127.11473464965819 },
    { lat: 37.3685882848096, lng: 127.1088123321533 },
    { lat: 37.37295383612657, lng: 127.10876941680907 },
    { lat: 37.38001321351567, lng: 127.11851119995116 },
    { lat: 37.378546827477855, lng: 127.11984157562254 },
    { lat: 37.376637072444105, lng: 127.12052822113036 },
    { lat: 37.37530703574853, lng: 127.12190151214598 },
    { lat: 37.371657839593894, lng: 127.11645126342773 },
    { lat: 37.36855417793982, lng: 127.1207857131958 },
  ]);
  const clickEvent = (e: any) => {
    var point = e.latlng;
    setPathList((prev) => prev.concat(point));
  };
  const removePathList = (e: any) => {
    setPathList((prev) => prev.slice(0, prev.length - 1));
  };
  return (
    <Map ref={mapRef} mapId="123" onClick={clickEvent}>
      <Polyline path={pathList} />
      {pathList.map((path, idx) => (
        <Marker position={path} key={idx} onClick={removePathList} />
      ))}
    </Map>
  );
};

export default PolylineTest;
