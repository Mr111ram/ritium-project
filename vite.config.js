import dotenv from 'dotenv'
import { join as node_join, resolve as node_resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint'
import progress from 'vite-plugin-progress'

dotenv.config()

const NODE_ENV = process.env.NODE_ENV ?? 'production'
const IS_DEV = NODE_ENV === 'development'

const __dirname = __dirname ?? node_resolve()
const join = (...args) => node_join(__dirname, ...args)

/**
 * TODO: ADD BUILD SUPPORT
 */

const config = defineConfig({
	mode: NODE_ENV,
	root: join('web'),
	publicDir: join('web', 'public'),
	envDir: __dirname,
	appType: 'spa',
	server: {},
	build: {
		outDir: '../app/web',
		assetsDir: 'assets',
		emptyOutDir: true,
		target: 'modules',
		minify: 'terser',
	},
	resolve: {
		alias: {
			'@': join('web', 'src'),
			'@public': join('web', 'public'),
		},
	},
	plugins: [progress(), eslint({ cache: false }), stylelint(), vue()],
})

if (IS_DEV) {
	config.server.open = '/'
} else {
	config.logLevel = 'error'
}

export default config
