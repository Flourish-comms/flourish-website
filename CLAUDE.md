# Flourish Communications website

A small website for Flourish Communications, a boutique marketing agency for
luxury property and design. This file tells Claude Code how the site is put
together so edits are quick and safe.

## Golden rules
- **Only edit files in `src/`.** Everything in `dist/` is generated and gets
  overwritten on every build. Never hand-edit `dist/`.
- **After editing, run `npm run build`** to refresh `dist/`, which is what the
  live site serves. Netlify also runs this automatically on deploy.
- **Keep the brand voice:** warm, confident, plain-spoken British English, no
  jargon. No em dashes.

## Where things are (all under `src/`)
- `index.html` — the page shell: title, the description Google shows, and the
  social-share preview. Edit here for SEO and share text, not for page content.
- `css/styles.css` — all styling. Brand colours and fonts are defined at the top
  under `:root`.
- `js/app.jsx` — all page content and layout, written in React. This is where
  headlines, body copy, the client list, the FAQs and the page structure live.
  Near the top are plain data arrays (EXPERTISE, PROCESS, PILLARS, CLIENTS, the
  FAQ list) — most copy changes are a one-line edit there.
- `js/images.js` — maps each image name to its file.
- `images/` — all photos. Client logos are in `images/clients/`.

## Brand kit (defined in css/styles.css :root)
- Fonts: Fraunces (display serif, for headings) and Karla (sans, for body).
- Colours: plum #2C273E (ink), bone #E1DBCE, clay/coral #CD8169, green #11381D,
  peach #E8A090 (About hero). Use the existing CSS variables rather than new hex
  values.

## Common edits
**Change wording:** find the text in `js/app.jsx` (often in a data array near the
top) and edit it. Then `npm run build`.

**Add a client logo to the "You're in good company" row:**
1. Add the logo file to `src/images/clients/`, named like `new-client.png`.
   Ideally monochrome plum (#2C273E) on a transparent background, to match.
2. In `js/images.js`, add: `"client_new-client": "images/clients/new-client.png"`
3. In `js/app.jsx`, find `const CLIENTS = [` and add:
   `{name:"New Client", url:"https://newclient.com", logo:IMG["client_new-client"]},`
4. `npm run build`.

**Swap a photo:** replace the file in `src/images/` keeping the same name, or add
a new file and update `js/images.js` and the reference in `js/app.jsx`. Then build.

## Build & preview
- `npm install` (first time only)
- `npm run build` — writes `dist/`
- Preview locally: `npx serve dist` (or any static server) and open the address.

## Still to do before launch (not yet done)
- Google Analytics is described in the privacy policy but is NOT installed yet.
  Add the GA tag to `src/index.html` together with a cookie consent banner.
- Privacy policy (`Privacy` in `js/app.jsx`) is a draft: get it reviewed, then
  remove the "working draft" line.
- Replace low-resolution logos and screenshots with original files.
- Point flourishcomms.co.uk at Netlify (Domain management).
