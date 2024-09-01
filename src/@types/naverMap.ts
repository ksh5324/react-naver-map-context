import type { PropsWithChildren } from "react";
import type { LangType, PlatFormType, SubModuleType } from "./platform";

export type NaverMapProps<T extends PlatFormType> = PropsWithChildren<{
  client:
    | {
        key: string;
        platform: T;
        lang?: LangType;
        submodule?: SubModuleType[];
      }
    | string;
  callback?: VoidFunction;
}>;
