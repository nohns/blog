// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        { target: "_blank", rel: ["noopener", "noreferrer"] },
      ],
    ],
  },
  integrations: [
    mdx({
      rehypePlugins: [
        [
          rehypeExternalLinks,
          { target: "_blank", rel: ["noopener", "noreferrer"] },
        ],
      ],
    }),
    tailwind(),
  ],
  site: "https://www.nohns.dk", // Production domain
  output: "static", // For static site generation
});
