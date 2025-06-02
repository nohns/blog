# Terminal-Inspired Markdown Blog

A modern, SEO-optimized blog built with Astro and styled with a terminal-inspired theme. Features include Markdown support, tag-based filtering, and a unique dark terminal aesthetic.

## Features

- 🎨 Dark terminal-inspired theme with monospaced typography
- 📝 Markdown support with syntax highlighting
- 🏷️ Tag-based content filtering
- 🔍 SEO optimized with meta tags and sitemap
- 🚀 Built with Astro for optimal performance
- 🎯 Deployable to Cloudflare Workers

## Prerequisites

- Node.js 18 or later
- npm or yarn

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── content/          # Blog posts in Markdown
├── layouts/          # Page layouts
├── pages/           # Route components
└── styles/          # Global styles
```

## Adding Blog Posts

Create new blog posts by adding Markdown files to the `src/content/blog` directory. Each post should include frontmatter with the following fields:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
date: YYYY-MM-DD
tags: ["tag1", "tag2"]
---
```

## Deployment

This project is configured for deployment to Cloudflare Workers. Update the `site` URL in `astro.config.mjs` and `sitemap.xml.ts` with your actual domain before deploying.

## License

MIT

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
