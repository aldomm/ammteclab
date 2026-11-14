# AMM TecLab
Public homepage at https://ammteclab.com/ for Aldo Mendes Martins's projects.

Buildless HTML and CSS. GitHub Pages publishes `main` from `/`. Preserve `CNAME` when updating. Preview: `python3 -m http.server 18770`.

App names, destinations and icons verified through Apple's public developer lookup (artist 377344895) on 2026-11-14. Cockpit image reused from the owner's XPPanelsVR Quest website. SVG illustrations are original site assets. No analytics, cookies or third-party scripts.

## Domains

- Homepage: `ammteclab.com`; `www.ammteclab.com` redirects to the apex through GitHub Pages.
- Atlas: `atlas.ammteclab.com` → `aldomm/common-wealth-atlas`.
- Quest: `xppquest.ammteclab.com` → `aldomm/XPPanelsVR-Quest`.
- Vision Pro: `xppvision.ammteclab.com` → `aldomm/XPPanelsVR-Companion`.

Cloudflare DNS uses GitHub's four A records for the apex and DNS-only CNAMEs to `aldomm.github.io` for www, Atlas, Quest and Vision Pro.

The previous `xppanelsvrquest` and `xppanelsvrvisionpro` hostnames are proxied through Cloudflare and have permanent redirect rules to the shorter hostnames. Rules preserve paths and query strings. Do not remove those records: existing links use them.

App Store links omit a country code so Apple can select the visitor's storefront. The complete developer listing is also linked. No sign-in is required to browse this homepage.
