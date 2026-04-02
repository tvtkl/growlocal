# 🌱 GrowLocal — Field Intelligence Garden Planner

A precision garden planner that combines photorealistic 3D satellite maps with climate-aware planting recommendations, seasonal guidance, and household yield planning.

## Live Demo
🌍 [growlocal.app](https://growlocal.vercel.app) *(update with your domain)*

## What It Does

- **3D Satellite Map** — Powered by Google Maps Photorealistic 3D Tiles via CesiumJS. Enter any address and fly to your actual plot.
- **Climate Zone Detection** — Automatically detects USDA hardiness zone from coordinates.
- **Plant Recommendations** — 19 plants scored and ranked against your zone, sunlight, goals, and experience level.
- **Seasonal Guidance** — Per-zone spring/summer/fall/winter planting calendars with frost dates.
- **Month-by-Month Actions** — What to sow, maintain, and harvest each month.
- **AI Agronomic Insight** — Claude AI writes a personalized growing summary for your setup.
- **Household Yield Planning** — Calibrated for your number of people and self-sufficiency target.

## Tech Stack

- Pure HTML/CSS/JavaScript — no framework, no build step
- [CesiumJS](https://cesium.com/) — 3D globe renderer
- [Google Maps Tile API](https://developers.google.com/maps/documentation/tile) — Photorealistic 3D Tiles
- [Nominatim](https://nominatim.org/) — Free geocoding (OpenStreetMap)
- [Anthropic Claude API](https://anthropic.com) — AI narrative generation

## Setup & API Keys

The app works without API keys (falls back to Bing satellite imagery). For the full photorealistic 3D experience:

1. **Google Maps Tile API key** — Enable the Map Tiles API in [Google Cloud Console](https://console.cloud.google.com/). Free tier includes generous monthly credits.
2. **Cesium ion token** — Free account at [cesium.com/ion](https://cesium.com/ion/signup).

Enter both keys in the top bar of the app. For production, these should be set as environment variables (see below).

## Environment Variables

For production deployment, store API keys as Vercel environment variables rather than entering them in the UI:

| Variable | Description |
|----------|-------------|
| `VITE_GOOGLE_MAPS_KEY` | Google Maps Tile API key |
| `VITE_CESIUM_TOKEN` | Cesium ion access token |

> **Note:** Since this is a client-side app, keys entered in the browser are visible in network requests. For a production hardened version, add a lightweight proxy endpoint.

## Deploying to Vercel

1. Fork or clone this repo
2. Push to your GitHub account
3. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
4. Framework Preset: **Other**
5. Output Directory: `.` (a single period)
6. Click **Deploy**

Every push to `main` auto-deploys. Pull requests get preview URLs.

## Ads & Monetization

The app is designed to be free and ad-supported. Recommended ad placements:
- Below the results header (320×50 or 728×90)
- Between plant recommendation rows (native/in-feed)
- Right panel bottom (300×250)

Compatible with Google AdSense — add your AdSense script to `<head>` and place `<ins class="adsbygoogle">` units where appropriate.

## Roadmap

- [ ] Google Maps API key proxying via Vercel Edge Function
- [ ] User accounts + saved garden plans
- [ ] Garden plot drawing tool on the 3D map
- [ ] NDVI crop health overlay
- [ ] Companion planting suggestions
- [ ] Mobile app (PWA)
- [ ] Community plant variety database

## License

MIT — free to use, modify, and deploy.

## Contributing

PRs welcome. Open an issue first for large changes.
