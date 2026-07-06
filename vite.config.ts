import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/notes-app/",
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './setupTest.ts',
  },
});