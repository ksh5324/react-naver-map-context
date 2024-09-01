import type { PropsWithChildren } from "react";
import type { PlatFormType } from "./platform";

export type NaverMapProps<T extends PlatFormType> = PropsWithChildren<{
    client:
      | {
          key: string;
          platform: T;
        }
      | string;
    callback?: VoidFunction;
  }>;