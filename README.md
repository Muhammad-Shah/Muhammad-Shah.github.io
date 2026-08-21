# muhammad-shah.github.io

Personal site of Muhammad Shah — AI software engineer at HumAI, Dubai.
Live at <https://muhammad-shah.github.io/>.

## Stack

Hand-written HTML, CSS and a few lines of JavaScript. No framework, no build step, no tracking.

- `index.html` — the page (content lives here; edit it directly)
- `css/site.css` — design tokens and layout
- `js/site.js` — Dubai clock and scroll-reveal; the page is complete without it
- `assets/` — favicon, touch icon and the Open Graph image
- `404.html`, `robots.txt`, `sitemap.xml`

Fonts are loaded from Google Fonts: Bricolage Grotesque, Source Serif 4 and JetBrains Mono.

## Updating

1. Edit `index.html`. The career chart in the Timeline section positions each bar with
   inline `left` / `width` percentages on a January 2021 → December 2026 axis
   (one month = 1/72 of the width).
2. Bump the `Updated` date in the footer, the `v2026.08` tag in the hero panel and
   `<lastmod>` in `sitemap.xml`.
3. Push to `master` — GitHub Pages serves the root.

© 2026 Muhammad Shah
