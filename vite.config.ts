import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          react: ['react', 'react-dom', 'react-router-dom'],

          // UI component libraries
          'radix-ui': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-label',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-progress',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slider',
            '@radix-ui/react-slot',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-toggle',
            '@radix-ui/react-toggle-group',
            '@radix-ui/react-tooltip'
          ],

          // Animation and motion
          animations: ['framer-motion'],

          // Charts and data visualization
          charts: ['recharts'],

          // Maps
          maps: ['leaflet'],

          // Form handling
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],

          // Utilities and smaller libraries
          utils: [
            'class-variance-authority',
            'clsx',
            'tailwind-merge',
            'date-fns',
            'lucide-react',
            'cmdk',
            'input-otp',
            'next-themes',
            'sonner',
            'vaul'
          ],

          // Data fetching
          query: ['@tanstack/react-query'],

          // Carousel and interactive components
          carousel: ['embla-carousel-react'],

          // Calendar components
          calendar: ['react-day-picker'],

          // Panels and layout
          panels: ['react-resizable-panels']
        }
      }
    },
    // Increase chunk size warning limit to 1MB (from 500KB)
    chunkSizeWarningLimit: 1000
  }
}));
