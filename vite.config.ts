/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, 'test', 'setup.ts'),
    coverage: {
      include: [...configDefaults.include, 'src/**'],
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        ...configDefaults.exclude,
        'src/styles',
        'src/utils/env',
        'src/utils/sleep',
        'src/App.tsx',
        'src/main.tsx',
        'src/**/*.stories.tsx',
        'src/lib/**',
        'src/**/styles.ts',
        'src/services/**',
        'src/context/**',
      ],
    },
  },
});
