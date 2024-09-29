import NaverMapProvider from "./components/NaverMapProvider";
import MarkerTest from "./test/MarkerTest";

function App() {
  return (
    <NaverMapProvider client={process.env.REACT_APP_NAVER_API_KEY!}>
      <MarkerTest />
    </NaverMapProvider>
  );
}

export default App;
