# tomenu-website

Static website for [**tomenu.sk**](https://tomenu.sk), hosted on Cloudflare Pages.

This is the public-facing site for the [**ToMenu**](https://github.com/toomcis/tomenu) project — an app and REST API that serves structured daily lunch menus from Slovak restaurants.

## Structure

```
index.html          # landing page — app download, features, privacy
style.css
script.js
locales/            # root page translations
  en.json
  sk.json
  cs.json
api/
  index.html        # API documentation & early access key request
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
| `/` | App landing page — features, download button, privacy, API teaser. |
| `/api` | Developer docs — endpoint reference, authentication, and early access key request. |

## Download / APK hosting

The APK download button links directly to the latest GitHub Release:

```
https://github.com/toomcis/tomenu-app/releases/latest/download/tomenu.apk
```

To publish a new APK: create a GitHub Release on the `tomenu-app` repo, attach the `.apk` as a release asset named `tomenu.apk`. The download button will automatically serve the latest version.

## Localisation

The site auto-detects the visitor's browser language and serves **English**, **Slovak**, or **Czech** accordingly. A toggle button in the top-right corner lets users switch manually. The preference is saved to `localStorage`.

To add a new language (e.g. Polish), drop `pl.json` into both `locales/` and `api/locales/`, then add `'pl'` to the `SUPPORTED_LANGS` array in both `script.js` files.

## Related

- **App repo:** [toomcis/tomenu-app](https://github.com/toomcis/tomenu-app)
- **API server repo:** [toomcis/tomenu](https://github.com/toomcis/tomenu)
- **API base URL:** `https://api.tomenu.sk`
- **Contact:** [contact@tomenu.sk](mailto:contact@tomenu.sk)