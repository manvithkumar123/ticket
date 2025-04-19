import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';  // Ensure this is added

// Export the configuration
export default defineConfig({
  base: '/ticket',  // Base URL for GitHub Pages
  plugins: [react()],  // Use the react plugin
});