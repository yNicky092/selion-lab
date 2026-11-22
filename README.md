# Selion Lab

Official website for **Selion Lab**, an independent game studio building interactive worlds on real silicon physics.

## Pages
- **Home (`/`)**: Studio welcome, philosophy, Silicon Emergence spotlight, simulated architecture overview, and Virtual Fab.
- **Silicon Emergence & Vision (`/work`)**: Core gameplay loop, 72-level / 6-chapter + Infinite Sandbox campaign explorer, physics & platform breakdown, SERMM-16, SEVM & FLUX, EmergenceOS-16 (`EOS-16.serm`), and Virtual Fab.
- **About (`/about`)**: Studio mission and ethos.
- **Contact (`/contact`)**: Direct studio inquiry form (`contact@selionlab.com`).

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build & Hosting

This site is configured with Next.js static export (`output: "export"` in `next.config.ts`), producing a pure static bundle in `out/` that deploys directly to any modern host:

```bash
npm run build
```

- **Vercel**: Import this repository on Vercel and deploy with default Next.js settings.
- **Cloudflare Pages / Netlify**: Set build command to `npm run build` and publish directory to `out`.
- **GitHub Pages**: Enable GitHub Pages under **Settings -> Pages -> Source: GitHub Actions** to deploy automatically on every push to `main`.

## Contact

[contact@selionlab.com](mailto:contact@selionlab.com)
