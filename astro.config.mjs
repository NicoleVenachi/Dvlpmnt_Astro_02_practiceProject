import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://NicoleVenachi.github.io',
  base: '/Dvlpmnt_Astro_02_practiceProject',

});