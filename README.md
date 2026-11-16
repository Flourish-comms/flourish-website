# Flourish Communications website

## First-time setup to host it (about 30–45 min, once)
This gets you a live site you can later tweak from Claude Code without
downloading or uploading files.

1. **Create a free GitHub account** at https://github.com and make a new
   repository (e.g. `flourish-website`).
2. **Upload this folder** to that repository (GitHub lets you drag files in via
   "Add file" > "Upload files").
3. **Create a free Netlify account** at https://netlify.com and choose
   "Add new site" > "Import from GitHub", then pick your repository.
   Netlify reads `netlify.toml` and builds the site itself — just click Deploy.
4. **Add your domain:** in Netlify, Domain management > add `flourishcomms.co.uk`,
   and follow its instructions to point the domain at Netlify.
5. **Turn on the contact form:** in Netlify, Forms, enable form detection, then
   add an email notification to hello@flourishcomms.co.uk. Submit the form once
   on the live site to confirm it arrives.

Keep your current website running until the new one is tested on Netlify's
temporary address.

## Updating the live site by hand
The site is already on GitHub and Netlify. To publish a new version of these files:
1. Open your `flourish-website` repository on github.com.
2. Click **Add file** > **Upload files**.
3. Drag in everything inside this folder (the `src` folder and the loose files).
   Files with the same name are replaced.
4. Click **Commit changes**. Netlify rebuilds and the live site updates in a minute or two.

## Making changes later (the no-download way)
Once it's on GitHub + Netlify, open **Claude Code** (in the Claude desktop app),
point it at this project, and ask for a change in plain English — e.g.
"make the About headline bigger" or "add this client logo". It edits the files
and saves them to GitHub, and Netlify updates the live site a minute or two later.
The `CLAUDE.md` file tells Claude Code how everything is organised.

## Editing by hand (optional)
- Edit files in `src/` only.
- Run `npm install` once, then `npm run build` to refresh `dist/`.
- `dist/` is what gets served; never edit it directly.

## What's inside
- `src/` — the editable website (HTML, CSS, the React app, images)
- `build.js`, `package.json`, `netlify.toml` — the automatic build step
- `dist/` is created by Netlify when it builds; it is not included here and is never edited
- `CLAUDE.md` — a guide for Claude Code
