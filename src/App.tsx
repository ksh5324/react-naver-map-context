import NaverMapProvider from "./components/NaverMapProvider";
import Map from "./components/Map";
import Polygon from "./components/Polygon";
import Marker from "./components/Marker";
import { useNaverMap } from "./contexts/naverMapContext";

function App() {
  return (
    <NaverMapProvider client={process.env.REACT_APP_NAVER_API_KEY!}>
      <Map mapId="123">
        {/* <Marker position={new naver.maps.LatLng(37.3595704, 127.105399)} /> */}
      </Map>
    </NaverMapProvider>
  );
}

export default App;
