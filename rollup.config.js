import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/tablist.ts',
    output: {
      file: 'dist/tablist.esm.js',
      format: 'es'
    },
    plugins: [
      typescript()
    ]
  },
  {
    input: 'src/tablist.ts',
    output: {
      file: 'dist/tablist.umd.js',
      format: 'umd',
      name: 'tablist',
      indent: false
    },
    plugins: [
      typescript(),
      terser()
    ]
  },
  {
    input: 'src/tablist.ts',
    output: {
      file: 'dist/tablist.global.js',
      format: 'iife'
    },
    plugins: [
      typescript(),
      terser()
    ]
  }
]
