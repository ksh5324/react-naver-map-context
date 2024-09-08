import { createContext, useContext } from "react";

export const NaverMapLoadContext = createContext(false);
export const useNaverMapIsLoaded = () => useContext(NaverMapLoadContext);
