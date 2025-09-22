import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Remove this line: import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    // Remove the visualizer plugin entirely
  ],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          charts: ['chart.js', 'react-chartjs-2', 'recharts'],
          auth: ['axios', 'jwt-decode'],
        },
      },
    },
  },
})
