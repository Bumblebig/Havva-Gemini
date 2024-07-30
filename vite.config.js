import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // This will open the browser automatically
    strictPort: true, // This will throw an error if the port is already in use
    // You can add other server configurations here
  }
})
