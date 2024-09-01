import NaverMapProvider from "./components/NaverMapProvider";
import Map from "./components/Map";

function App() {
  return (
    <NaverMapProvider client="">
      <Map mapId="123" />
    </NaverMapProvider>
  );
}

export default App;
