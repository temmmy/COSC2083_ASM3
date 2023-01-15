import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: '200.html',
			precompress: false,
			strict: true,
			paths: {
				base: dev ? '' : '/IntroToIT',
			},
			// If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
			// For example, instead of '_app', use 'app_', 'internal', etc.
			appDir: '_app',
		}),
	},
	preprocess: vitePreprocess(),
};

export default config;
