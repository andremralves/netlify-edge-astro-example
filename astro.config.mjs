import { defineConfig } from 'astro/config'
import { netlifyEdgeFunctions } from '@astrojs/netlify'
// import netlify from '@astrojs/netlify/functions'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlifyEdgeFunctions(),
})
