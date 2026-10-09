(function () {
  "use strict";

  const CATS = window.CATEGORIES;
  const SIMS = window.SIMULATIONS;
  const $ = (id) => document.getElementById(id);
  const NAVY = "#23305c", CORAL = "#f37066", SKY = "#6cb6ec", CREAM = "#fff4ef", SOFT = "#fde3df";

  // ---------- Card illustrations (viewBox 0 0 320 180) ----------
  const SIM_ART = {
    moon: `
      <rect width="320" height="180" fill="${NAVY}"/>
      <g fill="#fff" opacity=".7"><circle cx="30" cy="30" r="1.5"/><circle cx="290" cy="40" r="1.5"/><circle cx="250" cy="150" r="1.5"/><circle cx="60" cy="140" r="1.5"/><circle cx="150" cy="20" r="1.2"/></g>
      <circle cx="160" cy="90" r="62" fill="none" stroke="${SKY}" stroke-width="2" stroke-dasharray="4 6"/>
      <circle cx="160" cy="90" r="18" fill="${SKY}"/>
      <path d="M160 72a18 18 0 0 0 0 36z" fill="${NAVY}" opacity=".45"/>
      ${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
        const r = a * Math.PI / 180, x = 160 + 62 * Math.cos(r), y = 90 - 62 * Math.sin(r);
        // Sunlight comes from the right, so every Moon's left half is in shadow
        return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="9" fill="#e9e4f2"/><path d="M${x.toFixed(1)} ${(y - 9).toFixed(1)}a9 9 0 0 0 0 18z" fill="#3a4677"/>`;
      }).join("")}
      <path d="M300 90h-22m0 0 7-6m-7 6 7 6" stroke="${CORAL}" stroke-width="3" fill="none" stroke-linecap="round"/>`,
    orbits: `
      <rect width="320" height="180" fill="${NAVY}"/>
      <g fill="#fff" opacity=".6"><circle cx="24" cy="160" r="1.5"/><circle cx="296" cy="22" r="1.5"/><circle cx="270" cy="160" r="1.2"/><circle cx="40" cy="28" r="1.2"/></g>
      <ellipse cx="160" cy="90" rx="120" ry="52" fill="none" stroke="${SKY}" stroke-width="2" opacity=".55"/>
      <ellipse cx="160" cy="90" rx="70" ry="30" fill="none" stroke="${CORAL}" stroke-width="2" opacity=".75"/>
      <circle cx="160" cy="90" r="20" fill="#ffd91a"/>
      <circle cx="160" cy="90" r="28" fill="#ffd91a" opacity=".18"/>
      <circle cx="230" cy="90" r="9" fill="${CORAL}"/>
      <path d="M230 90v-30" stroke="#7dffa0" stroke-width="3" stroke-linecap="round"/>
      <path d="m224 66 6-8 6 8" stroke="#7dffa0" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="62" cy="118" r="6" fill="${SKY}"/>`,
    pendulum: `
      <rect width="320" height="180" fill="${CREAM}"/>
      <rect x="0" y="150" width="320" height="30" fill="${SOFT}"/>
      <rect x="124" y="14" width="72" height="10" rx="2" fill="${CORAL}"/>
      <path d="M160 24 106 116" stroke="${NAVY}" stroke-width="2.5" stroke-dasharray="3 5" opacity=".35"/>
      <path d="M160 24 214 116" stroke="${NAVY}" stroke-width="2.5" stroke-dasharray="3 5" opacity=".35"/>
      <path d="M106 128a64 64 0 0 0 108 0" fill="none" stroke="${CORAL}" stroke-width="2.5" stroke-dasharray="2 6" stroke-linecap="round"/>
      <path d="M160 24 128 120" stroke="${NAVY}" stroke-width="3"/>
      <circle cx="128" cy="120" r="16" fill="${SKY}" stroke="${NAVY}" stroke-width="3"/>
      <rect x="248" y="70" width="14" height="70" fill="${NAVY}" opacity=".15"/><rect x="248" y="104" width="14" height="36" fill="${NAVY}"/>
      <rect x="270" y="70" width="14" height="70" fill="${NAVY}" opacity=".15"/><rect x="270" y="88" width="14" height="52" fill="${CORAL}"/>`,
    map: `
      <rect width="320" height="180" fill="${CREAM}"/>
      <path d="M40 90C40 40 280 40 280 90S40 140 40 90z" fill="#fff" stroke="${NAVY}" stroke-width="3"/>
      <g fill="none" stroke="${SOFT}" stroke-width="1.5">
        <path d="M44 72h232M44 108h232M48 90h224"/>
        <path d="M100 52c-14 24-14 52 0 76M160 46v88M220 52c14 24 14 52 0 76"/>
      </g>
      <path d="M150 74c6-6 18-6 22 2 4 8 2 20-4 30-4 8-10 12-14 6-4-6-2-14-6-20-4-6-4-12 2-18z" fill="${NAVY}"/>
      <path d="M96 62c8-4 22-2 26 4 2 6-6 10-10 16-4 6-2 14-10 14-6 0-10-8-12-14-2-8 0-16 6-20z" fill="${CORAL}"/>
      <path d="M182 60c10-4 30-4 46 0 12 4 10 14 0 18-10 4-24 2-34 2-8 0-16-6-12-20z" fill="#e3d6d4"/>
      <path d="M206 108c8-2 18 0 20 6s-6 10-14 8-12-12-6-14z" fill="#e3d6d4"/>`,
    ph: `
      <rect width="320" height="180" fill="${NAVY}"/>
      <defs><linearGradient id="ph-scale" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#d7191c"/><stop offset=".2" stop-color="#f26522"/><stop offset=".35" stop-color="#fbb817"/>
        <stop offset=".5" stop-color="#4cb848"/><stop offset=".65" stop-color="#3cc1d4"/><stop offset=".8" stop-color="#2479c1"/><stop offset="1" stop-color="#6c4bd6"/>
      </linearGradient></defs>
      <path d="M96 34h64M102 34v100a12 12 0 0 0 12 12h28a12 12 0 0 0 12-12V34" fill="none" stroke="#e9e4f2" stroke-width="3" stroke-linecap="round"/>
      <path d="M105 84h46v50a9 9 0 0 1-9 9h-28a9 9 0 0 1-9-9z" fill="#4cb848" opacity=".85"/>
      <g fill="#fff" opacity=".55"><circle cx="118" cy="120" r="3"/><circle cx="134" cy="106" r="2.2"/><circle cx="126" cy="132" r="2"/></g>
      <path d="M128 12v16" stroke="${CORAL}" stroke-width="3" stroke-linecap="round"/><circle cx="128" cy="48" r="4" fill="${CORAL}"/>
      <rect x="206" y="30" width="16" height="120" rx="3" fill="url(#ph-scale)"/>
      <path d="M200 90h28" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
      <g fill="#e9e4f2" font-family="sans-serif" font-size="12" font-weight="700"><text x="232" y="40">0</text><text x="236" y="95">7</text><text x="232" y="150">14</text></g>`
  };

  const CAT_ICON = {
    biology: `<path d="M8 3c0 6 8 6 8 12s-8 6-8 6M16 3c0 6-8 6-8 12s8 6 8 6M9 7h6M9 17h6M10 12h4"/>`,
    physics: `<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>`,
    astronomy: `<circle cx="12" cy="12" r="5"/><ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(-20 12 12)"/>`,
    mathematics: `<path d="M5 5h6M8 2v6M14 5h6M5 16l5 5M10 16l-5 5M14 16h6M14 20h6"/>`,
    chemistry: `<path d="M9 3h6M10 3v6L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-10V3M7 15h10"/>`,
    geography: `<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2c3 3 4 6 4 10s-1 7-4 10c-3-3-4-6-4-10s1-7 4-10z"/>`
  };
  const icon = (id) => `<svg class="cat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${CAT_ICON[id]}</svg>`;
  const catName = (id) => CATS.find((c) => c.id === id).name;
  const esc = (s) => String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));

  // ---------- Rendering ----------
  function card(sim, catId) {
    const art = SIM_ART[sim.art]
      ? `<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${SIM_ART[sim.art]}</svg>`
      : `<div class="thumb-fallback">${icon(sim.categories[0])}</div>`;
    const also = sim.categories.filter((c) => c !== catId);
    return `
      <article class="sim" data-search="${esc((sim.title + " " + sim.description + " " + sim.categories.join(" ")).toLowerCase())}">
        <a class="sim-link" href="${esc(sim.url)}" target="_blank" rel="noopener">
          <div class="thumb">${art}</div>
          <div class="sim-body">
            <h3>${esc(sim.title)}</h3>
            <p>${esc(sim.description)}</p>
            <ul class="tags">${sim.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
            ${also.length ? `<p class="also">Also in ${also.map(catName).join(", ")}</p>` : ""}
            <span class="launch">Launch simulation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </span>
          </div>
        </a>
      </article>`;
  }

  function section(cat) {
    const sims = SIMS.filter((s) => s.categories.includes(cat.id));
    const n = sims.length;
    return `
      <section class="subject subject-${cat.id}" id="${cat.id}" data-cat="${cat.id}">
        <header class="subject-head">
          <div class="subject-title">${icon(cat.id)}<h2>${cat.name}</h2></div>
          <p>${esc(cat.blurb)}</p>
          <span class="count">${n} ${n === 1 ? "simulation" : "simulations"}</span>
        </header>
        ${n
          ? `<div class="grid">${sims.map((s) => card(s, cat.id)).join("")}</div>`
          : `<div class="coming-soon">${icon(cat.id)}<div><strong>Coming soon</strong><span>New ${cat.name.toLowerCase()} simulations are on the way.</span></div></div>`}
      </section>`;
  }

  $("directory").innerHTML = CATS.map(section).join("");
  $("simCount").textContent = SIMS.length;
  $("subjectCount").textContent = CATS.length;

  // ---------- Subject filter ----------
  const filters = $("filters");
  filters.innerHTML = [{ id: "all", name: "All" }, ...CATS].map((c) => {
    const n = c.id === "all" ? SIMS.length : SIMS.filter((s) => s.categories.includes(c.id)).length;
    return `<button class="chip chip-${c.id}" role="tab" data-filter="${c.id}" aria-selected="false">${c.name}<span class="chip-n">${n}</span></button>`;
  }).join("");

  let current = "all";
  function setFilter(id) {
    if (id !== "all" && !CATS.some((c) => c.id === id)) id = "all";
    current = id;
    filters.querySelectorAll(".chip").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.filter === id)));
    applyVisibility();
  }

  function applyVisibility() {
    const q = $("search").value.trim().toLowerCase();
    let shown = 0;
    document.querySelectorAll(".subject").forEach((sec) => {
      const inFilter = current === "all" || sec.dataset.cat === current;
      let visibleCards = 0;
      sec.querySelectorAll(".sim").forEach((el) => {
        const hit = !q || el.dataset.search.includes(q);
        el.hidden = !hit;
        if (hit) visibleCards++;
      });
      // While searching, hide subjects with no matches (including empty "coming soon" ones)
      sec.hidden = !inFilter || (q && visibleCards === 0);
      if (!sec.hidden) shown += visibleCards;
    });
    $("noResults").hidden = !(q && shown === 0);
  }

  filters.addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    const id = b.dataset.filter;
    history.replaceState(null, "", id === "all" ? location.pathname + location.search : "#" + id);
    setFilter(id);
  });
  $("search").addEventListener("input", applyVisibility);
  window.addEventListener("hashchange", () => setFilter(location.hash.slice(1) || "all"));

  setFilter(location.hash.slice(1) || "all");
})();
