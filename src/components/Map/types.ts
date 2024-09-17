import { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";
import { OptionalRecord } from "../../@types/generic";
import { MapEventFunctionType } from "../../@types/NaverEvent";

export type MapProps = PropsWithChildren<
  {
    mapId: string;
    mapOptions?: naver.maps.MapOptions;
    style?: CSSProperties;
    className?: HTMLAttributes<HTMLDivElement>["className"];
  } & OptionalRecord<keyof MapEventFunctionType, (e: any) => any>
>;
