import esbuild from 'rollup-plugin-esbuild';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import {createRequire} from 'module';

const packageJson = createRequire(import.meta.url)('./package.json');
const extensions = ['.ts', '.tsx'];
const external = [...Object.keys(packageJson.dependencies || {}), ...Object.keys(packageJson.peerDependencies || {})];

function getEsbuild() {
    return esbuild({
        target: 'es6',
        jsx: 'automatic',
        minify: true,
        treeShaking: true,
        tsconfig: 'tsconfig.json',
    });
}

function createDeclarationConfig(input, output) {
  return {
    input,
    output: {
      dir: output,
    },
    external,
    plugins: [
      typescript({
        declaration: true,
        emitDeclarationOnly: true,
        outDir: output,
      }),
      commonjs(),
      resolve(),
    ],
  };
}

function createESMConfig(input, output) {
  return {
    input,
    output: {
      file: output,
      format: 'esm',
    },
    external,
    plugins: [
      peerDepsExternal(),
      resolve({ extensions }),
      terser(),
      getEsbuild(),
    ],
  }
}

function createCJSConfig(input, output) {
  return {
    input,
    output: {
      file: output,
      format: 'cjs',
    },
    external,
    plugins: [
      peerDepsExternal(),
      resolve({ extensions }),
      terser(),
      getEsbuild(),
    ],
  }
}

const config = [
  createCJSConfig('src/index.ts', 'dist/index.js'),
  createESMConfig('src/index.ts', 'dist/index.esm.js'),
  createDeclarationConfig('src/index.ts', 'dist'),
];

export default config;
