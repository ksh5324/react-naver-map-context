A React library for Naver Maps with Context API integration.

<div align="center">
  <h1>react-naver-map-context</h1>
  <p>React library for <a href="https://navermaps.github.io/maps.js.ncp/docs/index.html" alt="naver maps api">Naver Maps API</a></p>
  <p>
    <a href="https://www.npmjs.com/package/react-naver-map-sdk"><img alt="version" src="https://img.shields.io/npm/v/react-naver-map-sdk" /></a>
    <a href="https://www.npmjs.com/package/react-naver-map-sdk"><img alt="npm dm" src="https://img.shields.io/npm/dm/react-naver-map-sdk" /></a>
    <img alt="license" src="https://img.shields.io/npm/l/react-naver-map-sdk" />
  </p>
</div>

## Core Concepts

- Declarative and intuitive component-based API
- Automatic script loading - NaverMapProvider loads the Naver Maps API when needed
- Full TypeScript support with type safety

## Installation

```bash
npm install react-naver-map-context
# or
yarn add react-naver-map-context
# or
pnpm add react-naver-map-context
```

## Usage

The library provides a simple way to integrate Naver Maps into your React application. Wrap your app with `NaverMapProvider` and use the map components as needed.

```jsx
import { NaverMapProvider, Map, Marker } from 'react-naver-map-context';

function App() {
  return (
    <NaverMapProvider clientId="YOUR_CLIENT_ID">
      <Map mapId="123">
        <Marker position={{ lat: 37.3595704, lng: 127.105399 }}/>
      </Map>
    </NaverMapProvider>
  );
}
```

All components must be used within the `NaverMapProvider` context. The provider handles the Naver Maps script loading and context initialization.

## Documentation

For detailed usage and examples, please refer to our [official documentation](https://docsurl.com).

## Examples

- [Basic Map](examples/basic-map)
- [Using Markers](examples/markers)
- [Handling Events](examples/events)

## Contributing

If you find a bug or have a feature request, please follow these steps:

1. Create a new issue
2. Create a new branch for your issue (`git checkout -b feature/issue-number`)
3. Make your changes
4. Commit your changes (`git commit -m 'feat: brief description'`)
5. Push the branch (`git push origin feature/issue-number`)
6. Create a Pull Request

### Local Development

Local development is broken into two parts (ideally using two tabs).

#### 1. Library Development Server

First, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes:

```bash
npm start # runs rollup with watch flag
```

#### 2. Example App Development Server

Second, run the example app in `examples/` directory that's linked to the local version of your module:

```bash
# in another tab
cd examples
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your library in `src/` or to the example app's `examples/src`, it will live-reload your local dev server.

#### Manual Link Installation

If you get the error `Module not found: Can't resolve 'react-naver-map-context'` while trying to run the example app, you need to manually link your local development module:

1. In the root folder:
```bash
npm link
```

2. Go into `examples/` and (after installing other dependencies):
```bash
npm link react-naver-map-context
```

## License

MIT © Seohyeon Kim, Seonghun Kang
