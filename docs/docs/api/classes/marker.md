---
sidebar_position: 2
---

# Marker

`Marker` 컴포넌트는 지도 위에 올리는 마커를 정의합니다.

## Properties

<div className="api-table">
| Name | Type | Argument | Default | Description |
|------|------|-----------|---------|------|
| `position` | `LatLng \| Point \| naver.maps.Coord` | required |  | 마커의 위치를 나타내는 좌표입니다. |
| `animation` | `naver.maps.Animation` | optional |  | 마커가 지도에 추가될 때 시작할 애니메이션입니다. |
| `icon` | `string \| naver.maps.ImageIcon \| naver.maps.SymbolIcon \| naver.maps.HtmlIcon` | optional |  | 마커의 모양을 정의합니다. |
| `shape` | `naver.maps.MarkerShape` | optional |  | 마커의 인터랙션 영역을 정의합니다. |
| `title` | `string` | optional | `null` | 마커에 마우스 오버 시 나타나는 툴팁 문자열입니다. |
| `cursor` | `string` | optional | `'pointer'` | 마커에 마우스 오버 시 나타나는 포인터 모양입니다. |
| `clickable` | `boolean` | optional | `true` | 마커의 클릭 허용 여부를 설정합니다. |
| `draggable` | `boolean` | optional | `false` | 마커의 드래그 허용 여부를 설정합니다. |
| `visible` | `boolean` | optional | `true` | 마커의 노출 허용 여부를 설정합니다. |
| `zIndex` | `number` | optional |  | 마커의 쌓임 순서를 설정합니다. |
</div>

## Events

:::tip
모든 이벤트 핸들러는 이벤트 객체를 첫 번째 인자로, 해당 `Marker` 인스턴스를 두 번째 인자로 받습니다.<br/>
또한, 모든 이벤트 뒤에 `Once`를 붙여서 (예: `onClickOnce`) 해당 이벤트를 한 번만 실행되도록 설정할 수 있습니다.
:::

### onClick
마커를 클릭했을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onClickableChanged
마커의 클릭 허용 여부 옵션이 변경되면 이벤트가 발생합니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `clickable` | `boolean` | 마커의 클릭 허용 여부 |
</div>

### onDblclick
사용자가 마커에서 마우스 왼쪽 버튼을 더블 클릭했을 때 이벤트가 발생합니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onDraggableChanged
마커의 드래그 허용 여부 옵션이 변경되면 이벤트가 발생합니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `draggable` | `boolean` | 마커의 드래그 허용 여부 |
</div>

### onIconChanged
마커의 아이콘 옵션이 변경되면 이벤트가 발생합니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `icon` | `string \| naver.maps.ImageIcon \| naver.maps.SymbolIcon \| naver.maps.HtmlIcon` | 아이콘 객체 |
</div>

### onIcon_loaded
이미지 아이콘 로드가 완료되면 이벤트가 발생합니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `marker` | [naver.maps.Marker](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html) | 로드된 아이콘의 마커 |
</div>

### onMousedown
마커에서 마우스 버튼을 눌렀을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onMouseup
마커에서 마우스 버튼을 놓았을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onPositionChanged
마커의 위치가 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `position` | [naver.maps.Coord](https://navermaps.github.io/maps.js.ncp/docs/global.html#Coord) | 마커 위치 |
</div>

### onRightclick
마커를 우클릭했을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onTitleChanged
마커의 타이틀이 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `title` | `string` | 마커의 타이틀 |
</div>

### onTouchstart
마커를 터치했을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onTouchend
마커에서 터치가 끝났을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onVisibleChanged
마커의 노출 허용 여부 옵션이 변경되면 이벤트가 발생합니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `visible` | `boolean` | 마커의 노출 허용 여부 |
</div>

### onZIndexChanged
마커의 쌓임 순서 옵션이 변경되면 이벤트가 발생합니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `zIndex` | `number` | 마커의 쌓임 순서 |
</div>

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
- 마커의 스타일이나 동작을 변경하려면, 해당하는 prop을 업데이트 하면 됩니다. react-naver-map-sdk는 내부적으로 변경사항을 감지하고 마커를 업데이트합니다.

더 자세한 정보는 [NAVER Maps API v3 공식 문서](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html)를 참조하세요.
