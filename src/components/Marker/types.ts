/** Marker를 정의하는 옵션. */
export type MakerOptions = {
  /** 마커가 지도에 추가될 때 시작할 애니메이션입니다. */
  animation?: naver.maps.Animation;
  //naver.maps.Coord | naver.maps.CoordLiteral
  /** 마커의 위치를 나타내는 지도 좌표입니다. */
  position: [number, number] | { x: number; y: number };
  /**
   * 마커의 모양입니다. 이 속성을 설정하지 않으면 기본 아이콘으로 설정합니다. 문자열로 입력할 때는 마커의 아이콘으로 사용할 이미지의 URL을 입력합니다.
   */
  icon?:
    | string
    | naver.maps.ImageIcon
    | naver.maps.SymbolIcon
    | naver.maps.HtmlIcon;
  /** 마커의 인터랙션 영역입니다. */
  shape?: naver.maps.MarkerShape;
  /** 마커에 마우스 오버 시 나타나는 툴팁 문자열입니다. 이 속성을 설정하지 않거나 빈 문자열로 설정하면 툴팁을 노출하지 않습니다. */
  title?: string | null;
  /** 마커에 마우스 오버 시 나타나는 포인터 모양입니다. */
  cursor?: string;
  /** 마커의 클릭 허용 여부입니다. 이 값이 false이면 마커는 사용자 인터랙션을 받지 않습니다. 또한 cursor 속성값도 반영되지 않습니다. */
  clickable?: boolean;
  /** 마커의 드래그 허용 여부입니다. 이 속성은 clickable 속성보다 우선합니다. 즉, clickable 속성이 false라도 이 값이 true이면 클릭 등의 사용자 인터랙션을 받습니다. */
  draggable?: boolean;
  /** 마커의 노출 허용 여부입니다. */
  visible?: boolean;
  /** 마커의 쌓임 순서입니다. */
  zIndex?: number;
};
