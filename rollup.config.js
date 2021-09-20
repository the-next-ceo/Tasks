import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
//import autoProcess from 'svelte-preprocess';
import resolve, { nodeResolve } from '@rollup/plugin-node-resolve';
//import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';
import typescript from 'rollup-plugin-typescript2';
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/webview/main.ts',
	output: {
		//sourcemap: false,
		format: 'iife',
		name: 'app',
		file: 'out/compiled/bundle.js'
	},
	plugins: [
		svelte({

			// enable run-time checks when not in production
			dev: !production,

			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: (css) => {
				css.write('out/compiled/bundle.css');
			},
			preprocess: sveltePreprocess(),
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte'],
			
		}
		['.js', '.ts', '.svelte'],),
		
		commonjs(),

		typescript({
			tsconfig: "src/webview/tsconfig.json",
			sourceMap: !production,
			//inlineSourceMap: !production,
			inlineSources: !production,
			rootDir: './src',
		}),
		// In dev mode, call `npm run start` once
		// the bundle has been generated
		//!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		//production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};