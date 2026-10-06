# Beane Lab website

A static site — plain HTML, CSS, and JavaScript. No build step, no framework, no dependencies to install.
All of the content lives in two data files, so you can edit text without touching layout code.

---

## Look at it on your own machine

Easiest: open `index.html` in a browser (double-click it in Finder). Everything works from `file://`.

If you'd rather serve it properly (closer to how it behaves once deployed):

```bash
cd ~/Downloads/beane-lab-site && python3 -m http.server 8777
```

Then visit <http://localhost:8777>. Press `Ctrl+C` in the terminal to stop it.

---

## Where the content lives

| File | What's in it |
|---|---|
| `assets/js/data-site.js` | Hero text, research threads, collaborators, **shared projects**, news, team roster, funders |
| `assets/js/data-papers.js` | The publication list (70 entries) |
| `assets/css/site.css` | All styling — colors, type, layout |
| `assets/js/site.js` | Page rendering and the collaboration map |
| `*.html` | Six near-identical shells; they just load the scripts |

**You will almost never need to touch `site.js` or the HTML files.** Edit the two data files and reload.

### Adding a paper

Copy any block in `data-papers.js` and fill it in:

```js
{
  y: 2026, role: 'senior', feat: false, tags: ['pml'],
  a: 'Author A, Author B, … Beane JE',
  t: 'Title of the paper',
  j: 'Journal Name', v: '12(3):456–789',
  pmid: '12345678', pmc: 'PMC1234567', doi: '10.1000/xyz',
  note: 'One plain-language sentence: what this paper actually showed.'
}
```

- `role` — `'first'`, `'senior'`, `'co'`, or `''`. Drives the badge.
- `tags` — any of `field`, `pml`, `luad`, `ai`, `trials`, `methods`, `other`. Drives the filters.
- `feat: true` — surfaces it on the home page.
- `note` — this is the thing that makes the papers page better than a CV. Keep writing them.

### Adding news

Add to the top of `window.NEWS` in `data-site.js`. Dates are `YYYY-MM-DD`; the page sorts them for you.

### Fixing the team roster

`window.TEAM` in `data-site.js`. **The current member list is a placeholder** built from recent
first-authorships — correct the titles, add anyone missing, drop anyone who has moved on.
There's a visible note on the page flagging this; delete that `note-box` block in `site.js`
(search for "Placeholder roster") once the roster is right.

### Photos

`assets/img/` is empty. Jennifer's headshot currently loads from the BU department server:

```
https://www.bumc.bu.edu/compbiomed/files/2023/05/Jen-454x636.jpg
```

That works, but it will break if BU reorganizes the site. Save a copy to
`assets/img/jennifer-beane.jpg` and change `TEAM.pi.img` to that path.

For lab member photos, add an `img:` field to each member and a matching `<img>` in the
`.member` template in `site.js`.

---

## The shared-projects feature

This is the part that doesn't exist on other lab sites, so a note on how it's built.

Every collaborator is at Boston University, and the page says so explicitly.

`window.COLLABORATORS` lists them with the URL of their own lab site. Those names become
links on each project card. Current set: `campbell`, `billatos`, `kolachalama`, `mazzilli`,
`lenburg`, `varelas`. The array order sets both the map position (top to bottom) and the
chip order — reorder it to reduce ribbon crossings if you add someone.

`window.PROJECTS` defines five joint projects. Each one carries:

- `with` — collaborator ids
- `mapLabel` — the short label used inside the map (the full `title` is too long there)
- `why` — why the project can't be done by one lab alone
- `funding`, `data`, `papers` (by PMID — they're looked up from `data-papers.js`)

Three things render from that single data structure and stay in sync automatically:

1. The **map** at the top — Beane on the left, projects in the middle, collaborators on the right.
   Ribbons are colored by collaborator. Clicking a collaborator isolates their shared work.
2. The **filter chips**.
3. The **project cards**, with linked collaborator names and the expandable detail panel.

Add a sixth project by appending to the array — the map re-lays-out on its own.
Each collaborator's color is a CSS variable (`--c-campbell`, `--c-billatos`, …) defined in
`site.css` and mapped in the `varFor()` function in `site.js`; adding a seventh person means
adding one variable in each of the three palette blocks and one line in `varFor()`.

---

## Putting it online with GitHub Pages

1. Create a repo on GitHub (e.g. `beane-lab-site`, or `beanelab.github.io` for a cleaner URL).
2. From this folder:

```bash
cd ~/Downloads/beane-lab-site && git init && git add -A && git commit -m "Initial site" && git branch -M main
```

3. Connect it and push (replace `USERNAME/REPO`):

```bash
git remote add origin https://github.com/USERNAME/REPO.git && git push -u origin main
```

4. On GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`** → Save.

It'll be live at `https://USERNAME.github.io/REPO/` in a minute or two.
The empty `.nojekyll` file is already there — it stops GitHub from running Jekyll over the site.

To update later: edit a data file, then `git add -A && git commit -m "..." && git push`.

**Custom domain** (e.g. `beanelab.org`): add a `CNAME` file containing just the domain,
point a DNS `CNAME` record at `USERNAME.github.io`, then set it under Settings → Pages.

---

## Design notes

- **Colors**: BU Red `#CC0000` as the single accent, on a cool neutral gray scale.
  Each collaborator has a distinct hue used consistently across the map, chips, and cards.
- **Type** is IBM Plex Sans with IBM Plex Mono for labels, years, and metadata, both from
  Google Fonts. BU's official typeface is Whitney, which isn't licensed for public web use;
  Plex is a freely-usable institutional sans that reads as technical rather than generic.
- **Geometry** is deliberately square (2–3px radii, hairline rules) rather than soft and
  pill-shaped — it reads as a research instrument, not a marketing page.
- **Dark mode** follows the system setting, with a manual toggle in the header that's remembered
  per browser.
- Fully responsive; the collaboration map scrolls sideways on phones rather than shrinking to
  illegibility.

---

## Still to do

- [ ] Confirm the team roster and add photos
- [ ] Save a local copy of the PI headshot
- [ ] Add Google Scholar / lab GitHub URLs in `SITE` (they're blank, so the links stay hidden)
- [ ] Add news items as they happen
- [ ] Decide on a repo name and deploy
