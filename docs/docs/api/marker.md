---
sidebar_position: 2
---

# Marker API

`Marker` 컴포넌트는 지도 위에 특정 위치를 표시하는 데 사용됩니다. 이 컴포넌트는 NAVER Maps API의 Marker 객체를 React 환경에서 쉽게 사용할 수 있도록 래핑한 것입니다.

## Props

:::info
모든 props는 선택적이지만, `position`은 마커의 위치를 지정하기 위해 필수적으로 사용됩니다.
:::

### 주요 Props

| Prop       | 타입                                  | 설명                               |
| ---------- | ------------------------------------- | ---------------------------------- |
| `position` | `LatLng \| Point \| naver.maps.Coord` | 마커의 위치를 나타내는 좌표입니다. |

### 기타 Props

<details>
<summary>더 많은 props 보기</summary>

| Prop        | 타입                                                                             | 설명                                              |
| ----------- | -------------------------------------------------------------------------------- | ------------------------------------------------- |
| `shape`     | `naver.maps.MarkerShape`                                                         | 마커의 인터랙션 영역을 정의합니다.                |
| `title`     | `string`                                                                         | 마커에 마우스 오버 시 나타나는 툴팁 문자열입니다. |
| `cursor`    | `string`                                                                         | 마커에 마우스 오버 시 나타나는 포인터 모양입니다. |
| `clickable` | `boolean`                                                                        | 마커의 클릭 허용 여부를 설정합니다.               |
| `draggable` | `boolean`                                                                        | 마커의 드래그 허용 여부를 설정합니다.             |
| `visible`   | `boolean`                                                                        | 마커의 노출 허용 여부를 설정합니다.               |
| `zIndex`    | `number`                                                                         | 마커의 쌓임 순서를 설정합니다.                    |
| `animation` | `naver.maps.Animation`                                                           | 마커가 지도에 추가될 때 시작할 애니메이션입니다.  |
| `icon`      | `string \| naver.maps.ImageIcon \| naver.maps.SymbolIcon \| naver.maps.HtmlIcon` | 마커의 모양을 정의합니다.                         |

</details>

## 이벤트

`Marker` 컴포넌트는 다양한 이벤트를 지원합니다. 주요 이벤트는 다음과 같습니다:

:::tip
모든 이벤트 핸들러는 이벤트 객체를 첫 번째 인자로, 해당 `Marker` 인스턴스를 두 번째 인자로 받습니다.
:::

<details>
<summary>지원되는 이벤트 목록</summary>

| 이벤트 Prop    | 설명                                                 |
| -------------- | ---------------------------------------------------- |
| `onClick`      | 마커를 클릭했을 때 발생하는 이벤트입니다.            |
| `onDblClick`   | 마커를 더블 클릭했을 때 발생하는 이벤트입니다.       |
| `onRightClick` | 마커를 우클릭했을 때 발생하는 이벤트입니다.          |
| `onMouseOver`  | 마커에 마우스를 올렸을 때 발생하는 이벤트입니다.     |
| `onMouseOut`   | 마커에서 마우스가 벗어났을 때 발생하는 이벤트입니다. |
| `onDragStart`  | 마커의 드래그가 시작될 때 발생하는 이벤트입니다.     |
| `onDrag`       | 마커를 드래그 중일 때 발생하는 이벤트입니다.         |
| `onDragEnd`    | 마커의 드래그가 끝났을 때 발생하는 이벤트입니다.     |

</details>

## 사용 예제

:::note
자세한 사용 예제는 [예제 페이지](../sample/)를 참조하세요.
:::

## 참고사항

:::caution

- `Marker` 컴포넌트는 반드시 `Map` 컴포넌트 내부에 위치해야 합니다.
- 많은 수의 마커를 사용할 경우 성능에 영향을 줄 수 있으므로, 필요한 경우 최적화 기법을 적용해야 합니다.
  :::

- `position` prop은 `LatLng`, `Point`, 또는 `naver.maps.Coord` 타입을 받을 수 있습니다. 내부적으로 적절한 타입으로 변환됩니다.
- 마커의 스타일이나 동작을 변경하려면, 해당하는 prop을 업데이트 하면 됩니다. React NAVER Maps는 내부적으로 변경사항을 감지하고 마커를 업데이트합니다.

더 자세한 정보는 [NAVER Maps API v3 공식 문서](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html)를 참조하세요.
