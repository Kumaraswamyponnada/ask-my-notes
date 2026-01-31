
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [
    react(),
    // This allows process.env.API_KEY to work in your code
    EnvironmentPlugin(['API_KEY']),
  ],
  server: {
    port: 5173,
    strictPort: true,
  },
});
