# Agent Instructions

This is the personal portfolio of Dafa Huda Rifa'i.
Live: https://portfolio.dhr.my.id

## Stack
React 19, Vite 7, Tailwind 4, Tabler Icons. Deploy is MANUAL only:
`npm run build && sudo rsync -a --delete dist/ /var/www/portfolio/`.
The webhook/GitHub Actions auto-deploy was deliberately removed — do not
re-add it without the owner's approval.

## Design & UI
If the task involves building or editing UI/UX, read `DESIGN.md`
(style direction) then `ANTISLOP.md` (filter) before generating anything.
Run the ANTISLOP.md Delivery Gate (PASS/FAIL, 4 blocks) before declaring
UI work complete.

## Content rules
- Never invent projects, metrics, testimonials, or credentials. All content
  comes from `src/data.js` and is verified against the owner's LinkedIn
  (linkedin.com/in/dafa-huda-rifa-i) and GitHub (github.com/dafahuda).
- Copy is Bahasa Indonesia baku. Technical terms in English stay in English.
  Avoid AI-industry filler like "clean", "modern", "seamless".

## Commit rules
- Author: `Dafa Huda Rifa'i <dafahudarifai147@gmail.com>` only. No AI
  co-author trailers, no "Generated with" lines.
- Commit messages: Conventional Commits, imperative, Bahasa or English —
  match existing history.

## Deployment safety
- `deploy.sh` uses `sudo rm -rf /var/www/portfolio/*`. Always back up
  webroot to `/home/ubuntu/portfolio-webroot-backup-$(date +%Y%m%d%H%M%S)`
  before triggering deploy.
- Do not modify `deploy.sh`, nginx config, or PM2 entries without the
  owner's explicit approval.
- Never write a secret, token, or password into any file in this repo — it is
  PUBLIC. The portfolio once shipped a deploy secret in a workflow file; it had
  to be rotated. Auto-deploy is gone now; there is no deploy secret to use.

## Planning
Multi-step design or refactor work: write a plan under
`.hermes/plans/YYYY-MM-DD_HHMM-<slug>.md` before executing.
