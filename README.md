# Inês with an ê

Source for [ipinheiro.github.io](https://ipinheiro.github.io), my personal website.

The site is a visual record of my work and a home for things I make and read. Its design system is called Pattern (an homage to knitting). Pattern uses Archivo, warm paper backgrounds, section colours, fine rules, and small stitch-like motifs.

## Local development

The site uses [Astro](https://astro.build) and [Bun](https://bun.sh).

Install the dependencies and start the development server:

```sh
bun install
bun run dev
```

Check the Astro project and create a production build:

```sh
bun run check
bun run build
```

## Project structure

- `src/pages/index.astro` contains the homepage.
- `src/pages/reading/[year].astro` generates each yearly reading archive.
- `src/data/reading.ts` stores the reading data separately from the page layout.
- `src/styles/global.css` contains the Pattern styles and responsive layouts.
- `.github/workflows/deploy.yml` builds and deploys the site.

## Reading data

Add books to `src/data/reading.ts`. Each entry requires a title, author, year, and status. Dates, categories, ratings, notes, tags, cover images, and favourites are optional.

The available statuses are `reading`, `finished`, `abandoned`, and `paused`. Add a year to `readingYears` to generate its archive page.

## Deployment

A push to `main` runs the GitHub Pages workflow. The workflow installs dependencies with Bun, builds the static Astro site, and deploys the contents of `dist`.
