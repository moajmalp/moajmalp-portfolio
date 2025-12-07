import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['vite.svg', 'assets/*'],
      manifest: {
        name: 'Muhammed Ajmal P - Portfolio',
        short_name: 'Ajmal Portfolio',
        description: 'Professional Portfolio of Muhammed Ajmal P - WordPress Developer & SEO Specialist',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,pdf_json}']
      }
    })
  ],
  server: {
    port: 3000,
    open: true,
    strictPort: false,
    hmr: {
      protocol: 'ws',
      host: 'localhost'
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})

