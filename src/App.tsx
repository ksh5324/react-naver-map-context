import NaverMapProvider from "./components/NaverMapProvider";
import PolylineTest from "./test/PolylineTest";
import MarkerTest from "./test/MarkerTest";
import PolygonTest from "./test/PolygonTest";
import InfoWindowTest from "./test/InfoWindowTest";

function App() {
  return (
    <NaverMapProvider client={process.env.REACT_APP_NAVER_API_KEY!}>
      {/* <PolylineTest /> */}
      {/* <MarkerTest /> */}
      {/* <PolygonTest /> */}
      <InfoWindowTest />
    </NaverMapProvider>
  );
}

export default App;
