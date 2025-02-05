---
sidebar_position: 7
---

# Ellipse

`Ellipse` 컴포넌트는 타원 모양의 폴리곤을 정의합니다.

## Properties

<div className="api-table">
| Name | Type | Argument | Default | Description |
|------|------|-----------|---------|------|
| `bounds` | `naver.maps.Bounds \| naver.maps.BoundsLiteral` | required |  | 타원이 그려질 영역의 경계 좌표입니다. |
| `strokeWeight` | `number` | optional | 1 | 선의 두께입니다. |
| `strokeOpacity` | `number` | optional | 1 | 선의 불투명도입니다. |
| `strokeColor` | `string` | optional | #007EEA | 선의 색상입니다. |
| `strokeStyle` | `string` | optional | solid | 선의 스타일입니다. |
| `strokeLineCap` | `string` | optional | butt | 선의 끝 모양입니다. |
| `strokeLineJoin` | `string` | optional | miter | 선의 연결 모양입니다. |
| `fillColor` | `string` | optional | none | 채우기 색상입니다. |
| `fillOpacity` | `number` | optional | 1 | 채우기 불투명도입니다. |
| `clickable` | `boolean` | optional | false | 타원의 클릭 허용 여부를 설정합니다. |
| `visible` | `boolean` | optional | true | 타원의 노출 허용 여부를 설정합니다. |
| `zIndex` | `number` | optional | 0 | 타원의 쌓임 순서를 설정합니다. |
</div>

## Events

:::tip
모든 이벤트 핸들러는 이벤트 객체를 첫 번째 인자로, 해당 `Ellipse` 인스턴스를 두 번째 인자로 받습니다.<br/>
또한, 모든 이벤트 뒤에 `Once`를 붙여서 (예: `onClickOnce`) 해당 이벤트를 한 번만 실행되도록 설정할 수 있습니다.
:::

### onBoundsChanged
타원의 영역이 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `bounds` | [naver.maps.Bounds](https://navermaps.github.io/maps.js.ncp/docs/global.html#Bounds) | 변경된 영역 정보 |
</div>

### onClick
타원을 클릭했을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onClickableChanged
타원의 클릭 허용 여부가 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `clickable` | `boolean` | 변경된 클릭 허용 여부 |
</div>

### onDblClick
타원을 더블클릭했을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onMouseDown
타원에서 마우스 버튼을 눌렀을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onMouseOut
마우스가 타원 영역을 벗어났을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onMouseOver
마우스가 타원 영역에 진입했을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onMouseUp
타원에서 마우스 버튼을 놓았을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onVisibleChanged
타원의 노출 허용 여부가 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `visible` | `boolean` | 변경된 노출 허용 여부 |
</div>

### onZIndexChanged
타원의 쌓임 순서가 변경되었을 때 발생하는 이벤트입니다.

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
- `Ellipse` 컴포넌트는 반드시 `Map` 컴포넌트 내부에 위치해야 합니다.
- 많은 수의 타원을 사용할 경우 성능에 영향을 줄 수 있으므로, 필요한 경우 최적화 기법을 적용해야 합니다.
:::

- `bounds` prop은 `naver.maps.Bounds` 또는 `naver.maps.BoundsLiteral` 타입을 받을 수 있습니다. 내부적으로 적절한 타입으로 변환됩니다.
- 타원의 스타일이나 동작을 변경하려면, 해당하는 prop을 업데이트 하면 됩니다. react-naver-map-sdk는 내부적으로 변경사항을 감지하고 타원을 업데이트합니다.

더 자세한 정보는 [NAVER Maps API v3 공식 문서](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Ellipse.html)를 참조하세요.
