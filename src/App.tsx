import NaverMapProvider from "./components/NaverMapProvider";
import PolylineTest from "./test/PolylineTest";
import MarkerTest from "./test/MarkerTest";
import PolygonTest from "./test/PolygonTest";
import CustomControlTest from "./test/CustomControlTest";
import InfoWindowTest from "./test/InfoWindowTest";
import CircleTest from "./test/CircleTest";

function App() {
  return (
    <NaverMapProvider client={process.env.REACT_APP_NAVER_API_KEY!}>
      {/* <PolylineTest /> */}
      {/* <MarkerTest /> */}
      {/* <PolygonTest /> */}
      {/* <CustomControlTest /> */}
      <CircleTest />
    </NaverMapProvider>
  );
}

export default App;
