---
sidebar_position: 2
---

# Marker 사용하기

Marker는 지도 위의 특정 위치를 표시하는 데 사용되는 중요한 요소입니다. React NAVER Maps에서는 `Marker` 컴포넌트를 통해 쉽게 마커를 추가할 수 있습니다.

## 소개

`Marker` 컴포넌트는 NAVER Maps API의 마커 기능을 React 환경에서 쉽게 사용할 수 있도록 래핑한 컴포넌트입니다. 이를 통해 지도 위에 특정 위치를 표시하거나, 클릭 가능한 포인트를 생성할 수 있습니다.

## 기본 사용법

:::tip
Marker를 사용하는 가장 기본적인 방법은 다음과 같습니다:
:::

```jsx
import React from 'react';
import { NaverMapProvider, Map, Marker } from 'react-naver-map-context';

function MarkerExample() {
  return (
    <NaverMapProvider client={process.env.REACT_APP_NAVER_API_KEY}>
      <Map 
        mapId="marker-example"
        style={{ width: '100%', height: '400px' }}
        mapOptions={{ center: { lat: 37.3595704, lng: 127.105399 }, zoom: 10 }}
      >
        <Marker 
          position={{ lat: 37.3595704, lng: 127.105399 }}
        />
      </Map>
    </NaverMapProvider>
  );
}
```

이 예제에서 `Marker` 컴포넌트는 `position` prop을 통해 마커의 위치를 지정합니다.

## 주의사항

:::caution
1. `Marker` 컴포넌트는 반드시 `Map` 컴포넌트 내부에 위치해야 합니다.
2. `position` prop은 필수이며, 올바른 위도와 경도 값을 제공해야 합니다.
3. 많은 수의 마커를 사용할 경우 성능에 영향을 줄 수 있으므로, 필요한 경우 최적화 기법을 적용해야 합니다.
:::

:::note
더 자세한 사용법과 고급 기능은 [Marker API 문서](../api/marker.md)를 참조하세요.
:::
