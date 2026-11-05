# Portfolio security maintenance

## Deployment

Vercel configuration is in `vercel.json`. Build with `npm run build` and publish `dist`.
The policy allows this site's local scripts, styles, fonts, and images. It blocks
embedded objects, framing by other sites, form submissions, and unneeded device permissions.
External profile links remain allowed. If adding analytics, external fonts, forms,
or embedded content, review the policy before deployment. Vercel preview toolbar
scripts may also be blocked by this strict policy.

Headers take effect on Vercel, not the local Vite server. Verify response headers,
HTTPS, navigation, fonts and images on the deployed URL before announcing the site.

## Dependency audit — 2026-11-01

`npm audit --omit=dev` reported zero vulnerabilities.
The full audit reported seven moderate package findings stemming from minimatch
GHSA-g3hv-75wg-m249 in the ESLint development dependency chain.
Installed minimatch: 10.2.6. Patched version: 11.0.1.
The latest checked ESLint (10.14.0) still requires minimatch ^10.2.6.
No forced major-version override was applied. This tooling is not bundled into
the static website. Recheck upstream updates with `npm audit`; review compatible
updates and run `npm run lint` and `npm run build` after changing dependencies.

Advisory: https://github.com/advisories/GHSA-g3hv-75wg-m249

## Public files and credentials

Everything in `public` is published. Five unused PDF/HTML documents were moved to:
`/Users/gab/Documents/ChatGPT/website/portfolio-private-backup`
Do not copy that backup into the site or upload it with the deployment.

The image metadata scan found no top-level GPS, artist, user-comment, or Windows
author/keyword tags. This is not a complete metadata or visual privacy audit.
Certificate text, QR codes and identifiers have not been redacted. Review what
you intend to make public before publishing; retain originals outside the project.

`.env` and `.env.*` are ignored except `.env.example`. Never place credentials in
browser code or VITE-prefixed variables, because these values can become public.
