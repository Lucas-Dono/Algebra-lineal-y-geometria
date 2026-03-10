// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const katexOptions = {
  strict: false,
  trust: true,
};

export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, katexOptions]],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, katexOptions]],
  },
  vite: {
    ssr: {
      noExternal: ['mafs', 'katex'],
    },
    server: {
      fs: {
        allow: ['..'],
      },
    },
    resolve: {
      alias: {
        '@content': new URL('../content', import.meta.url).pathname,
      },
    },
  },
});
