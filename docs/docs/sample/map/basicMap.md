---
sidebar_position: 1
---

# 지도 기본 예제

지도를 생성하는 가장 기본적인 예제입니다. 지도 옵션을 설정하지 않으면 다음과 같이 서울 시청을 중심으로 하는 지도가 생성됩니다.

> original docs : https://navermaps.github.io/maps.js.ncp/docs/tutorial-1-map-simple.example.html

```tsx
export default function BasicMap() {
  return (
    <NaverMapProvider client={process.env.REACT_APP_NAVER_API_KEY!}>
        //옵션 없이 지도 객체를 생성하면 서울 시청을 중심으로 하는 16 레벨의 지도가 생성됩니다.
        <Map mapId="map">
    </NaverMapProvider>
  );
}
```
