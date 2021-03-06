import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import fs from "fs";
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from "svelte-preprocess";
import typescript from 'rollup-plugin-typescript2';
import css from 'rollup-plugin-css-only';




const production = !process.env.ROLLUP_WATCH;

export default fs
	.readdirSync(path.join(__dirname, "webview", "ts_svelte"))
	.map((input) => {
		const name = input.split(".")[0];
		return {
			input: 'webview/ts_svelte/' + input,
			output: {
				//sourcemap: false,
				format: 'iife',
				name: 'app',
				file: 'out/compiled/' + name + ".js",
			},
			parser: '@typescript-eslint/parser',
			plugins: [
				svelte({

					// enable run-time checks when not in production
					dev: !production,

					// we'll extract any component CSS out into
					// a separate file - better for performance
					/* css: (css) => {
						css.write(name+".css");
					}, */
					preprocess: sveltePreprocess(),
				}),
				css({
					output: (name+ ".css")
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
				['.js', '.ts', '.svelte']),

				commonjs(),

				typescript({
					tsconfig: "webview/tsconfig.json",
					sourceMap: !production,
					//inlineSourceMap: !production,
					inlineSources: !production,
					//rootDir: './src',
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
	});