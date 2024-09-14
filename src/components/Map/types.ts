import { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";
import { OptionalRecord } from "../../@types/generic";
import { NaverEventFunctionObject } from "../../@types/NaverEvent";

/** Marker를 정의하는 옵션. */
export type MapProps = PropsWithChildren<
  {
    /** 지도를 삽입할 HTML 요소의 id입니다. */
    mapId: string;
    /** 지도의 옵션 객체입니다. */
    mapOptions?: naver.maps.MapOptions;
    /** 지도 요소의 style입니다. */
    style?: CSSProperties;
    /** 지도 요소의 className입니다. */
    className?: HTMLAttributes<HTMLDivElement>["className"];
  } & OptionalRecord<keyof NaverEventFunctionObject, (e: any) => any>
>;
