import { useState } from "react";

export const useNaverMapProvider = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const naverMapApiReady = () => {
    setIsLoaded(true);
  };
  return {
    isLoaded,
    naverMapApiReady,
  };
};
