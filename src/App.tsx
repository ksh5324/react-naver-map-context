import NaverMapProvider from "./components/NaverMapProvider";
import Map from "./components/Map";

function App() {
  return (
    <NaverMapProvider client={process.env.REACT_APP_NAVER_API_KEY!}>
      <Map mapId="123" />
    </NaverMapProvider>
  );
}

export default App;
