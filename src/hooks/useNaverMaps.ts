import NaverApiLoader from "../api/NaverScriptLoader";
import { useNaverMapClient } from "../contexts/naverMapLoadContext";

const useNaverMaps = () => {
  if (typeof window === "undefined") {
    throw new Error("네이버 지도는 브라우저 환경에서만 사용할 수 있습니다.");
  }

  if (window.naver?.maps) {
    return window.naver.maps;
  }

  const client = useNaverMapClient();

  if (!NaverApiLoader.instance) {
    throw new Promise((resolve) => {
      const loader = new NaverApiLoader({ client });
      loader
        .loadScript()
        .then(() => resolve(true))
        .catch((error) => {
          console.error("네이버 지도 스크립트 로드 실패:", error);
          throw error;
        });
    });
  }

  return NaverApiLoader.instance;
};

export default useNaverMaps;
