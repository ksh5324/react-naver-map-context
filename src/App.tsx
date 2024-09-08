import NaverMapProvider from "./components/NaverMapProvider";
import Map from "./components/Map";
import Polygon from "./components/Polygon";

function App() {
  return (
    <NaverMapProvider client={process.env.REACT_APP_NAVER_API_KEY!}>
      <Map mapId="123">
        <Polygon />
      </Map>
    </NaverMapProvider>
  );
}

export default App;
