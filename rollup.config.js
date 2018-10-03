import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'
import pkg from './package.json'

export default [
	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// the `targets` option which can specify `dest` and `format`)
	{
		entry: 'src/index.js',
		targets: [
			{ dest: pkg.main, format: 'cjs' },
			{ dest: pkg.module, format: 'es' }
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			buble({
				exclude: ['node_modules/**']
			})
		],
		// indicate which modules should be treated as external
		external: ['lodash']
	}
]