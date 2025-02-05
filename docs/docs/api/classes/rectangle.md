---
sidebar_position: 6
---

# Rectangle

`Rectangle` 컴포넌트는 사각형 모양의 폴리곤을 정의합니다.

## Properties

<div className="api-table">
| Name | Type | Argument | Default | Description |
|------|------|-----------|---------|------|
| `bounds` | `{ ne: LatLng \| Point; sw: LatLng \| Point }` | required |  | 사각형이 그려질 영역의 경계 좌표입니다. 북동(ne)과 남서(sw) 좌표를 지정합니다. |
| `strokeWeight` | `number` | optional | 1 | 선의 두께입니다. |
| `strokeOpacity` | `number` | optional | 1 | 선의 불투명도입니다. 0~1 사이의 값을 가집니다. |
| `strokeColor` | `string` | optional | #007EEA | 선의 색상입니다. CSS 색상 표현법으로 설정합니다. |
| `strokeStyle` | `string` | optional | solid | 선의 스타일입니다. solid, shortdash, shortdot, shortdashdot, shortdashdotdot, dot, dash, dashdot, longdash, longdashdot, longdashdotdot 중 하나를 사용할 수 있습니다. |
| `strokeLineCap` | `string` | optional | butt | 선의 끝 모양입니다. SVG의 stroke-linecap 스타일 표준을 따릅니다. 사용 가능한 값은 butt, round, square입니다. |
| `strokeLineJoin` | `string` | optional | miter | 선의 연결 모양입니다. SVG의 stroke-linejoin 스타일 표준을 따릅니다. 사용 가능한 값은 miter, round, bevel입니다. |
| `fillColor` | `string` | optional | none | 도형 영역을 채울 색상입니다. CSS 색상 표현법으로 설정합니다. |
| `fillOpacity` | `number` | optional | 1 | 도형 영역을 채울 색상의 불투명도입니다. 0~1 사이의 값을 가집니다. |
| `clickable` | `boolean` | optional | false | 도형의 클릭 허용 여부입니다. true로 설정하면 도형이 마우스 또는 터치 이벤트를 받을 수 있습니다. |
| `visible` | `boolean` | optional | true | 도형의 노출 허용 여부입니다. |
| `zIndex` | `number` | optional | 0 | 도형의 쌓임 순서입니다. |
</div>

## Events

:::tip
모든 이벤트 핸들러는 이벤트 객체를 첫 번째 인자로, 해당 `Rectangle` 인스턴스를 두 번째 인자로 받습니다.<br/>
또한, 모든 이벤트 뒤에 `Once`를 붙여서 (예: `onClickOnce`) 해당 이벤트를 한 번만 실행되도록 설정할 수 있습니다.
:::

### onBoundsChanged
사각형의 영역이 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `bounds` | [naver.maps.Bounds](https://navermaps.github.io/maps.js.ncp/docs/global.html#Bounds) | 변경된 영역 정보 |
</div>

### onClick
사각형을 클릭했을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onClickableChanged
사각형의 클릭 허용 여부가 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `clickable` | `boolean` | 변경된 클릭 허용 여부 |
</div>

### onDblClick
사각형을 더블클릭했을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onMouseDown
사각형에서 마우스 버튼을 눌렀을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onMouseOut
마우스가 사각형 영역을 벗어났을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onMouseOver
마우스가 사각형 영역에 진입했을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onMouseUp
사각형에서 마우스 버튼을 놓았을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onVisibleChanged
사각형의 노출 허용 여부가 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `visible` | `boolean` | 변경된 노출 허용 여부 |
</div>

### onZIndexChanged
사각형의 쌓임 순서가 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `zIndex` | `number` | 변경된 쌓임 순서 값 |
</div>

## 사용 예제

:::note
자세한 사용 예제는 [예제 페이지](../../category/sample/)를 참조하세요.
:::

## 참고사항

:::caution
- `Rectangle` 컴포넌트는 반드시 `Map` 컴포넌트 내부에 위치해야 합니다.
- 많은 수의 사각형을 사용할 경우 성능에 영향을 줄 수 있으므로, 필요한 경우 최적화 기법을 적용해야 합니다.
:::

- `bounds` prop은 북동(ne)과 남서(sw) 좌표를 받으며, 각각 `LatLng` 또는 `Point` 타입을 사용할 수 있습니다.
- 사각형의 스타일이나 동작을 변경하려면, 해당하는 prop을 업데이트 하면 됩니다. react-naver-map-sdk는 내부적으로 변경사항을 감지하고 사각형을 업데이트합니다.

더 자세한 정보는 [NAVER Maps API v3 공식 문서](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Rectangle.html)를 참조하세요.
