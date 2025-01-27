---
sidebar_position: 2
---

# Polyline

`Polyline` 컴포넌트는 폴리라인을 정의합니다.

## Properties

<div className="api-table">
| Name | Type | Argument | Default | Description |
|------|------|-----------|---------|------|
| `path` | `(LatLng \| Point \| naver.maps.Coord)[]` | required |  | 폴리라인을 구성하는 좌표들의 배열입니다. |
| `clickable` | `boolean` | optional | `false` | 폴리라인의 클릭 허용 여부를 설정합니다. |
| `endIcon` | `string` | optional |  | 폴리라인의 끝 부분에 표시할 아이콘의 URL입니다. |
| `endIconSize` | `number` | optional |  | 폴리라인의 끝 부분 아이콘의 크기를 설정합니다. |
| `startIcon` | `string` | optional |  | 폴리라인의 시작 부분에 표시할 아이콘의 URL입니다. |
| `startIconSize` | `number` | optional |  | 폴리라인의 시작 부분 아이콘의 크기를 설정합니다. |
| `strokeColor` | `string` | optional | #007EEA | 폴리라인의 색상을 설정합니다. |
| `strokeLineCap` | `string` | optional | `butt` | 폴리라인의 끝 부분 모양을 설정합니다. |
| `strokeLineJoin` | `string` | optional | `miter` | 폴리라인이 꺾이는 부분의 모양을 설정합니다. |
| `strokeOpacity` | `number` | optional | 1 | 폴리라인의 투명도를 설정합니다. |
| `strokeWeight` | `number` | optional | 1 | 폴리라인의 두께를 설정합니다. |
| `strokeStyle` | `string` | optional | `solid` | 폴리라인의 스타일을 설정합니다. |
| `visible` | `boolean` | optional | `true` | 폴리라인의 노출 허용 여부를 설정합니다. |
| `zIndex` | `number` | optional | 0 | 폴리라인의 쌓임 순서를 설정합니다. |
</div>

## Events

:::tip
모든 이벤트 핸들러는 이벤트 객체를 첫 번째 인자로, 해당 `Polyline` 인스턴스를 두 번째 인자로 받습니다.<br/>
또한, 모든 이벤트 뒤에 `Once`를 붙여서 (예: `onClickOnce`) 해당 이벤트를 한 번만 실행되도록 설정할 수 있습니다.
:::

### onClick
폴리라인을 클릭했을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onClickableChanged
폴리라인의 클릭 허용 여부 옵션이 변경되면 이벤트가 발생합니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `clickable` | `boolean` | 폴리라인의 클릭 허용 여부 |
</div>

### onDblclick
폴리라인을 더블 클릭했을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onMousedown
폴리라인에서 마우스 버튼을 눌렀을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onMouseout
마우스가 폴리라인 영역을 벗어났을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onMouseup
폴리라인에서 마우스 버튼을 놓았을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | [naver.maps.PointerEvent](https://navermaps.github.io/maps.js.ncp/docs/global.html#PointerEvent) | 포인터 이벤트 객체 |
</div>

### onVisibleChanged
폴리라인의 노출 허용 여부 옵션이 변경되면 이벤트가 발생합니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `visible` | `boolean` | 폴리라인의 노출 허용 여부 |
</div>

### onZIndexChanged
폴리라인의 쌓임 순서 옵션이 변경되면 이벤트가 발생합니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `zIndex` | `number` | 폴리라인의 쌓임 순서 |
</div>

## 사용 예제

:::note
자세한 사용 예제는 [예제 페이지](../sample/)를 참조하세요.
:::

## 참고사항

:::caution

- `Polyline` 컴포넌트는 반드시 `Map` 컴포넌트 내부에 위치해야 합니다.
- 복잡한 폴리라인이나 많은 수의 폴리라인을 사용할 경우 성능에 영향을 줄 수 있으므로, 필요한 경우 최적화 기법을 적용해야 합니다.
:::

- `path` prop은 `LatLng`, `Point`, 또는 `naver.maps.Coord` 타입의 배열을 받을 수 있습니다. 내부적으로 적절한 타입으로 변환됩니다.
- 폴리라인의 스타일이나 동작을 변경하려면, 해당하는 prop을 업데이트 하면 됩니다. react-naver-map-sdk는 내부적으로 변경사항을 감지하고 폴리라인을 업데이트합니다.

더 자세한 정보는 [NAVER Maps API v3 공식 문서](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Polyline.html)를 참조하세요.
