import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: 'https://bbljo22.github.io/portfolio3/', // replace 'your-repo-name' with your actual repository name
  plugins: [react()],
  server: {
    port: 3000, // you can change the port if needed
  },
  build: {
    outDir: 'dist', // output directory for build files
  },
});
