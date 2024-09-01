import type { PlatFormType, PlatFormURL } from "../@types/platform";
import type { NaverMapProps } from "../@types/naverMap";

class NaverApiLoader<T extends PlatFormType = "ncp"> {
  private readonly clientKey: string | undefined;
  private readonly platform: T | undefined;
  public static instance: typeof naver.maps;
  private readonly platFormURL: PlatFormURL<T> | undefined;
  private static isAddNaverScript: boolean = false;

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
      this.platFormURL = `https://oapi.map.naver.com/openapi/v3/maps.js?${
        this.platform
      }ClientId=${this.clientKey}${
        client.submodule && `&submodule=${client.submodule.join(",")}`
      }${client.lang && `&language=${client.lang}`}`;
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
    const that = this;
    function l() {
      if (NaverApiLoader.instance || NaverApiLoader.isAddNaverScript) {
        console.warn("load된 naver map script가 존재합니다.");
        return;
      }
      NaverApiLoader.isAddNaverScript = true;
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = that.platFormURL || "";
      script.defer = true;
      script.async = true;
      script.addEventListener("error", (e: ErrorEvent) => {
        NaverApiLoader.isAddNaverScript = false;
        callback(e);
      });
      script.addEventListener("load", () => {
        NaverApiLoader.instance = window.naver.maps;
        callback();
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
