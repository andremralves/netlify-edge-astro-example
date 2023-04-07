import { defineConfig } from 'astro/config'
import { netlifyEdgeFunctions } from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlifyEdgeFunctions(),
})
