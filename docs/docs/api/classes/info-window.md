---
sidebar_position: 4
---

# InfoWindow

`InfoWindow` 컴포넌트는 지도 위에 정보 창을 표시하는 컴포넌트입니다.

## Properties

<div className="api-table">
| Name | Type | Argument | Default | Description |
|------|------|-----------|---------|------|
| `position` | `LatLng \| Point \| naver.maps.Coord` | required |  | 정보 창이 표시될 위치 좌표입니다. |
| `anchorColor` | `string` | optional | #fff | 정보 창 꼬리 부분의 색상입니다. CSS 색상 표현법으로 설정합니다. |
| `anchorSize` | `naver.maps.Size \| naver.maps.SizeLiteral` | optional | (width: 20, height: 24) | 정보 창 꼬리 부분의 크기입니다. |
| `anchorSkew` | `boolean` | optional | false | 정보 창 꼬리 부분의 기울어짐 여부입니다. |
| `backgroundColor` | `string` | optional | #fff | 정보 창의 배경색입니다. CSS 색상 표현법으로 설정합니다. |
| `borderColor` | `string` | optional | #333 | 정보 창의 테두리 색상입니다. CSS 색상 표현법으로 설정합니다. |
| `borderWidth` | `number` | optional | 1 | 정보 창의 테두리 두께입니다. |
| `disableAnchor` | `boolean` | optional | false | 정보 창 꼬리 부분의 표시 여부입니다. |
| `disableAutoPan` | `boolean` | optional | false | 정보 창이 열릴 때 지도 중심의 자동 변경 여부입니다. |
| `maxWidth` | `number` | optional | 0 | 정보 창의 최대 너비입니다. |
| `pixelOffset` | `naver.maps.Point` | optional |  | 정보 창의 위치 오프셋입니다. |
| `zIndex` | `number` | optional | 0 | 정보 창의 쌓임 순서입니다. |
| `children` | `ReactNode` | required |  | 정보 창에 표시될 React 컴포넌트입니다. 최상위 노드는 하나여야 합니다. |
</div>

## Events

:::tip
모든 이벤트 핸들러는 이벤트 객체를 첫 번째 인자로, 해당 `InfoWindow` 인스턴스를 두 번째 인자로 받습니다.<br/>
또한, 모든 이벤트 뒤에 `Once`를 붙여서 (예: `onClickOnce`) 해당 이벤트를 한 번만 실행되도록 설정할 수 있습니다.
:::

### onAnchorColorChanged
정보 창 꼬리 부분의 색상이 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `anchorColor` | `string` | 변경된 꼬리 부분의 색상 |
</div>

### onAnchorSizeChanged
정보 창 꼬리 부분의 크기가 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `anchorSize` | `naver.maps.Size` | 변경된 꼬리 부분의 크기 |
</div>

### onAnchorSkewChanged
정보 창 꼬리 부분의 기울어짐이 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `anchorSkew` | `boolean` | 변경된 꼬리 부분의 기울어짐 여부 |
</div>

### onBackgroundColorChanged
정보 창의 배경색이 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `backgroundColor` | `string` | 변경된 배경색 |
</div>

### onBorderColorChanged
정보 창의 테두리 색상이 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `borderColor` | `string` | 변경된 테두리 색상 |
</div>

### onBorderWidthChanged
정보 창의 테두리 두께가 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `borderWidth` | `number` | 변경된 테두리 두께 |
</div>

### onClose
정보 창이 닫힐 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onContentChanged
정보 창의 내용이 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `content` | `HTMLElement` | 변경된 내용의 HTML 요소 |
</div>

### onDisableAnchorChanged
정보 창 꼬리 부분의 표시 여부가 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `disableAnchor` | `boolean` | 변경된 꼬리 부분의 표시 여부 |
</div>

### onDisableAutoPanChanged
정보 창의 자동 패닝 설정이 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `disableAutoPan` | `boolean` | 변경된 자동 패닝 설정 |
</div>

### onMaxWidthChanged
정보 창의 최대 너비가 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `maxWidth` | `number` | 변경된 최대 너비 |
</div>

### onOpen
정보 창이 열릴 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onPixelOffsetChanged
정보 창의 위치 오프셋이 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pixelOffset` | `naver.maps.Point` | 변경된 위치 오프셋 |
</div>

### onPositionChanged
정보 창의 위치가 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `position` | `naver.maps.Coord` | 변경된 위치 좌표 |
</div>

### onZIndexChanged
정보 창의 쌓임 순서가 변경되었을 때 발생하는 이벤트입니다.

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
- `InfoWindow` 컴포넌트는 반드시 `Map` 컴포넌트 내부에 위치해야 합니다.
- `children` prop으로 전달되는 React 컴포넌트의 최상위 노드는 반드시 하나여야 합니다.
:::

- `position` prop은 `LatLng`, `Point`, 또는 `naver.maps.Coord` 타입을 받을 수 있습니다. 내부적으로 적절한 타입으로 변환됩니다.
- 정보 창의 스타일이나 동작을 변경하려면, 해당하는 prop을 업데이트 하면 됩니다. react-naver-map-sdk는 내부적으로 변경사항을 감지하고 정보 창을 업데이트합니다.

더 자세한 정보는 [NAVER Maps API v3 공식 문서](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.InfoWindow.html)를 참조하세요.
