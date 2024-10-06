// import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // mdx(),
    tsconfigPaths(),
    react(),
    dts({
      rollupTypes: true,
      outDir: 'dist',
      insertTypesEntry: true,
      exclude: ['lib/**/*.spec.tsx', 'lib/**/*.stories.tsx', 'tests/**/*'],
      tsconfigPath: './tsconfig.app.json',
    }),
    libInjectCss(),
  ], // Mush come first
  resolve: {
    alias: {
      '@': resolve(__dirname, './lib'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom', //recommended jsdom
    setupFiles: './tests/setup.ts',
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'pangman-ui',
      fileName: (format) => `pangman-ui.${format}.js`,
      formats: ['es', 'cjs'],
    },
    // bundler options
    // externalize react-related imports
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'tailwindcss'],
      output: {
        // inlineDynamicImports: false,
        // preserveModules: true,
        // dir: 'dist',
        // entryFileNames: '[name].js',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          tailwindcss: 'tailwindcss',
        },
      },
    },
    copyPublicDir: false,
    // sourcemap: true,
    // emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
