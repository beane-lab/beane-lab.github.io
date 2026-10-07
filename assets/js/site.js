/* ============================================================
   Beane Lab — site behaviour
   ============================================================ */
(function () {
  'use strict';

  /* ---------- tiny helpers ---------- */
  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = s => String(s == null ? '' : s)
    .replace(/&(?!#?\w+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const NAV = [
    { href: 'index.html',    label: 'Home',            key: 'home' },
    { href: 'research.html', label: 'Research',        key: 'research' },
    { href: 'shared.html',   label: 'Shared Projects', key: 'shared' },
    { href: 'papers.html',   label: 'Papers',          key: 'papers' },
    { href: 'news.html',     label: 'News',            key: 'news' },
    { href: 'team.html',     label: 'Team',            key: 'team' }
  ];

  const ICON = {
    arrow: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>',
    ext:   '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3H3v10h10v-3M10 3h3v3M13 3L7 9"/></svg>',
    chev:  '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6l4 4 4-4"/></svg>',
    search:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5L14 14"/></svg>',
    menu:  '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 6h14M3 10h14M3 14h14"/></svg>'
  };

  const MARK = `<svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
    <circle cx="20" cy="20" r="19" fill="none" stroke="var(--rule-2)" stroke-width="1.4"/>
    <circle cx="20" cy="20" r="12.5" fill="none" stroke="var(--red)" stroke-width="1.4" opacity=".55"/>
    <circle cx="20" cy="20" r="6" fill="var(--red)"/>
    <circle cx="31.5" cy="12" r="2.4" fill="var(--red)" opacity=".75"/>
    <circle cx="9.5" cy="27.5" r="1.9" fill="var(--red)" opacity=".5"/>
    <circle cx="28" cy="30" r="1.6" fill="var(--red)" opacity=".4"/>
  </svg>`;

  /* ---------- chrome ---------- */
  function mountChrome(active) {
    const S = window.SITE;

    const head = document.createElement('header');
    head.className = 'site-head';
    head.innerHTML = `
      <div class="head-in">
        <div class="head-top">
          <a class="brand" href="index.html">
            <span class="brand-txt">
              <b>Beane Lab</b>
              <span>Boston University</span>
            </span>
          </a>
          <div class="head-tools">
            <button class="icon-btn nav-toggle" id="navBtn" type="button" aria-label="Menu" aria-expanded="false">${ICON.menu}</button>
          </div>
        </div>
        <div class="head-nav" id="headNav">
          <nav class="nav">
            ${NAV.map(n => `<a href="${n.href}"${n.key === active ? ' class="on" aria-current="page"' : ''}>${n.label}</a>`).join('')}
          </nav>
        </div>
      </div>`;
    document.body.insertBefore(head, document.body.firstChild);

    const skip = document.createElement('a');
    skip.className = 'skip'; skip.href = '#main'; skip.textContent = 'Skip to content';
    document.body.insertBefore(skip, head);

    const navBtn = $('#navBtn'), navRow = $('#headNav');
    navBtn.addEventListener('click', () => {
      const open = navRow.classList.toggle('open');
      navBtn.setAttribute('aria-expanded', String(open));
    });

    /* footer */
    const links = [
      S.pubmed ? `<a href="${S.pubmed}" target="_blank" rel="noopener">PubMed bibliography</a>` : '',
      S.orcid  ? `<a href="${S.orcid}" target="_blank" rel="noopener">ORCID</a>` : '',
      S.scholar ? `<a href="${S.scholar}" target="_blank" rel="noopener">Google Scholar</a>` : '',
      S.github  ? `<a href="${S.github}" target="_blank" rel="noopener">GitHub</a>` : ''
    ].filter(Boolean).join('');

    const foot = document.createElement('footer');
    foot.className = 'site-foot';
    foot.innerHTML = `
      <div class="wrap">
        <div class="foot-grid">
          <div class="foot-brand">
            <a class="brand" href="index.html">${MARK}
              <span class="brand-txt"><b>Beane Lab</b><span>Boston University</span></span></a>
            <p>Computational biology of the airway field of injury, lung premalignancy, and early cancer detection.</p>
          </div>
          <div class="foot-col">
            <h4>Explore</h4>
            ${NAV.slice(1).map(n => `<a href="${n.href}">${n.label}</a>`).join('')}
          </div>
          <div class="foot-col">
            <h4>Contact</h4>
            <a href="mailto:${S.email}">${S.email}</a>
            <p>${S.affil1}</p>
            ${links}
          </div>
        </div>
        <div class="foot-bot">
          <span>© ${new Date().getFullYear()} Beane Lab, Boston University Chobanian &amp; Avedisian School of Medicine.</span>
          <span><a href="https://www.bu.edu" target="_blank" rel="noopener">Boston University</a></span>
        </div>
      </div>`;
    document.body.appendChild(foot);
  }

  /* ---------- reveal on scroll ---------- */
  function initReveal() {
    const els = $$('.rv');
    if (!els.length || !('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
    const io = new IntersectionObserver((ents) => {
      ents.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -40px 0px', threshold: .08 });
    els.forEach((e, i) => { e.style.transitionDelay = Math.min(i % 6, 5) * 55 + 'ms'; io.observe(e); });
  }

  /* ---------- hero backdrop: the "field of injury" ---------- */
  function fieldPlate() {
    // Two things in one plate, kept visually separate:
    //   TOP  — space: where alteration sits across the epithelium at one moment.
    //          grey = unaltered; red = carcinogen-exposure-associated change, at a
    //          uniform rate across the WHOLE lining (not graded toward the lesion);
    //          ringed deep red = a lesion cell, carrying the field changes AND
    //          further lesion-specific ones.
    //   LOWER — time: a lesion is not a one-way street. It can progress in grade
    //          and on to invasive cancer, or regress toward normal epithelium.
    //          Only the step into invasion is drawn as one-way.
    let sd = 20240423;
    const rnd = () => (sd = (sd * 1664525 + 1013904223) % 4294967296) / 4294967296;

    const W = 560, H = 486;
    const R = 3.2;
    const LES = { x: 408, y: 112, r: 33 };
    const BRUSH = { x: 122, y: 228, r: 44 };
    const ALTERED = 0.44;

    let cells = '', brushN = 0;
    for (let gx = 22; gx <= 540; gx += 25) {
      for (let gy = 20; gy <= 286; gy += 25) {
        const x = gx + (rnd() - .5) * 15, y = gy + (rnd() - .5) * 15;
        if (Math.hypot(x - LES.x, y - LES.y) < LES.r + 4) continue;
        const inBrush = Math.hypot(x - BRUSH.x, y - BRUSH.y) < BRUSH.r;
        const altered = inBrush ? (brushN++ % 9) < 4 : rnd() < ALTERED;
        cells += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${R}" fill="${
          altered ? 'var(--red)' : 'var(--ink-4)'}" opacity="${altered ? '.75' : '.4'}"/>`;
      }
    }

    let lesion = '';
    for (let i = 0; i < 42; i++) {
      const ang = rnd() * Math.PI * 2, rad = Math.sqrt(rnd()) * LES.r;
      lesion += `<circle cx="${(LES.x + Math.cos(ang) * rad).toFixed(1)}" cy="${
        (LES.y + Math.sin(ang) * rad).toFixed(1)}" r="${R}" fill="var(--red-deep)"
        stroke="var(--ink)" stroke-width="1"/>`;
    }

    const halo = 'stroke="var(--card)" stroke-width="3.5" paint-order="stroke"';

    /* ---- fate band ---- */
    const NY = 404, NR = 11;
    const stages = [
      { x: 70,  label: 'normal',      fill: 'var(--ink-4)',   op: '.4',  sw: 0 },
      { x: 207, label: 'low grade',   fill: 'var(--red)',     op: '.6',  sw: 0 },
      { x: 344, label: 'high grade',  fill: 'var(--red-deep)', op: '1',  sw: 1 },
      { x: 481, label: 'invasive',    fill: 'var(--red-deep)', op: '1',  sw: 1.6 }
    ];
    const nodes = stages.map(st => `
      <circle cx="${st.x}" cy="${NY}" r="${NR}" fill="${st.fill}" opacity="${st.op}"
        ${st.sw ? `stroke="var(--ink)" stroke-width="${st.sw}"` : ''}/>
      ${st.label === 'invasive' ? `<circle cx="${st.x}" cy="${NY}" r="${NR + 5}" fill="none"
        stroke="var(--red)" stroke-width="1" opacity=".6"/>` : ''}
      <text x="${st.x}" y="${NY + 40}" font-family="var(--font-mono)" font-size="9.5"
        fill="var(--ink-3)" text-anchor="middle">${st.label}</text>`).join('');

    let arrows = '';
    for (let i = 0; i < 3; i++) {
      const x1 = stages[i].x + NR + 7, x2 = stages[i + 1].x - NR - 7;
      arrows += `<line x1="${x1}" y1="${NY - 16}" x2="${x2}" y2="${NY - 16}"
        stroke="var(--ink-3)" stroke-width="1" marker-end="url(#arw)"/>`;
      if (i < 2) {   // only the step into invasion is one-way
        arrows += `<line x1="${x2}" y1="${NY + 16}" x2="${x1}" y2="${NY + 16}"
          stroke="var(--ink-3)" stroke-width="1" marker-end="url(#arw)"/>`;
      }
    }

    return `<figure class="field-plate" style="margin:0">
      <svg viewBox="0 0 ${W} ${H}" role="img"
           aria-label="Two-part diagram. Above: cells with carcinogen-exposure-associated changes, in red, spread evenly across the whole airway lining rather than clustering near the lesion; a focal lesion at upper right holds cells with further lesion-specific changes; a brushing site at lower left, far from the lesion, still contains altered cells. Below: a lesion's possible fates — normal epithelium, low grade, and high grade connected by arrows in both directions, with a one-way arrow from high grade to invasive cancer.">
        <defs>
          <marker id="arw" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6"
                  markerHeight="6" orient="auto-start-reverse">
            <path d="M0,1 L7,4 L0,7 Z" fill="var(--ink-3)"/>
          </marker>
        </defs>

        ${cells}
        ${lesion}

        <circle cx="${LES.x}" cy="${LES.y}" r="${LES.r + 13}" fill="none"
                stroke="var(--red)" stroke-width="1.1" opacity=".75"/>
        <line x1="${LES.x + 34}" y1="${LES.y - 34}" x2="492" y2="42"
              stroke="var(--ink-3)" stroke-width=".8"/>
        <text x="538" y="39" font-family="var(--font-mono)" font-size="10.5"
              fill="var(--ink-2)" text-anchor="end" ${halo}>lesion</text>

        <circle cx="${BRUSH.x}" cy="${BRUSH.y}" r="${BRUSH.r}" fill="none"
                stroke="var(--ink-3)" stroke-width="1" stroke-dasharray="4 3"/>
        <text x="${BRUSH.x}" y="${BRUSH.y + BRUSH.r + 17}" font-family="var(--font-mono)"
              font-size="10.5" fill="var(--ink-2)" text-anchor="middle" ${halo}>brushing site</text>
        <text x="${BRUSH.x}" y="${BRUSH.y + BRUSH.r + 30}" font-family="var(--font-mono)"
              font-size="9.5" fill="var(--ink-3)" text-anchor="middle" ${halo}>normal-appearing</text>

        <line x1="22" y1="322" x2="538" y2="322" stroke="var(--rule-2)" stroke-width="1"/>
        <text x="22" y="344" font-family="var(--font-mono)" font-size="9.5"
              fill="var(--ink-4)" letter-spacing="1.4">WHAT BECOMES OF A LESION</text>
        <text x="538" y="344" font-family="var(--font-mono)" font-size="9.5"
              fill="var(--ink-4)" text-anchor="end">schematic</text>

        <text x="70" y="${NY - 26}" font-family="var(--font-mono)" font-size="9"
              fill="var(--ink-4)">progresses</text>
        <text x="70" y="${NY + 28}" font-family="var(--font-mono)" font-size="9"
              fill="var(--ink-4)">regresses</text>
        ${arrows}
        ${nodes}
      </svg>
      <figcaption class="field-cap">
        <span class="field-key">
          <i><b style="background:var(--ink-4);opacity:.5"></b>unaltered</i>
          <i><b style="background:var(--red)"></b>exposure-altered</i>
          <i><b style="background:var(--red-deep);border:1px solid var(--ink)"></b>+ lesion-specific</i>
        </span>
        <b>The airway field of injury.</b> Carcinogen exposure alters cells across the
        entire respiratory lining at a similar rate everywhere &mdash; which is why a
        brushing taken far from any lesion carries the signal. Lesion cells carry further
        changes of their own, and a lesion may grow more severe and become invasive, or
        regress toward normal epithelium. Which way it goes is the question we work on.
      </figcaption>
    </figure>`;
  }

  /* ---------- shared bits ---------- */
  const collabById = id => (window.COLLABORATORS || []).find(c => c.id === id);
  const varFor = id => ({
    beane:        'var(--red)',
    campbell:     'var(--c-campbell)',
    burks:        'var(--c-burks)',
    spira:        'var(--c-spira)',
    billatos:     'var(--c-billatos)',
    kolachalama:  'var(--c-kola)',
    mazzilli:     'var(--c-mazzilli)',
    lenburg:      'var(--c-lenburg)',
    varelas:      'var(--c-varelas)'
  }[id] || 'var(--ink-3)');

  const pubUrl = p => p.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${p.pmid}/`
    : (p.doi ? `https://doi.org/${p.doi}` : '#');

  const paperByPmid = pmid => (window.PAPERS || []).find(p => p.pmid === pmid);

  function miniPapers(pmids) {
    return `<div class="mini-papers">` + pmids.map(id => {
      const p = paperByPmid(id); if (!p) return '';
      return `<a class="mini-paper" href="${pubUrl(p)}" target="_blank" rel="noopener">
        <span class="my">${p.y}</span>
        <span><span class="mt">${esc(p.t)}</span> <span class="mj">${esc(p.j)}</span></span>
      </a>`;
    }).join('') + `</div>`;
  }

  /* ============================================================
     THE COLLABORATION MAP
     Beane on the left, shared projects in the middle,
     collaborators on the right. Ribbons carry the collaborator's colour.
     ============================================================ */
  function collabMap() {
    const P = window.PROJECTS, C = (window.COLLABORATORS || []).filter(c => !c.center);
    // grow the canvas with the number of collaborators so the right-hand
    // column never crowds
    const W = 1100, H = Math.max(660, C.length * 88 + 90);
    const bx = 104, by = H / 2, br = 44;
    const px = 500, pw = 262, ph = 52;
    const cx = 876, cr = 25;

    const pStep = (H - 130) / (P.length - 1);
    const pY = i => 65 + i * pStep;
    const cStep = (H - 140) / (C.length - 1);
    const cY = i => 72 + i * cStep;

    const curve = (x1, y1, x2, y2) => {
      const mx = (x1 + x2) / 2;
      return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
    };

    let ribbons = '', projNodes = '', persNodes = '';

    P.forEach((pr, i) => {
      const y = pY(i);
      // spine: Beane -> project
      ribbons += `<path class="map-link" data-proj="${pr.id}" data-collab="beane"
        d="${curve(bx + br, by, px - pw / 2, y)}" fill="none"
        stroke="var(--red)" stroke-width="2.2" stroke-opacity=".40" stroke-linecap="round"/>`;
      // project -> each collaborator
      pr.with.forEach(cid => {
        const ci = C.findIndex(c => c.id === cid); if (ci < 0) return;
        ribbons += `<path class="map-link" data-proj="${pr.id}" data-collab="${cid}"
          d="${curve(px + pw / 2, y, cx - cr, cY(ci))}" fill="none"
          stroke="${varFor(cid)}" stroke-width="2.2" stroke-opacity=".45" stroke-linecap="round"/>`;
      });

      projNodes += `<g class="map-proj" data-proj="${pr.id}" tabindex="0" role="button"
          aria-label="${esc(pr.title)}">
        <rect x="${px - pw / 2}" y="${y - ph / 2}" width="${pw}" height="${ph}" rx="11"
          fill="var(--card)" stroke="var(--rule-2)" stroke-width="1.3"/>
        <text class="map-proj-label" x="${px}" y="${y + 4}" text-anchor="middle"
          fill="var(--ink)">${esc(pr.mapLabel || pr.title)}</text>
      </g>`;
    });

    C.forEach((c, i) => {
      const y = cY(i);
      persNodes += `<g class="map-person" data-collab="${c.id}" tabindex="0" role="button"
          aria-label="Highlight projects with ${esc(c.name)}">
        <circle cx="${cx}" cy="${y}" r="${cr}" fill="${varFor(c.id)}" fill-opacity=".14"
          stroke="${varFor(c.id)}" stroke-width="2"/>
        <text class="map-node-sub" x="${cx}" y="${y + 4}" text-anchor="middle"
          fill="${varFor(c.id)}" font-weight="700">${esc(c.short.slice(0, 2).toUpperCase())}</text>
        <text class="map-node-label" x="${cx + cr + 12}" y="${y + 1}"
          fill="var(--ink)">${esc(c.short)}</text>
        <text class="map-node-sub" x="${cx + cr + 12}" y="${y + 15}"
          fill="var(--ink-3)">${esc(c.name.split(' ').slice(0, -1).join(' '))}</text>
      </g>`;
    });

    return `<div class="map-shell">
      <div class="map-scroll">
      <svg id="cmap" viewBox="0 0 ${W} ${H}" role="img"
           aria-label="Map of research projects shared between the Beane lab and four collaborating labs">
        <text class="map-caption" x="${bx}" y="24" text-anchor="middle" fill="var(--ink-4)">BEANE LAB</text>
        <text class="map-caption" x="${px}" y="24" text-anchor="middle" fill="var(--ink-4)">SHARED PROJECTS</text>
        <text class="map-caption" x="${cx - cr}" y="24" text-anchor="start" fill="var(--ink-4)">BOSTON UNIVERSITY COLLABORATORS</text>
        <g id="ribbons">${ribbons}</g>
        <g class="map-person" data-collab="beane" tabindex="0" role="button" aria-label="Show all projects">
          <circle cx="${bx}" cy="${by}" r="${br}" fill="var(--red)" fill-opacity=".12"
            stroke="var(--red)" stroke-width="2.4"/>
          <text class="map-node-label" x="${bx}" y="${by - 2}" text-anchor="middle"
            fill="var(--red)" font-size="14">Beane</text>
          <text class="map-node-sub" x="${bx}" y="${by + 14}" text-anchor="middle"
            fill="var(--red)" opacity=".8">Lab</text>
        </g>
        ${projNodes}
        ${persNodes}
      </svg>
      </div>
      <p class="map-hint">
        <span class="hint-wide">Hover or tap a collaborator to isolate shared work · select a project to open it below</span>
        <span class="hint-narrow">Swipe the map sideways · tap a collaborator to filter, or a project to open it</span>
      </p>
    </div>`;
  }

  function wireMap() {
    const svg = $('#cmap'); if (!svg) return;
    const links = $$('.map-link', svg);
    const people = $$('.map-person', svg);
    const projs = $$('.map-proj', svg);
    let locked = null;

    const apply = (cid) => {
      links.forEach(l => {
        const on = !cid || cid === 'beane' || l.getAttribute('data-collab') === cid ||
          (l.getAttribute('data-collab') === 'beane' && isProjOf(l.getAttribute('data-proj'), cid));
        l.classList.toggle('map-dim', !on);
        l.setAttribute('stroke-width', on && cid ? '3.4' : '2.2');
        l.setAttribute('stroke-opacity', on && cid ? '.85' : (cid ? '.4' : (l.getAttribute('data-collab') === 'beane' ? '.40' : '.45')));
      });
      projs.forEach(g => {
        const on = !cid || cid === 'beane' || isProjOf(g.getAttribute('data-proj'), cid);
        g.classList.toggle('map-dim', !on);
      });
      people.forEach(g => {
        const id = g.getAttribute('data-collab');
        const on = !cid || id === cid || id === 'beane';
        g.classList.toggle('map-dim', !on);
      });
    };
    const isProjOf = (pid, cid) => {
      if (!cid || cid === 'beane') return true;
      const pr = (window.PROJECTS || []).find(p => p.id === pid);
      return !!pr && pr.with.indexOf(cid) >= 0;
    };

    people.forEach(g => {
      const id = g.getAttribute('data-collab');
      g.addEventListener('mouseenter', () => { if (!locked) apply(id === 'beane' ? null : id); });
      g.addEventListener('mouseleave', () => { if (!locked) apply(null); });
      const act = () => {
        locked = (locked === id || id === 'beane') ? null : id;
        apply(locked);
        syncChips(locked);
        filterProjects(locked);
      };
      g.addEventListener('click', act);
      g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); act(); } });
    });

    projs.forEach(g => {
      const open = () => {
        const id = g.getAttribute('data-proj');
        const card = document.getElementById('proj-' + id);
        if (!card) return;
        card.classList.add('open');
        const btn = $('.toggle-btn', card); if (btn) btn.setAttribute('aria-expanded', 'true');
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      };
      g.addEventListener('click', open);
      g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
      g.addEventListener('mouseenter', () => {
        $$('.map-link', svg).forEach(l =>
          l.classList.toggle('map-dim', l.getAttribute('data-proj') !== g.getAttribute('data-proj')));
      });
      g.addEventListener('mouseleave', () => { if (!locked) apply(null); else apply(locked); });
    });

    window.__cmapApply = apply;
  }

  function syncChips(cid) {
    $$('.chip').forEach(c => c.classList.toggle('on', (c.dataset.collab || '') === (cid || '')));
  }
  function filterProjects(cid) {
    $$('.proj').forEach(card => {
      const w = (card.dataset.with || '').split(',');
      card.classList.toggle('hide', !!cid && w.indexOf(cid) < 0);
    });
  }

  /* ============================================================
     PAGE RENDERERS
     ============================================================ */

  const pages = {};

  /* ---------- HOME ---------- */
  pages.home = function (main) {
    const S = window.SITE, R = window.RESEARCH, P = window.PAPERS;
    const feat = P.filter(p => p.feat).sort((a, b) => b.y - a.y).slice(0, 6);
    const news = (window.NEWS || []).slice().sort((a, b) => b.d.localeCompare(a.d)).slice(0, 3);

    main.innerHTML = `
      <section class="hero">
        <div class="wrap">
          <div class="hero-grid">
            <div>
              <h1>${S.tagline}</h1>
              <p class="hero-lede">${S.heroLede}</p>
              <div class="hero-cta">
                <a class="tlink" href="research.html">Our research</a>
                <a class="tlink quiet" href="shared.html">Shared projects</a>
                <a class="tlink quiet" href="papers.html">Papers</a>
              </div>
            </div>
            <div>${fieldPlate()}</div>
          </div>
        </div>
      </section>

      <section class="section alt">
        <div class="wrap">
          <div class="sec-head-row">
            <div class="sec-head">
              <h2>What we work on</h2>
              <p>Five threads, all of them downstream of one idea: the damage that precedes cancer is measurable, and measurable means actionable.</p>
            </div>
            <a class="link-more" href="research.html">All research ${ICON.arrow}</a>
          </div>
          <div class="research-grid cols-2">
            ${R.map(r => `
              <a class="rcard rv" href="research.html#${r.id}">
                <span class="num">${r.num}</span>
                <h3>${r.title}</h3>
                <div class="kicker">${r.kicker}</div>
                <p>${r.lede}</p>
                <span class="go">Read more ${ICON.arrow}</span>
              </a>`).join('')}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="sec-head-row">
            <div class="sec-head">
              <h2>Work we do together</h2>
              <p>A large share of this lab's output is genuinely joint — projects where another lab's expertise is not an acknowledgment but a load-bearing wall. We make that visible rather than burying it in author lists.</p>
            </div>
            <a class="link-more" href="shared.html">See the map ${ICON.arrow}</a>
          </div>
          <div class="chips" style="margin-bottom:0">
            ${(window.COLLABORATORS || []).filter(c => !c.center).map(c =>
              `<a class="chip" href="shared.html#proj-list" style="color:${varFor(c.id)}">
                <span class="dot"></span>${esc(c.name)}</a>`).join('')}
          </div>
        </div>
      </section>

      <section class="section alt">
        <div class="wrap">
          <div class="sec-head-row">
            <div class="sec-head"><h2>Selected papers</h2></div>
            <a class="link-more" href="papers.html">All publications ${ICON.arrow}</a>
          </div>
          <div class="feat-grid">
            ${feat.map(p => `
              <a class="feat rv" href="${pubUrl(p)}" target="_blank" rel="noopener">
                <span class="fy">${p.y}</span>
                <h3>${esc(p.t)}</h3>
                <div class="fj">${esc(p.j)}</div>
                <p class="fn">${esc(p.note)}</p>
              </a>`).join('')}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="sec-head-row">
            <div class="sec-head"><h2>Latest news</h2></div>
            <a class="link-more" href="news.html">All news ${ICON.arrow}</a>
          </div>
          <div class="news-list">
            ${news.map(n => newsItem(n)).join('')}
          </div>
        </div>
      </section>

      <section class="section alt tight">
        <div class="wrap">
          <div class="sec-head"><h2>Support</h2></div>
          <div class="funders">
            ${(window.FUNDERS || []).map(f => `<span class="funder">${f}</span>`).join('')}
          </div>
        </div>
      </section>`;
  };

  /* ---------- RESEARCH ---------- */
  pages.research = function (main) {
    const R = window.RESEARCH;
    main.innerHTML = `
      <section class="page-head">
        <div class="wrap">
          <span class="eyebrow">Research</span>
          <h1>Reading the damage that comes before cancer</h1>
          <p class="lede">Carcinogen exposure creates a molecularly measurable field of injury across the whole respiratory lining. That field can be sampled minimally invasively, and its state — together with the state of the premalignant lesions inside it — determines whether disease progresses. Everything below follows from that.</p>
        </div>
      </section>
      <section class="section" style="padding-top:28px">
        <div class="wrap">
          ${R.map(r => `
            <article class="thread" id="${r.id}">
              <aside class="thread-side">
                <div class="thread-num">${r.num}</div>
                <div class="thread-kicker">${r.kicker}</div>
              </aside>
              <div class="thread-body">
                <h2>${r.title}</h2>
                <p class="thread-lede">${r.lede}</p>
                ${r.body.map(b => `<p>${b}</p>`).join('')}
                <div class="anchors">
                  ${r.anchors.map(a => `<span class="anchor-chip">${esc(a)}</span>`).join('')}
                </div>
                <p style="margin-top:22px">
                  <a class="link-more" href="papers.html?tag=${r.tag}">Papers in this area ${ICON.arrow}</a>
                </p>
              </div>
            </article>`).join('')}
        </div>
      </section>`;
  };

  /* ---------- SHARED PROJECTS ---------- */
  pages.shared = function (main) {
    const P = window.PROJECTS, C = (window.COLLABORATORS || []).filter(c => !c.center);

    const card = pr => {
      const people = pr.with.map(id => collabById(id)).filter(Boolean);
      const bars = ['beane'].concat(pr.with);
      return `
      <article class="proj rv" id="proj-${pr.id}" data-with="${pr.with.join(',')}">
        <div class="proj-bar">${bars.map(id => `<i style="background:${varFor(id)}"></i>`).join('')}</div>
        <div class="proj-top">
          <div class="proj-meta">
            <span class="proj-status">${esc(pr.status)}</span>
            <span class="proj-sub">${pr.sub}</span>
          </div>
          <h3>${pr.title}</h3>
          <p class="proj-lede">${pr.lede}</p>
          <div class="proj-people">
            <span class="person-tag" style="color:var(--red)"><span class="dot"></span>Jennifer Beane</span>
            ${people.map(c => c.url
              ? `<a class="person-tag is-link" href="${c.url}" target="_blank" rel="noopener"
                   style="color:${varFor(c.id)}" title="${esc(c.lab || c.name + ' lab')}">
                   <span class="dot"></span>${esc(c.name)}${ICON.ext}</a>`
              : `<span class="person-tag" style="color:${varFor(c.id)}"><span class="dot"></span>${esc(c.name)}</span>`
            ).join('')}
          </div>
        </div>
        <div class="proj-more"><div><div class="proj-more-in">
          <div class="why"><b>Why it has to be joint</b>${pr.why}</div>
          <div class="detail-grid">
            <div class="detail-col">
              <h4>Funding</h4>
              <ul>${pr.funding.map(f => `<li>${f}</li>`).join('')}</ul>
            </div>
            <div class="detail-col">
              <h4>Data &amp; code</h4>
              <div class="acc-chips">${pr.data.map(d => `<span class="acc">${esc(d)}</span>`).join('')}</div>
            </div>
          </div>
          <div class="proj-papers">
            <h4>Papers from this project</h4>
            ${miniPapers(pr.papers)}
          </div>
        </div></div></div>
        <div class="proj-foot">
          <button class="toggle-btn" type="button" aria-expanded="false" aria-controls="proj-${pr.id}">
            <span>Funding, data &amp; papers</span>${ICON.chev}
          </button>
          <span class="proj-count">${pr.papers.filter(paperByPmid).length} papers</span>
        </div>
      </article>`;
    };

    main.innerHTML = `
      <section class="page-head">
        <div class="wrap">
          <span class="eyebrow">Shared Projects</span>
          <h1>The work that only happens jointly</h1>
          <p class="lede">Author lists flatten everything into a single row of names. They do not tell you that a paper exists because a tissue biologist, a machine learning group, a clinical trialist, and a computational lab each contributed something the others could not. These five projects are the backbone of the lab, and each of them is genuinely shared.</p>
          <p class="lede-note"><strong>Every collaborator below is at Boston University.</strong> These are standing, in-house partnerships across the Chobanian &amp; Avedisian School of Medicine and the Faculty of Computing &amp; Data Sciences &mdash; not occasional outside consultations.</p>
        </div>
      </section>

      <section class="section" style="padding-top:34px">
        <div class="wrap">
          ${collabMap()}

          <div id="proj-list"></div>
          <div class="chips">
            <button class="chip on" type="button" data-collab="">All projects</button>
            ${C.map(c => `<button class="chip" type="button" data-collab="${c.id}" style="color:${varFor(c.id)}">
              <span class="dot"></span>${esc(c.name)}</button>`).join('')}
          </div>

          <div class="proj-list">${P.map(card).join('')}</div>
        </div>
      </section>`;

    wireMap();

    $$('.toggle-btn').forEach(b => b.addEventListener('click', () => {
      const card = b.closest('.proj');
      const open = card.classList.toggle('open');
      b.setAttribute('aria-expanded', String(open));
    }));

    $$('.chip').forEach(c => c.addEventListener('click', () => {
      const id = c.dataset.collab || null;
      syncChips(id);
      filterProjects(id);
      if (window.__cmapApply) window.__cmapApply(id);
    }));
  };

  /* ---------- PAPERS ---------- */
  const TAGS = [
    { k: '',       l: 'All' },
    { k: 'pml',    l: 'Premalignancy' },
    { k: 'field',  l: 'Field of injury' },
    { k: 'luad',   l: 'Early adenocarcinoma' },
    { k: 'ai',     l: 'Machine learning' },
    { k: 'trials', l: 'Interception trials' },
    { k: 'methods',l: 'Methods' },
    { k: 'other',  l: 'Other' }
  ];

  pages.papers = function (main) {
    const P = window.PAPERS.slice().sort((a, b) => b.y - a.y);
    const S = window.SITE;

    let rows = '', lastY = null;
    P.forEach(p => {
      if (p.y !== lastY) { rows += `<div class="yr-head" data-year="${p.y}">${p.y}</div>`; lastY = p.y; }
      const badges = [];
      if (p.role === 'first')  badges.push('<span class="badge badge-first">First author</span>');
      if (p.role === 'senior') badges.push('<span class="badge badge-senior">Senior author</span>');
      if (p.role === 'consortium') badges.push('<span class="badge badge-consortium">Consortium author</span>');
      if (p.pre)               badges.push('<span class="badge badge-pre">Preprint</span>');
      const tl = (p.tags || []).map(t => (TAGS.find(x => x.k === t) || {}).l).filter(Boolean);
      if (tl.length) badges.push(`<span class="badge badge-tag">${esc(tl[0])}</span>`);

      rows += `<a class="paper" href="${pubUrl(p)}" target="_blank" rel="noopener"
          data-tags="${(p.tags || []).join(' ')}"
          data-s="${esc((p.t + ' ' + p.a + ' ' + p.j + ' ' + (p.note || '')).toLowerCase())}">
        ${badges.length ? `<div class="paper-badges">${badges.join('')}</div>` : ''}
        <h3>${esc(p.t)}</h3>
        <div class="authors">${esc(p.a)}</div>
        <div class="venue"><i>${esc(p.j)}</i>${p.v ? ' · ' + esc(p.v) : ''}${p.pmid ? ' · PMID ' + p.pmid : ''}</div>
        ${p.note ? `<div class="note">${esc(p.note)}</div>` : ''}
      </a>`;
    });

    main.innerHTML = `
      <section class="page-head">
        <div class="wrap">
          <span class="eyebrow">Papers</span>
          <h1>Publications</h1>
          <p style="margin-top:14px">
            <a class="link-more" href="${S.pubmed}" target="_blank" rel="noopener">Full NCBI bibliography ${ICON.ext}</a>
          </p>
        </div>
      </section>
      <section class="section" style="padding-top:26px">
        <div class="wrap">
          <div class="paper-tools">
            <label class="search-box">
              ${ICON.search}
              <input id="pSearch" type="search" placeholder="Search titles, authors, journals, findings…"
                     aria-label="Search publications">
            </label>
          </div>
          <div class="chips">
            ${TAGS.map(t => `<button class="chip${t.k === '' ? ' on' : ''}" type="button" data-tag="${t.k}">${t.l}</button>`).join('')}
          </div>
          <div class="paper-list" id="pList">${rows}</div>
          <div class="empty" id="pEmpty" hidden>No papers match that search.</div>
        </div>
      </section>`;

    let tag = '', q = '';
    const params = new URLSearchParams(location.search);
    if (params.get('tag')) tag = params.get('tag');

    const run = () => {
      let shown = 0;
      $$('.paper').forEach(a => {
        const okT = !tag || (a.dataset.tags || '').split(' ').indexOf(tag) >= 0;
        const okQ = !q || (a.dataset.s || '').indexOf(q) >= 0;
        const on = okT && okQ;
        a.classList.toggle('hide', !on);
        if (on) shown++;
      });
      // hide year headings with nothing under them
      $$('.yr-head').forEach(h => {
        let n = h.nextElementSibling, any = false;
        while (n && n.classList.contains('paper')) { if (!n.classList.contains('hide')) { any = true; break; } n = n.nextElementSibling; }
        h.style.display = any ? '' : 'none';
      });
      $('#pEmpty').hidden = shown > 0;
      $$('.chip').forEach(c => c.classList.toggle('on', (c.dataset.tag || '') === tag));
    };

    $('#pSearch').addEventListener('input', e => { q = e.target.value.trim().toLowerCase(); run(); });
    $$('.chip').forEach(c => c.addEventListener('click', () => { tag = c.dataset.tag || ''; run(); }));
    run();
  };

  /* ---------- NEWS ---------- */
  function newsItem(n) {
    const d = new Date(n.d + 'T12:00:00');
    const fmt = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const upcoming = d > new Date();
    return `<article class="news-item">
      <div class="news-when">
        <span class="news-date">${fmt}</span>
        ${upcoming ? '<span class="news-tag is-upcoming">Upcoming</span>' : ''}
        ${n.tag ? `<span class="news-tag">${esc(n.tag)}</span>` : ''}
      </div>
      <div class="news-body">
        <h3>${esc(n.t)}</h3>
        <p>${n.b}</p>
        ${n.link ? `<a class="nlink" href="${n.link}" target="_blank" rel="noopener">${
          n.tag === 'Paper' ? 'Read the paper' : 'Read more'} ${ICON.ext}</a>` : ''}
      </div>
    </article>`;
  }

  pages.news = function (main) {
    const N = (window.NEWS || []).slice().sort((a, b) => b.d.localeCompare(a.d));
    main.innerHTML = `
      <section class="page-head">
        <div class="wrap">
          <span class="eyebrow">News</span>
          <h1>Lab news</h1>
          <p class="lede">Papers, awards, and milestones.</p>
        </div>
      </section>
      <section class="section" style="padding-top:26px">
        <div class="wrap"><div class="news-list">${N.map(newsItem).join('')}</div></div>
      </section>`;
  };

  /* ---------- TEAM ---------- */
  pages.team = function (main) {
    const T = window.TEAM, S = window.SITE;
    const initials = n => n.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();

    main.innerHTML = `
      <section class="page-head">
        <div class="wrap">
          <span class="eyebrow">Team</span>
          <h1>Who we are</h1>
          <p class="lede">Computational biologists, bioinformaticians, and bench scientists working on lung cancer before it is lung cancer.</p>
        </div>
      </section>
      <section class="section" style="padding-top:34px">
        <div class="wrap">
          <div class="pi-block">
            <div>
              ${T.pi.img
                ? `<img class="pi-photo" src="${T.pi.img}" alt="${esc(T.pi.name)}" loading="lazy">`
                : `<div class="pi-photo-ph">Add a photo to assets/img/</div>`}
            </div>
            <div class="pi-info">
              <h2>${esc(T.pi.name)}</h2>
              <div class="pi-role">${esc(T.pi.role)}</div>
              <div class="pi-titles">${T.pi.title}<br>${T.pi.title2}</div>
              <p class="bio">${T.pi.bio}</p>
              <div class="pi-links">
                <a class="btn btn-ghost" href="mailto:${S.email}">${S.email}</a>
                <a class="btn btn-ghost" href="${S.orcid}" target="_blank" rel="noopener">ORCID ${ICON.ext}</a>
                <a class="btn btn-ghost" href="${S.pubmed}" target="_blank" rel="noopener">Bibliography ${ICON.ext}</a>
              </div>
            </div>
          </div>

          <div class="sec-head"><h2>Lab members</h2></div>
          <div class="team-grid">
            ${T.members.map(m => {
              const c = m.joint ? collabById(m.joint) : null;
              return `
              <div class="member rv">
                <div class="avatar">${initials(m.name)}</div>
                <h3>${esc(m.name)}</h3>
                <div class="mrole">${esc(m.role)}</div>
                ${c ? `<div class="mjoint" style="color:${varFor(c.id)}">
                  Joint with ${c.url
                    ? `<a href="${c.url}" target="_blank" rel="noopener">${esc(c.name)}</a>`
                    : esc(c.name)}</div>` : ''}
                ${m.email ? `<a class="memail" href="mailto:${m.email}">${esc(m.email)}</a>` : ''}
              </div>`; }).join('')}
          </div>

          ${T.alumni && T.alumni.length ? `
            <div class="sec-head" style="margin-top:62px;margin-bottom:22px"><h2>Alumni</h2></div>
            <div class="alumni-table">
              ${T.alumni.map(a => `
                <div class="alum-row">
                  <div class="alum-when">${a.years}</div>
                  <div class="alum-who">
                    <b>${esc(a.name)}</b>
                    <span>${a.role}</span>
                  </div>
                  <div class="alum-now">${a.now}</div>
                </div>`).join('')}
            </div>` : ''}

          <div class="sec-head" style="margin-top:62px;margin-bottom:18px"><h2>Join us</h2></div>
          <p style="color:var(--ink-2);max-width:62ch">
            We are always glad to hear from students, postdocs, and clinicians interested in lung cancer
            interception, computational pathology, or the biology of premalignancy.
            Write to <a href="mailto:${S.email}" style="color:var(--red)">${S.email}</a>.
          </p>
        </div>
      </section>`;
  };

  /* ---------- boot ---------- */
  function boot() {
    const main = $('#main');
    const key = (main && main.dataset.page) || 'home';
    mountChrome(key);
    if (pages[key]) pages[key](main);
    initReveal();

    // smooth in-page anchor on load (research deep links)
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
