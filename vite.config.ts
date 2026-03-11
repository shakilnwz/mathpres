import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import MarkdownIt from 'markdown-it'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const md = new MarkdownIt()

const chaptersDir = path.resolve(__dirname, 'chapters')
const slides: Record<string, any> = {}

if (fs.existsSync(chaptersDir)) {
  for (const chapter of fs.readdirSync(chaptersDir)) {
    const chapterPath = path.join(chaptersDir, chapter)
    if (!fs.statSync(chapterPath).isDirectory()) continue
    
    for (const file of fs.readdirSync(chapterPath)) {
      const ext = path.extname(file).slice(1)
      const filePath = path.join(chapterPath, file)
      const key = `${chapter}/${file}`
      
      if (ext === 'vue') {
        slides[key] = { type: 'vue' }
      } else if (ext === 'md') {
        const content = fs.readFileSync(filePath, 'utf-8')
        slides[key] = { type: 'md', content: md.render(content) }
      } else if (ext === 'html') {
        const content = fs.readFileSync(filePath, 'utf-8')
        slides[key] = { type: 'html', content }
      }
    }
  }
}

const outputPath = path.resolve(__dirname, '.src/slidesGenerated.ts')
fs.writeFileSync(outputPath, `export const generatedSlides = ${JSON.stringify(slides, null, 2)}`)

export default defineConfig({
  base: '/mathpres/',
  plugins: [
    vue(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'Math Lectures',
        short_name: 'MathPres',
        theme_color: '#3b82f6',
        background_color: '#ffffff',
        icons: [
          { src: '/icon-192.svg', sizes: '192x192', type: 'image/svg+xml' },
          { src: '/icon-192.svg', sizes: '512x512', type: 'image/svg+xml' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        globIgnores: [
          'chapters/**',
          '**/*.md',
          '**/*.vue',
        ],
        runtimeCaching: [{
          urlPattern: /^https:\/\/cdn\.plotly\.js\/.*/i,
          handler: 'CacheFirst'
        }]
      }
    })
  ],
})
