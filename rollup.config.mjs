import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  external: [
    "@jscad/modeling",
  ],
  output: [
    {
      file: 'dist/jscad-objects.min.js',
      format: 'umd',
      name: 'jscadObjects',
      globals: {
        '@jscad/modeling': 'jscadModeling',
      },
    },
    {
      file: 'dist/jscad-objects.commonjs.js',
      format: 'cjs',
      banner : 'var exports = module.exports',
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
  ]
}
