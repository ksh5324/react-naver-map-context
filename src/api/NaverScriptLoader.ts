import { PlatFormType, PlatFormURL } from "../@types/platform";
import { NaverMapProps } from "../components/NaverMapProvider";

class NaverApiLoader<T extends PlatFormType = "ncp"> {
  private readonly clientKey: string | undefined;
  private readonly platform: T | undefined;
  public static instance: typeof naver.maps;
  private readonly platFormURL: PlatFormURL<T> | undefined;

  constructor({ client }: NaverMapProps<T>) {
    if (NaverApiLoader.instance || (window.naver && window.naver.maps)) {
      NaverApiLoader.instance = NaverApiLoader.instance || window.naver.maps;
      return this;
    }
    if (typeof client === "string") {
      this.clientKey = client;
      this.platform = "ncp" as T;
      this.platFormURL = `https://oapi.map.naver.com/openapi/v3/maps.js?${this.platform}ClientId=${this.clientKey}`;
    } else if (typeof client === "object") {
      this.clientKey = client.key;
      this.platform = client.platform;
      this.platFormURL = `https://oapi.map.naver.com/openapi/v3/maps.js?${this.platform}ClientId=${this.clientKey}`;
    }
  }
  public loadScript(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.naverScript((err?: ErrorEvent) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
  private naverScript(callback: (err?: ErrorEvent) => void) {
    if (NaverApiLoader.instance) {
      console.warn("load된 naver map script가 존재합니다.");
      callback();
      return;
    }
    const that = this;
    function l() {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = that.platFormURL || "";
      script.defer = true;
      script.async = true;
      script.onload = () => {
        NaverApiLoader.instance = window.naver.maps;
        callback();
      };
      script.addEventListener("error", (e: ErrorEvent) => {
        callback(e);
      });
      document.head.appendChild(script);
    }
    if (document.readyState === "complete") {
      l();
    } else {
      window.addEventListener("load", l, { once: true });
    }
  }
}

export default NaverApiLoader;
