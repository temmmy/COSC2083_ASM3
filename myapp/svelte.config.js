import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: null,
			precompress: false,
			strict: true,
			fallback: '200.html',
		})
	},
	preprocess: vitePreprocess(),
	paths: {
		base: "/IntroToIT"
	}
};

export default config;
