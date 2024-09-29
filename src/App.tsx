import NaverMapProvider from "./components/NaverMapProvider";
import PolylineTest from "./test/PolylineTest";

function App() {
  return (
    <NaverMapProvider client={process.env.REACT_APP_NAVER_API_KEY!}>
      <PolylineTest />
    </NaverMapProvider>
  );
}

export default App;
