# SMP Admin v3.3

26-page admin portal · 3-sided marketplace (Customer + Technician + Partner).

## Pages chính

- `#dashboard` — Tổng quan
- `#partners-overview` — Partners platform v3.3
- `#partners-list` — 8 partners
- `#partner-detail` — Drilldown Hùng AC Service
- `#partner-portal-view` — Simulate partner login

## Auto-deploy

Mỗi commit lên branch `main` được Cloudflare Pages auto-deploy trong ~30 giây.

URL production: https://smp-admin.pages.dev

## Update code

```bash
# Sau khi nhận file mới từ Claude
cp /path/to/new-smp-admin.html ./index.html
git add . && git commit -m "Update admin vX.Y"
git push
```
