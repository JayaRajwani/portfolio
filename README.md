# Jaya Rajwani — Portfolio

Personal technical portfolio site. Static HTML/CSS/JS — no build step required.

## Stack
- Plain HTML, CSS, vanilla JS
- IBM Plex Mono + Plex Sans (Google Fonts, CDN)
- Deploys as a static site on Vercel (or Netlify, GitHub Pages, Cloudflare Pages)

## Local preview
Open `index.html` directly in a browser, or serve locally:

```bash
# any one of these works
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy — GitHub + Vercel

### 1. Create the GitHub repo
```bash
cd path/to/this/folder
git init
git add .
git commit -m "initial commit — portfolio v1"
git branch -M main
git remote add origin https://github.com/JayaRajwani/portfolio.git
git push -u origin main
```
(Create the empty `portfolio` repo on github.com first, or use the GitHub CLI: `gh repo create JayaRajwani/portfolio --public --source=. --remote=origin --push`.)

### 2. Connect to Vercel
1. Go to https://vercel.com/new
2. Import the `JayaRajwani/portfolio` repo
3. Framework preset: **Other** (it's a static site)
4. Build command: *(leave blank)*
5. Output directory: *(leave blank — root)*
6. Deploy

Vercel will auto-deploy on every push to `main` from that point forward.

### 3. Custom domain (optional)
In Vercel → Project → Settings → Domains, add your domain (e.g. `jayarajwani.com`) and update your DNS per Vercel's instructions.

## File map
```
index.html   # single-page site (all sections)
styles.css   # design tokens + layout
script.js    # case card expand/collapse + year in footer
README.md    # this file
```

## Editing content
All copy lives directly in `index.html`. Sections are clearly commented and follow the structure: hero → about → work → talks → contact.

To add a new speaking engagement, find the `# speaking` block in the Talks section and add another `<li>` following the existing pattern.
