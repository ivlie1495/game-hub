import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@assets': `${path.resolve(__dirname, './src/assets/')}`,
      '@components': `${path.resolve(__dirname, './src/components/')}`,
      '@data': `${path.resolve(__dirname, './src/data/')}`,
      '@entities': `${path.resolve(__dirname, './src/entities/')}`,
      '@hooks': `${path.resolve(__dirname, './src/hooks/')}`,
      '@pages': `${path.resolve(__dirname, './src/pages/')}`,
      '@services': `${path.resolve(__dirname, './src/services/')}`,
      '@stores': `${path.resolve(__dirname, './src/stores/')}`,
      '@styles': `${path.resolve(__dirname, './src/styles/')}`,
      '@utils': `${path.resolve(__dirname, './src/utils/')}`,
    },
  },
  plugins: [react()],
});
