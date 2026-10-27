# Cystic Fibrosis Patient Education Website

**University of Leicester · Year D · Respiratory Module coursework**

[Visit the original Wix website](https://1976076128.wixsite.com/cystic015/what-is-cf) · [Original homepage](https://1976076128.wixsite.com/cystic015) · [中文说明](README.zh-CN.md) · [Personal portfolio](https://jiangkun-xiong.github.io/#projects)

A patient information website about cystic fibrosis (CF), originally created with **Wix** during my Year D study in the UK. This repository presents the coursework, preserves its context and organises a gradual transition towards a website built with code and hosted on **GitHub Pages**.

## Coursework context

| Item | Details |
| --- | --- |
| Author | Jiangkun Xiong |
| University | University of Leicester, UK |
| Programme | BSc (Hons) Clinical Sciences, through the Chongqing Medical University–University of Leicester joint programme |
| Study stage | Year D, UK study year, 2025–2026 |
| Module | Respiratory Module, as identified on the original website |
| Coursework | Patient information website on cystic fibrosis |
| Original platform | Wix |
| Current repository stage | Project documentation and a working starter overview page |

“Patient information website” describes the coursework format. The module code and official assessment title can be added from the assessment brief when available.

## What the website explores

The project organises respiratory medicine information into a patient-facing website, with accessible explanations, a navigable structure, embedded educational media and references to supporting sources. It provides a practical example of translating medical learning into health communication.

The original site includes:

| Page | Focus |
| --- | --- |
| [Home](https://1976076128.wixsite.com/cystic015) | An overview and routes to the main patient information topics. |
| [What is CF?](https://1976076128.wixsite.com/cystic015/what-is-cf) | An introduction to the condition, genetics and affected body systems. |
| [Symptoms](https://1976076128.wixsite.com/cystic015/symptom) | Information about the symptoms discussed in the coursework. |
| [Triggers & infection prevention](https://1976076128.wixsite.com/cystic015/trigger-infection-prevention) | A section on infection risks and prevention. |
| [Managing CF](https://1976076128.wixsite.com/cystic015/managing-cf) | An overview of care and everyday management. |
| [When to seek help](https://1976076128.wixsite.com/cystic015/when-to-seek-help) | Information about seeking help from appropriate healthcare services. |
| [Living well with CF](https://1976076128.wixsite.com/cystic015/living-well-with-cf) | Everyday life and sources of support. |
| [References](https://1976076128.wixsite.com/cystic015/reference) | The original website’s references and information sources. |

The original reference page includes sources from the NHS, NICE and the Cystic Fibrosis Trust. These are sources used in the coursework; they do not imply institutional endorsement of this student project.

## From Wix to a website built with code

The first version was designed and published using Wix. As my programming skills develop, I plan to rebuild the site progressively using **HTML, CSS and JavaScript**, keep its source in this repository, and publish the rebuilt pages through GitHub Pages. A static site generator or other build process may be introduced later if it makes the project easier to maintain.

| Stage | Scope | Status |
| --- | --- | --- |
| 1. Present the coursework | Original website links, academic context and repository organisation | Available |
| 2. Prepare the foundation | Responsive project overview, shared styles and a content map | Available |
| 3. Rebuild one page | Recreate “What is CF?” in code and retain its references | Planned |
| 4. Extend the site | Rebuild the remaining pages and refine mobile navigation | Planned |
| 5. Develop and maintain | Review accessibility, links, references and any future build workflow | Ongoing goal |

The current `docs/index.html` is a project overview linking to the original Wix pages. The patient information pages will be rebuilt in later stages; their planned paths are recorded in [the content map](content/site-map.json).

## Repository guide

| Path | Purpose |
| --- | --- |
| [README.zh-CN.md](README.zh-CN.md) | Chinese project introduction |
| [docs/index.html](docs/index.html) | Working project overview, ready for GitHub Pages |
| [docs/assets/css/style.css](docs/assets/css/style.css) | Shared responsive styles |
| [docs/assets/js/main.js](docs/assets/js/main.js) | English/Chinese display toggle |
| [content/](content/README.md) | Original page inventory and future content organisation |
| [planning/coursework.md](planning/coursework.md) | Coursework background and evidence for its description |
| [planning/roadmap.md](planning/roadmap.md) | Small, achievable development steps |
| [planning/migration-guide.md](planning/migration-guide.md) | Beginner-friendly local preview and publication guide |
| [assets/screenshots/](assets/screenshots/README.md) | A place to add screenshots of the original work |

## Preview and continue

Open `docs/index.html` in a browser for a quick preview. With Python installed, you can also run:

```bash
python -m http.server 8000 --directory docs
```

Then visit `http://localhost:8000`. The starter has no package dependencies or build step.

For GitHub Pages, the prepared publishing source is **main → /docs**. See [the migration guide](planning/migration-guide.md) for the steps. This folder structure is a starting point; GitHub Pages must be enabled in the repository settings before a public project overview URL is available.

## Scope and attribution

This is student educational coursework, intended to demonstrate medical learning, information organisation and health communication. Clinical information should be read in its original context, with the references provided on the Wix site. External images, videos and source materials retain their original attribution.

For this initial repository setup, the Wix site remains the live coursework website.
