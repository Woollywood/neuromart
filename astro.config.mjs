// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

const concatString = (/** @type {string[]} */ strs) => `${strs.join(';')};`;

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: concatString([`@use '@/styles/variables.scss' as *;`, `@use '@/styles/mixins.scss' as *;`]),
        },
      },
    },
  },
  integrations: [icon()],
});
