import react from '@vitejs/plugin-react-swc'
import { configDefaults, defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
	test: {
		exclude: [...configDefaults.exclude, 'packages/template/*'],
	},
	plugins: [react()],
})
