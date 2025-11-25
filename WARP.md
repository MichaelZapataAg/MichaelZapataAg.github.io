# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project overview

This is a minimal [Astro](https://astro.build) project (Astro v5) intended as the starting point for a personal portfolio site. It currently uses the default Astro starter structure with a single page and strict TypeScript settings.

## Commands and workflows

All commands are run from the project root.

- **Install dependencies**
  - `npm install`
- **Start the development server**
  - `npm run dev`
  - Uses `astro dev` (default: http://localhost:4321/).
- **Build for production**
  - `npm run build`
  - Outputs the built site to the `dist/` directory.
- **Preview the production build locally**
  - `npm run preview`
- **Run Astro CLI subcommands**
  - `npm run astro -- <command>`
  - Examples: `npm run astro -- check`, `npm run astro -- add <integration>`.

### Tests

There is no test runner or test script configured yet in `package.json`. If a test framework is added in the future, update this section with commands for running the full test suite and individual tests.

## Project structure and routing

High-level layout (see also `README.md`):

- `public/` – Static assets served as-is (e.g., images, icons).
- `src/pages/` – File-based routes for the site.
  - `index.astro` – Current root (`/`) page.
- `package.json` – NPM scripts and dependencies (currently only `astro`).
- `astro.config.mjs` – Astro configuration (currently using the default `defineConfig({})`).
- `tsconfig.json` – TypeScript configuration extending `astro/tsconfigs/strict`.

### Astro page model

- Any `.astro` or `.md` file under `src/pages/` becomes a route based on its file name.
- The existing `src/pages/index.astro` is a simple HTML shell that sets up the `<html>` document, `<head>` metadata (including `Astro.generator`), and an `<h1>` placeholder.
- Future pages (e.g., `/about`, `/projects`) should be added as additional `.astro` (or `.md`) files in `src/pages/`.

### Configuration notes

- **Astro config (`astro.config.mjs`)**
  - Uses `defineConfig({})` with no custom options yet. Add integrations (e.g., React, Svelte), adapters, or other Astro config here as the project grows.
- **TypeScript config (`tsconfig.json`)**
  - Extends `astro/tsconfigs/strict`, which enables strict TypeScript/JS checking across `.astro` and other files.
  - Includes `.astro/types.d.ts` and all project files; excludes the build output in `dist/`.

When making structural or configuration changes, follow Astro's conventions (file-based routing in `src/pages/`, shared UI in `src/components/`, and static assets in `public/`) so future Warp agents can reason about the project easily.