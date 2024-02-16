import { defineConfig } from 'astro/config';

const PORT='4321'
const astroConfig = {
  site: '',
  base: '',
}
const running_Script = process.env.npm_lifecycle_script || ''
const isProduction = running_Script?.includes('astro build')

// node astro.config.mjs
// console.log(isProduction ? 'tiene valor' : 'es falso o undefined')

if (isProduction) {
  astroConfig.site = 'https://deglan-rivas.github.io'
  astroConfig.base = '/frontend-astro-portafolio'
} else {
  astroConfig.site = `http://localhost:${PORT}`
  astroConfig.base = '/'
}

// https://astro.build/config
export default defineConfig(astroConfig);
