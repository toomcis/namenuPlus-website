# namenuplus-website
Static website for [**namenuplus.toomcis.eu**](https://namenuplus.toomcis.eu), hosted on Cloudflare Pages.
This is the public-facing site for the [**namenu+**](https://github.com/toomcis/namenuPlus) project — a REST API that serves structured daily lunch menus from Slovak restaurants.

## Structure
```
index.html          # root — redirects to /api (will become app landing page later)
style.css
script.js
locales/            # root page translations
  en.json
  sk.json
  cs.json
api/
  index.html        # API documentation & early access page
  style.css
  script.js
  locales/          # API docs translations
    en.json
    sk.json
    cs.json
```

## Pages
| Route | Description |
|-------|-------------|
| `/` | Redirects to `/api` for now. Will become the app landing page once the Android app ships. |
| `/api` | Developer docs — endpoint reference, authentication, and early access key request. |

## Localisation
The site auto-detects the visitor's browser language and serves **English**, **Slovak**, or **Czech** accordingly. A toggle button in the top-right corner lets users switch manually. The preference is saved to `localStorage`.

To add a new language (e.g. Polish), drop `pl.json` into both `locales/` and `api/locales/`, then add `'pl'` to the `SUPPORTED_LANGS` array in both `script.js` files.

## Related
- **API server repo:** [toomcis/namenuPlus](https://github.com/toomcis/namenuPlus)
- **API base URL:** `https://api.namenuplus.toomcis.eu` *(coming soon)*
- **Contact:** [contact@toomcis.eu](mailto:contact@toomcis.eu)