// ============ PROJECT DATA ============
// Edit this array to add, remove, or update projects.
// category: "uiux" or "code"
const PROJECTS = [
  {
    category: "uiux",
    title: "Online Bookstore — UI/UX Training Case Study",
    tagline: "A full research-to-prototype UI/UX project: personas, information architecture, and two high-fidelity design explorations.",
    tags: ["User Research", "Personas", "Information Architecture", "High-Fidelity Prototyping"],
    thumbGradient: "linear-gradient(135deg, var(--c-pink), var(--c-peach))",
    // Add real screenshots here once you send them — see the "gallery" field below.
    gallery: ["BookStoreLoFHomePage.png","BookStoreMFHomePage.png","BookStoreHFHomePage.png","HomepageXD.png","persona(1).jpg","persona(2).jpg","persona(3).jpg","persona(4).jpg","form.png","exel.png"],
    problem: "This project was the capstone of a UI/UX training program: design an online bookstore experience end-to-end, from research through a tested, high-fidelity homepage — covering the full process a UI/UX designer is expected to own, not just the visuals.",
    research: "I interviewed 4 users and built personas from those conversations, then widened the research with a 5Ws survey (who, what, when, where, why) to check the personas against a larger group. Together, the interviews and survey shaped who I was designing for and what they needed from the homepage.",
    process: "From the research, I built the site's information architecture and a full sitemap before touching any visuals. The homepage then moved through three fidelity stages in Photoshop — low-fidelity, mid-fidelity, and a polished high-fidelity design — plus a separate high-fidelity exploration of the same homepage in Adobe XD, testing an alternate layout and color direction against the Photoshop version. For the interactive layer, I designed the primary button in Illustrator with its default, hover, and clicked states, and built a short animated “coming soon” screen in Photoshop.",
    prototype: "Two high-fidelity directions for the homepage: one in Photoshop, one in Adobe XD. Screenshots to be added.",
    impact: "This wasn't a live shipped product, but it's a complete demonstration of the UI/UX pipeline — interviews and surveys into personas, personas into IA and a sitemap, IA into wireframes at three fidelity levels, and a component-level interaction and motion design pass on top. That range (research methodology through to micro-interactions) is the story this case study tells.",
    link: null
  },
  {
    category: "uiux",
    title: "Soft Skills Training Platform",
    tagline: "An in-progress UI/UX project for a website that trains and assesses soft skills, currently in the research phase.",
    tags: ["User Research", "Personas", "In Progress"],
    thumbGradient: "linear-gradient(135deg, var(--c-sage), var(--c-pink))",
    gallery: [],
    problem: "Most soft-skills resources are passive (articles, videos) rather than something that actively trains and assesses a person's interviewing, public speaking, conversation, and presentation skills, then points them to what to work on next.",
    research: "Started with an audience survey and early personas to understand who needs this kind of training and what would make them trust an AI agent's feedback on soft skills.",
    process: "Planned structure so far: a home page where users choose a skill to train or test with an AI agent, a courses page with partner referrals for the weakest areas, a community page for articles, a short-form video page, and sign-up. Wireframes and a Figma prototype are the next step.",
    prototype: "Coming soon — moving into Figma next.",
    impact: "Too early for impact — this card will update as the design work progresses.",
    link: null
  },
  {
    category: "code",
    title: "Smart Home Voice Control",
    tagline: "A voice-controlled smart home system pairing custom ML speaker identification with ESP32 hardware.",
    tags: ["Python", "Machine Learning", "ESP32", "Streamlit"],
    thumbGradient: "linear-gradient(135deg, var(--c-mauve), var(--c-wine))",
    problem: "Voice control systems are usually either generic (respond to anyone) or locked to a single cloud provider. This project explores a lightweight, speaker-aware alternative.",
    research: "Built a speaker-identification and command-classification pipeline using MFCC audio features extracted with librosa, feeding an 80-feature vector into the classification models.",
    process: "Trained and serialized the ML models, then connected them to an ESP32 microcontroller for real hardware control and a Streamlit interface for the software side — including deployment work to replace local audio libraries with browser-based audio input for cloud hosting.",
    prototype: "Live on Streamlit Community Cloud — add your deployed link here.",
    impact: "A working end-to-end pipeline from voice input to hardware action, deployed and accessible from the browser rather than only running locally.",
    link: "https://github.com/Rofaida10/Smart-Home-Voice-Control"
  },
  {
    category: "code",
    title: "Machine Learning Foundations — IEEE SSCS AUSC",
    tagline: "From-scratch machine learning work: derivations, implementations, and applied modeling.",
    tags: ["Python", "Machine Learning", "IEEE SSCS"],
    thumbGradient: "linear-gradient(135deg, var(--c-sage), var(--c-mauve))",
    problem: "Coursework designed to build ML fluency from first principles rather than library shortcuts.",
    research: "Derived binary cross-entropy gradients by hand and studied logistic regression theory before implementation.",
    process: "Implemented sigmoid activation and logistic regression from scratch in Python, tested against an XOR truth table, then applied regression modeling to the California Housing Prices dataset in a later task.",
    prototype: "See the GitHub repositories linked below for the notebooks.",
    impact: "A solid first-principles foundation in classification and regression that now informs how I evaluate ML-driven features in product design.",
    link: "https://github.com/Rofaida10/ML-project"
  }
];

