---
sidebar_position: 1
---

# Map

`Map` 컴포넌트는 네이버 지도를 표시하는 최상위 컴포넌트입니다. 모든 지도 관련 컴포넌트들은 이 컴포넌트 내부에 위치해야 합니다.

## Properties

<div className="api-table">
| Name | Type | Argument | Default | Description |
|------|------|-----------|---------|------|
| `mapId` | `string` | required |  | 지도를 삽입할 HTML 요소의 id입니다. |
| `mapOptions` | `naver.maps.MapOptions` | optional |  | 지도의 옵션 객체입니다. 지도의 중심 좌표, 줌 레벨, 최소/최대 줌 레벨 등을 설정할 수 있습니다. |
| `style` | `CSSProperties` | optional | `{ width: "400px", height: "400px" }` | 지도 요소의 스타일입니다. |
| `className` | `string` | optional |  | 지도 요소의 className입니다. |
| `children` | `ReactNode` | optional |  | 지도 위에 표시될 자식 컴포넌트들입니다. |
</div>

## MapOptions

<div className="api-table">
| Name | Type | Description |
|------|------|-------------|
| `background` | `string` | 지도의 배경색을 설정합니다. |
| `baseTileOpacity` | `number` | 기본 타일의 투명도를 설정합니다. |
| `bounds` | `naver.maps.Bounds \| naver.maps.BoundsLiteral` | 지도의 초기 영역을 설정합니다. |
| `center` | `naver.maps.Coord \| naver.maps.CoordLiteral` | 지도의 중심 좌표를 설정합니다. |
| `zoom` | `number` | 지도의 초기 줌 레벨을 설정합니다. |
| `disableDoubleClickZoom` | `boolean` | 더블 클릭 줌 기능을 비활성화합니다. |
| `disableDoubleTapZoom` | `boolean` | 더블 탭 줌 기능을 비활성화합니다. |
| `disableKineticPan` | `boolean` | 관성 패닝을 비활성화합니다. |
| `disableTwoFingerTapZoom` | `boolean` | 두 손가락 탭 줌 기능을 비활성화합니다. |
| `draggable` | `boolean` | 지도 드래그 기능을 활성화/비활성화합니다. |
| `keyboardShortcuts` | `boolean` | 키보드 단축키를 활성화/비활성화합니다. |
| `logoControl` | `boolean` | 로고 컨트롤을 표시/숨깁니다. |
| `logoControlOptions` | `naver.maps.LogoControlOptions` | 로고 컨트롤의 옵션을 설정합니다. |
| `mapDataControl` | `boolean` | 지도 데이터 컨트롤을 표시/숨깁니다. |
| `mapDataControlOptions` | `naver.maps.MapDataControlOptions` | 지도 데이터 컨트롤의 옵션을 설정합니다. |
| `mapTypeControl` | `boolean` | 지도 유형 컨트롤을 표시/숨깁니다. |
| `mapTypeControlOptions` | `naver.maps.MapTypeControlOptions` | 지도 유형 컨트롤의 옵션을 설정합니다. |
| `mapTypeId` | `string` | 지도 유형을 설정합니다. |
| `mapTypes` | `naver.maps.MapTypeRegistry` | 사용자 정의 지도 유형을 설정합니다. |
| `maxBounds` | `naver.maps.Bounds \| naver.maps.BoundsLiteral` | 지도의 최대 영역을 설정합니다. |
| `maxZoom` | `number` | 지도의 최대 줌 레벨을 설정합니다. |
| `minZoom` | `number` | 지도의 최소 줌 레벨을 설정합니다. |
| `padding` | `naver.maps.padding` | 지도의 패딩을 설정합니다. |
| `pinchZoom` | `boolean` | 핀치 줌 기능을 활성화/비활성화합니다. |
| `resizeOrigin` | `naver.maps.Position` | 지도 크기 조절 시 기준점을 설정합니다. |
| `scaleControl` | `boolean` | 축척 컨트롤을 표시/숨깁니다. |
| `scaleControlOptions` | `naver.maps.ScaleControlOptions` | 축척 컨트롤의 옵션을 설정합니다. |
| `scrollWheel` | `boolean` | 마우스 휠 줌 기능을 활성화/비활성화합니다. |
| `size` | `naver.maps.Size \| naver.maps.SizeLiteral` | 지도의 크기를 설정합니다. |
| `overlayZoomEffect` | `null \| string` | 오버레이 줌 효과를 설정합니다. |
| `tileSpare` | `number` | 타일 여유분을 설정합니다. |
| `tileTransition` | `boolean` | 타일 전환 효과를 활성화/비활성화합니다. |
| `tileDuration` | `number` | 타일 전환 시간을 설정합니다. |
| `zoomControl` | `boolean` | 줌 컨트롤을 표시/숨깁니다. |
| `zoomControlOptions` | `naver.maps.ZoomControlOptions` | 줌 컨트롤의 옵션을 설정합니다. |
| `zoomOrigin` | `naver.maps.Coord \| naver.maps.CoordLiteral` | 줌 기준점을 설정합니다. |
| `blankTileImage` | `null \| string` | 빈 타일 이미지를 설정합니다. |
</div>

