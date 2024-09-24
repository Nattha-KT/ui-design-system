import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [mdx(), react()], // Mush come first
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom', //recommended jsdom
    setupFiles: './tests/setup.ts',
  },
});