// ============ THEME TOGGLE ============
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  root.setAttribute("data-theme", isDark ? "light" : "dark");
  themeToggle.setAttribute("aria-label", isDark ? "Switch to dark theme" : "Switch to light theme");
});

// ============ HEADER SCROLL STATE ============
const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}, { passive: true });

// ============ MOBILE NAV ============
const navBurger = document.getElementById("navBurger");
const mainNav = document.getElementById("mainNav");
navBurger.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  navBurger.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    navBurger.setAttribute("aria-expanded", "false");
  });
});

// ============ PROJECT GRID + TABS ============
const projectGrid = document.getElementById("projectGrid");
const tabs = document.querySelectorAll(".tab");
let activeTab = "uiux";

function renderProjects(category) {
  const items = PROJECTS.filter(p => p.category === category);
  projectGrid.innerHTML = items.map((p, i) => `
    <article class="project-card" data-index="${PROJECTS.indexOf(p)}" tabindex="0" role="button" aria-label="Open case study: ${p.title}">
      <div class="project-thumb" style="background:${p.thumbGradient}"></div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p class="project-tagline">${p.tagline}</p>
        <div class="chip-row">
          ${p.tags.map(t => `<span class="chip">${t}</span>`).join("")}
        </div>
        <span class="project-link">View case study</span>
      </div>
    </article>
  `).join("");

  projectGrid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openDrawer(Number(card.dataset.index)));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDrawer(Number(card.dataset.index));
      }
    });
  });
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => { t.classList.remove("is-active"); t.setAttribute("aria-selected", "false"); });
    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");
    activeTab = tab.dataset.tab;
    renderProjects(activeTab);
  });
});

renderProjects(activeTab);

// ============ CASE STUDY DRAWER ============
const drawer = document.getElementById("drawer");
const drawerOverlay = document.getElementById("drawerOverlay");
const drawerContent = document.getElementById("drawerContent");
const drawerClose = document.getElementById("drawerClose");

function openDrawer(index) {
  const p = PROJECTS[index];
  drawerContent.innerHTML = `
    <div class="drawer-tagbar chip-row">
      ${p.tags.map(t => `<span class="chip">${t}</span>`).join("")}
    </div>
    <h2>${p.title}</h2>
    <p class="drawer-summary">${p.tagline}</p>

    ${p.gallery && p.gallery.length ? `
    <div class="drawer-gallery">
      ${p.gallery.map(src => `<img src="${src}" alt="${p.title} screenshot" loading="lazy">`).join("")}
    </div>` : ""}

    <div class="drawer-block">
      <h4>Problem</h4>
      <p>${p.problem}</p>
    </div>
    <div class="drawer-block">
      <h4>Research</h4>
      <p>${p.research}</p>
    </div>
    <div class="drawer-block">
      <h4>Design process</h4>
      <p>${p.process}</p>
    </div>
    <div class="drawer-block">
      <h4>Prototype</h4>
      <p>${p.prototype}</p>
    </div>
    <div class="drawer-block">
      <h4>Impact</h4>
      <p>${p.impact}</p>
    </div>
    ${p.link ? `<a class="drawer-external" href="${p.link}" target="_blank" rel="noopener">View on GitHub</a>` : ""}
  `;
  drawer.classList.add("is-open");
  drawerOverlay.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  drawerClose.focus();
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  drawer.classList.remove("is-open");
  drawerOverlay.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

drawerClose.addEventListener("click", closeDrawer);
drawerOverlay.addEventListener("click", closeDrawer);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeDrawer();
});

// ============ CONTACT FORM (mailto fallback) ============
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:rofaidayousry00@gmail.com?subject=${subject}&body=${body}`;
});

// ============ FOOTER YEAR ============
document.getElementById("year").textContent = new Date().getFullYear();
