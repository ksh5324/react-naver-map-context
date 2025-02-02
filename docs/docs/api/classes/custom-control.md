---
sidebar_position: 8
---

# CustomControl

`CustomControl` 컴포넌트는 지도 위에 사용자 정의 컨트롤을 추가할 수 있는 컴포넌트입니다.

## Properties

<div className="api-table">
| Name | Type | Argument | Default | Description |
|------|------|-----------|---------|------|
| `position` | `"TOP_LEFT" \| "TOP_CENTER" \| "TOP_RIGHT" \| "LEFT_CENTER" \| "CENTER" \| "RIGHT_CENTER" \| "BOTTOM_LEFT" \| "BOTTOM_CENTER" \| "BOTTOM_RIGHT"` | required |  | 컨트롤이 위치할 지도 상의 위치입니다. |
| `children` | `ReactNode` | required |  | 컨트롤로 표시될 React 컴포넌트입니다. |
</div>

## Position Values

컨트롤의 위치를 지정하는 `position` prop에 사용할 수 있는 값들입니다:

- `TOP_LEFT`: 지도의 좌측 상단
- `TOP_CENTER`: 지도의 중앙 상단
- `TOP_RIGHT`: 지도의 우측 상단
- `LEFT_CENTER`: 지도의 좌측 중앙
- `CENTER`: 지도의 중앙
- `RIGHT_CENTER`: 지도의 우측 중앙
- `BOTTOM_LEFT`: 지도의 좌측 하단
- `BOTTOM_CENTER`: 지도의 중앙 하단
- `BOTTOM_RIGHT`: 지도의 우측 하단

## 사용 예제

```jsx
import { CustomControl } from 'react-naver-map-sdk';

// 지도의 우측 상단에 버튼 추가
<CustomControl position="TOP_RIGHT">
  <button 
    style={{ 
      padding: '8px', 
      margin: '8px',
      backgroundColor: 'white' 
    }}
    onClick={() => alert('Custom Control Clicked!')}
  >
    Custom Button
  </button>
</CustomControl>
```

:::note
자세한 사용 예제는 [예제 페이지](../../category/sample/)를 참조하세요.
:::

## 참고사항

:::caution
- `CustomControl` 컴포넌트는 반드시 `Map` 컴포넌트 내부에 위치해야 합니다.
- `children`으로 전달되는 React 컴포넌트에는 이벤트 핸들러를 직접 연결할 수 있습니다.
- 컨트롤의 스타일링은 일반적인 React 컴포넌트와 동일한 방식으로 할 수 있습니다.
:::

- 컨트롤의 위치는 `position` prop을 통해 9개의 미리 정의된 위치 중 하나로 지정할 수 있습니다.
- 여러 개의 `CustomControl`을 동일한 위치에 배치할 수 있으며, 이 경우 선언된 순서대로 배치됩니다.
- 컨트롤의 내용이나 위치를 변경하려면, 해당하는 prop을 업데이트 하면 됩니다. react-naver-map-sdk는 내부적으로 변경사항을 감지하고 컨트롤을 업데이트합니다.

더 자세한 정보는 [NAVER Maps API v3 공식 문서](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.CustomControl.html)를 참조하세요.
