import { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";
import { OptionalRecord } from "../../@types/generic";
import { NaverEventFunctionObject } from "../../@types/NaverEvent";

export type MapProps = PropsWithChildren<
  {
    mapId: string;
    mapOptions?: naver.maps.MapOptions;
    style?: CSSProperties;
    className?: HTMLAttributes<HTMLDivElement>["className"];
  } & OptionalRecord<keyof NaverEventFunctionObject, (e: any) => any>
>;
