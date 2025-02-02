---
sidebar_position: 1
---

# 설치

react-naver-map-sdk는 npm, yarn, pnpm과 같은 패키지 매니저를 통해 쉽게 설치할 수 있습니다.

## 패키지 설치

:::tip
다음 명령어 중 하나를 사용하여 react-naver-map-sdk를 설치할 수 있습니다:
:::

```bash
npm install react-naver-map-sdk
# or
yarn add react-naver-map-sdk
# or
pnpm add react-naver-map-sdk
```

## 기본 사용 예제

:::info
아래는 react-naver-map-sdk를 사용한 간단한 예제입니다:
:::

```jsx
import NaverMapProvider, Map, Marker from 'react-naver-map-sdk';

function SimpleMap() {
  return (
    <NaverMapProvider client={process.env.REACT_APP_NAVER_API_KEY}>
      <Map
        mapId="my-map"
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

이 예제에서는 `NaverMapProvider`로 애플리케이션을 감싸고, 그 안에 `Map` 컴포넌트를 사용하여 지도를 렌더링합니다. `Marker` 컴포넌트를 사용하여 지도 위에 마커를 표시하고 있습니다.

:::caution
실제 사용 시에는 `REACT_APP_NAVER_API_KEY`를 여러분의 NAVER Maps API 키로 교체해야 합니다.
:::

## 다음 단계

:::note
이제 react-naver-map-sdk가 설치되었고 기본적인 사용법을 알아보았습니다. 더 자세한 사용법과 고급 기능은 [예제](../sample/)를 참조하세요.
:::
