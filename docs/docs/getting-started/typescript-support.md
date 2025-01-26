---
sidebar_position: 2
---

# TypeScript 지원

react-naver-map-sdk는 TypeScript를 완벽하게 지원합니다. 이를 통해 개발자는 타입 안정성을 확보하고 더 나은 개발 경험을 얻을 수 있습니다.

## TypeScript 설정

:::info
react-naver-map-sdk를 TypeScript 프로젝트에서 사용하기 위해서는 추가적인 타입 정의가 필요합니다.
:::

다음 명령어를 사용하여 NAVER Maps API의 타입 정의를 설치할 수 있습니다:

```bash
npm install --save-dev @types/navermaps
# or
yarn add --dev @types/navermaps
# or
pnpm add --save-dev @types/navermaps
```

이 패키지를 설치하면 별도의 추가 설정 없이 TypeScript와 함께 react-naver-map-sdk를 사용할 수 있습니다.

## 타입 사용 예제

:::tip
TypeScript를 사용하면 컴포넌트 props와 이벤트 핸들러에 대한 타입 검사를 수행할 수 있습니다.
:::

다음은 TypeScript를 사용한 간단한 예제입니다:

```typescript
import React, { useRef } from 'react';
import { NaverMapProvider, Map, Marker } from 'react-naver-map-context';

const MapComponent: React.FC = () => {
  const mapRef = useRef<naver.maps.Map>(null);

  return (
    <NaverMapProvider client={process.env.REACT_APP_NAVER_API_KEY!}>
      <Map
        ref={mapRef}
        mapId="typescript-map"
        style={{ width: '100%', height: '400px' }}
        mapOptions={{ center: { lat: 37.3595704, lng: 127.105399 }, zoom: 10 }}
      >
        <Marker
          position={{ lat: 37.3595704, lng: 127.105399 }}
        />
      </Map>
    </NaverMapProvider>
  );
};

export default MapComponent;
```

## 타입 안정성의 이점

<details>
<summary>TypeScript 사용의 장점</summary>

- 컴파일 시점에 오류 감지
- 더 나은 코드 자동 완성과 IntelliSense 지원
- 리팩토링 시 안정성 향상
- 명시적인 타입 정의를 통한 코드 가독성 향상

</details>

react-naver-map-sdk의 모든 컴포넌트와 함수는 타입이 정의되어 있어, TypeScript 프로젝트에서 원활하게 사용할 수 있습니다.

## 추가 팁

- VSCode나 WebStorm과 같은 TypeScript를 지원하는 IDE를 사용하면, 자동 완성 기능을 통해 더욱 효율적으로 개발할 수 있습니다.
- 타입 정의 파일을 통해 NAVER Maps API의 모든 옵션과 메서드에 대한 자세한 정보를 얻을 수 있습니다.

:::caution
타입 오류가 발생하면 먼저 `@types/navermaps` 패키지가 최신 버전인지 확인하세요.
:::

TypeScript를 사용하면 react-naver-map-sdk를 더욱 안전하고 효율적으로 사용할 수 있습니다. 타입 시스템의 이점을 최대한 활용하여 높은 품질의 코드를 작성해보세요.
