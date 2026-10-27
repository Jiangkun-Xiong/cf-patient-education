# Beginner guide: preview, publish and rebuild

## 1. Preview the starter

Download the repository and open `docs/index.html` in your browser.

If Python is installed, run this command from the repository root:

```bash
python -m http.server 8000 --directory docs
```

Open `http://localhost:8000`. The starter uses ordinary HTML, CSS and JavaScript.

## 2. Publish the project overview on GitHub Pages

1. Open this repository on GitHub.
2. Choose **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the **main** branch and the **/docs** folder, then **Save**.
5. Use GitHub’s **Visit site** button after the deployment completes.

If Pages is already enabled, keep the existing setting. The overview links to the original Wix pages; the patient-information rebuild can be added in small steps.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 3. Edit the introduction

- `README.md`: English repository introduction.
- `README.zh-CN.md`: Chinese introduction.
- `docs/index.html`: project overview and original-site links.

For bilingual webpage text, edit both `data-en` and `data-zh` on the relevant element, as well as its visible English text.

## 4. Add the first rebuilt page

Create `docs/pages/what-is-cf.html`. From a file inside `docs/pages/`, reference the shared assets with:

```html
<link rel="stylesheet" href="../assets/css/style.css">
<script defer src="../assets/js/main.js"></script>
```

Review the original text and references, then add the new page’s link to `docs/index.html`. Update `content/site-map.json` to record that the page is complete.

## 5. Add images

Place website images under `docs/assets/images/` when needed. Place screenshots used only in the GitHub README under `assets/screenshots/`.

Use lowercase filenames with hyphens, such as `cf-home-desktop.png`. Reference paths with the same letter case.

## 6. Keep a clear development history

Make one focused improvement per commit. Example messages:

- `Add original Wix homepage screenshot`
- `Rebuild the What is CF page in HTML`
- `Improve mobile navigation`

Wix is the original authoring platform. This repository organises a manual, progressive rebuild; it does not contain an exported Wix editor project.
