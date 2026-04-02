# GrowLocal — Deployment Guide

Complete walkthrough: local files → GitHub → Vercel → live URL.
Estimated time: 15–20 minutes.

---

## Prerequisites

- A [GitHub account](https://github.com/signup) (free)
- A [Vercel account](https://vercel.com/signup) — sign up with GitHub (free Hobby tier is fine)
- Git installed on your machine — check with `git --version` in Terminal

---

## Step 1 — Set up your project folder

You should have these files:

```
growlocal/
├── index.html        ← the app
├── vercel.json       ← Vercel config
├── README.md         ← repo description
└── .gitignore        ← keeps junk out of git
```

Open Terminal and navigate to this folder:

```bash
cd path/to/growlocal
```

---

## Step 2 — Create a GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name it: `growlocal` (or `growlocal-app`)
3. Set to **Public** (required for free Vercel hobby tier)
4. Do **NOT** check "Add a README" — you already have one
5. Click **Create repository**

GitHub will show you commands. Run these in your Terminal:

```bash
git init
git add .
git commit -m "Initial commit — GrowLocal field intelligence app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/growlocal.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

✅ Refresh your GitHub repo page — you should see all 4 files.

---

## Step 3 — Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Continue with GitHub"** and authorize Vercel
3. Find your `growlocal` repo in the list → click **Import**
4. On the Configure Project screen:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: leave blank
   - **Output Directory**: type a single period → `.`
   - **Install Command**: leave blank
5. Click **Deploy**

Vercel builds in ~10 seconds. You'll get a URL like:
```
https://growlocal-yourusername.vercel.app
```

✅ Click it — your app is live.

---

## Step 4 — Add a custom domain (optional but recommended)

A custom domain makes it feel real and helps with SEO and AdSense approval.

Good options to buy a domain:
- [Namecheap](https://namecheap.com) — often $10–15/yr
- [Porkbun](https://porkbun.com) — cheapest, great UI
- [Google Domains](https://domains.google) — clean but pricier

Suggested domain names:
- `growlocal.app`
- `growlocal.io`
- `fieldgrow.app`
- `plotplanner.com`
- `growscan.app`

**To connect in Vercel:**
1. Vercel Dashboard → your project → **Settings** → **Domains**
2. Type your domain → **Add**
3. Vercel shows you DNS records to add
4. In your domain registrar, add those DNS records
5. Wait 5–30 minutes for propagation

---

## Step 5 — Set up Google AdSense

Once your site is live and has some content/traffic:

1. Apply at [adsense.google.com](https://adsense.google.com)
2. Google reviews your site (can take 1–14 days)
3. Once approved, add this to the `<head>` of `index.html`:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
```

Replace `XXXXXXXXXXXXXXXX` with your publisher ID.

**Recommended ad placements in the app:**

| Location | Size | Where in the HTML |
|----------|------|-------------------|
| Below results header | 728×90 leaderboard | After `.res-summary` div |
| Between plant rows | 320×50 mobile banner | After 4th plant row |
| Right panel bottom | 300×250 rectangle | Bottom of `#rp-results` |

**Ad unit example to paste:**
```html
<div style="text-align:center;padding:0.75rem 1rem;border-top:1px solid var(--border)">
  <ins class="adsbygoogle"
    style="display:inline-block;width:300px;height:250px"
    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
    data-ad-slot="XXXXXXXXXX"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>
```

---

## Step 6 — Protect your API keys (important for production)

Currently the Google Maps and Cesium keys are typed into the UI — visible to users. For production:

**Option A — Restrict the keys (easiest):**
- In Google Cloud Console → Credentials → restrict your Maps key to your domain only (e.g., `growlocal.app`)
- This means even if someone copies your key, it won't work on their domain

**Option B — Vercel Edge Function proxy (more secure):**
Create `/api/cesium-token.js`:
```javascript
export default function handler(req, res) {
  res.json({ token: process.env.CESIUM_TOKEN });
}
```
Then fetch it from your app on load instead of accepting user input.

Add the env var in Vercel: Dashboard → Settings → Environment Variables → `CESIUM_TOKEN`.

---

## Ongoing workflow

Every time you update the app:

```bash
git add .
git commit -m "Update: describe what you changed"
git push
```

Vercel automatically detects the push and redeploys in ~15 seconds. No manual steps.

---

## Monetization roadmap beyond ads

Once you have traffic, consider:

1. **Freemium** — Free plan with basic zone detection, paid plan ($4.99/mo) unlocks saved plans, export to PDF, companion planting
2. **Affiliate links** — Link out to seed companies (Burpee, Baker Creek, Johnny's) with affiliate codes when recommending plants
3. **Sponsored plant database entries** — Seed companies pay to feature their specific varieties
4. **API access** — Charge developers to use your climate/zone detection logic

---

## Analytics

Add free Vercel Analytics to see how people use the app:

```bash
# In Vercel Dashboard → Analytics → Enable
```

Or add Google Analytics 4:
```html
<!-- In <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```