## Events

:::tip
모든 이벤트 핸들러는 이벤트 객체를 첫 번째 인자로, 해당 `Map` 인스턴스를 두 번째 인자로 받습니다.<br/>
또한, 모든 이벤트 뒤에 `Once`를 붙여서 (예: `onClickOnce`) 해당 이벤트를 한 번만 실행되도록 설정할 수 있습니다.
:::

### onAddLayer
레이어가 추가되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `layer` | `naver.maps.Layer` | 추가된 레이어 |
</div>

### onBoundsChanged
지도의 영역이 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `bounds` | `naver.maps.Bounds` | 변경된 영역 정보 |
</div>

### onCenterChanged
지도의 중심 좌표가 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `center` | `naver.maps.Coord` | 변경된 중심 좌표 |
</div>

### onCenterPointChanged
지도의 중심점이 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `centerPoint` | `naver.maps.Point` | 변경된 중심점 |
</div>

### onClick
지도를 클릭했을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onDblClick
지도를 더블클릭했을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onDoubleTap
지도를 더블 탭했을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onDrag
지도를 드래그할 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onDragEnd
지도 드래그가 끝났을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onDragStart
지도 드래그가 시작될 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onIdle
지도의 모든 변경 작업이 완료되었을 때 발생하는 이벤트입니다.

### onInit
지도가 초기화되었을 때 발생하는 이벤트입니다.

### onKeyDown
지도에서 키보드 키를 눌렀을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `keyboardEvent` | `KeyboardEvent` | 키보드 이벤트 객체 |
</div>

### onKeyUp
지도에서 키보드 키를 놓았을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `keyboardEvent` | `KeyboardEvent` | 키보드 이벤트 객체 |
</div>

### onLongTap
지도를 길게 탭했을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onMapTypeChanged
지도 유형이 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `mapType` | `naver.maps.MapType` | 변경된 지도 유형 |
</div>

### onMapTypeIdChanged
지도 유형 ID가 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `mapTypeId` | `naver.maps.MapTypeId \| string` | 변경된 지도 유형 ID |
</div>

### onMouseDown
지도에서 마우스 버튼을 눌렀을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onMouseMove
지도에서 마우스를 움직일 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onMouseOut
마우스가 지도 영역을 벗어났을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onMouseOver
마우스가 지도 영역에 진입했을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onMouseUp
지도에서 마우스 버튼을 놓았을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onPanning
지도가 이동 중일 때 발생하는 이벤트입니다.

### onPinch
지도에서 핀치 제스처가 발생할 때의 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onPinchEnd
지도에서 핀치 제스처가 끝날 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onPinchStart
지도에서 핀치 제스처가 시작될 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onProjectionChanged
지도의 투영이 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `projection` | `naver.maps.Projection` | 변경된 투영 정보 |
</div>

### onRemoveLayer
레이어가 제거되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `layerId` | `string` | 제거된 레이어의 ID |
</div>

### onResize
지도의 크기가 변경될 때 발생하는 이벤트입니다.

### onRightClick
지도를 우클릭했을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onSizeChanged
지도의 크기가 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `size` | `naver.maps.Size` | 변경된 크기 정보 |
</div>

### onTap
지도를 탭했을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onTilesLoaded
지도 타일 로딩이 완료되었을 때 발생하는 이벤트입니다.

### onTouchStart
터치가 시작될 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onTouchMove
터치하여 움직일 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onTouchEnd
터치가 끝날 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onTwoFingerTap
두 손가락으로 탭했을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `pointerEvent` | `naver.maps.PointerEvent` | 포인터 이벤트 객체 |
</div>

### onZoomChanged
지도의 줌 레벨이 변경되었을 때 발생하는 이벤트입니다.

<h4>Parameters</h4>
<div className="api-table">
| Name | Type | Description |
|------|------|-----------|
| `zoom` | `number` | 변경된 줌 레벨 |
</div>

### onZoomEnd
줌 변경이 끝났을 때 발생하는 이벤트입니다.

### onZoomStart
줌 변경이 시작될 때 발생하는 이벤트입니다.

## 사용 예제

:::note
자세한 사용 예제는 [예제 페이지](../../category/sample/)를 참조하세요.
:::

## 참고사항

더 자세한 정보는 [NAVER Maps API v3 공식 문서](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Map.html)를 참조하세요.
