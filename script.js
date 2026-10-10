// ============ PROJECT DATA ============
// Edit this array to add, remove, or update projects.
// category: "uiux" or "code"
// thumb: card image. sections: each has a title, optional text, optional images [{src, caption}], optional links [{href, label}].
const B = "bookstore/";
const G = "garden_web/";

const PROJECTS = [
  {
    category: "uiux",
    title: "Online Bookstore — UI/UX Training Case Study",
    tagline: "A full research-to-prototype UI/UX project: personas, information architecture, and two high-fidelity design explorations.",
    tags: ["User Research", "Personas", "Information Architecture", "High-Fidelity Prototyping"],
    thumb: B + "thumbnail.png",
    thumbGradient: "linear-gradient(135deg, var(--c-pink), var(--c-peach))",
    sections: [
      {
        title: "Problem",
        text: "This project was the capstone of a UI/UX training program: design an online bookstore experience end-to-end, from research through a tested, high-fidelity homepage — covering the full process a UI/UX designer is expected to own, not just the visuals."
      },
      {
        title: "Research",
        text: "I interviewed 4 users and built personas from those conversations, then widened the research with a 5Ws survey (who, what, when, where, why) to check the personas against a larger group. Together, the interviews and survey shaped who I was designing for and what they needed from the homepage.",
        images: [
          { src: B + "screenshotfromtheservay1.png", caption: "The 5Ws survey" },
          { src: B + "screenshotofresponsesexel2.png", caption: "Survey responses in a spreadsheet" },
          { src: B + "persona(1).jpg", caption: "Persona" },
          { src: B + "personaexample3.jpg", caption: "Persona" },
          { src: B + "persona(3).jpg", caption: "Persona" },
          { src: B + "persona(4).jpg", caption: "Persona" }
        ],
        links: [{ href: B + "uxservayReport.pdf", label: "Read the full survey report (PDF)" }]
      },
      {
        title: "Design process",
        text: "From the research, I built the site's information architecture and a full sitemap before touching any visuals. The homepage then moved through three fidelity stages in Photoshop — low-fidelity, mid-fidelity, and a polished high-fidelity design. For the interactive layer, I designed the primary button in Illustrator with its default, hover, and clicked states, and built a short animated “coming soon” screen in Photoshop.",
        images: [
          { src: B + "sitemapandiaofhomepage4.png", caption: "Information architecture and sitemap" },
          { src: B + "BookStoreLoFHomePage5.png", caption: "Low-fidelity homepage" },
          { src: B + "BookStoreMFHomePage6.png", caption: "Mid-fidelity homepage" }
        ]
      },
      {
        title: "Prototype",
        text: "Two high-fidelity directions for the homepage: one in Photoshop, and a separate exploration in Adobe XD that tests an alternate layout and color direction.",
        images: [
          { src: B + "BookStoreHFHomePage7ps.png", caption: "High-fidelity homepage (Photoshop)" },
          { src: B + "HomepageXDanotherdesign.png", caption: "Alternate high-fidelity design (Adobe XD)" }
        ]
      },
      {
        title: "Impact",
        text: "This wasn't a live shipped product, but it's a complete demonstration of the UI/UX pipeline — interviews and surveys into personas, personas into IA and a sitemap, IA into wireframes at three fidelity levels, and a component-level interaction and motion design pass on top. That range (research methodology through to micro-interactions) is the story this case study tells."
      }
    ],
    link: null
  },
  {
    category: "uiux",
    title: "Garden Website — Homepage Design",
    tagline: "A homepage design for a garden website, with animated cards, hero section and footer.",
    tags: ["Homepage Design", "Adobe XD", "Animation"],
    thumb: G + "thumbnail.png",
    thumbGradient: "linear-gradient(135deg, var(--c-sage), var(--c-peach))",
    sections: [
      {
        title: "Homepage design",
        text: "A homepage for a garden website, designed in Adobe XD: a hero section with a call-to-action button, “Available gardens” cards, an “Our service” section, and a footer.",
        images: [
          { src: G + "Home page.png", caption: "The homepage" },
          { src: G + "mokeup.jpg", caption: "Website mockup" }
        ]
      },
      {
        title: "Motion",
        text: "Animations designed for the hero section and call-to-action button, the garden cards, the service cards, and the footer.",
        images: [
          { src: G + "showsanimationinherosectionandctabtn.png", caption: "Animation: hero section and call-to-action button" },
          { src: G + "showsanimationingardencards.png", caption: "Animation: garden cards" },
          { src: G + "showsanimationincardsandourservices.png", caption: "Animation: cards and “Our service” section" },
          { src: G + "showsanimationinfooter.png", caption: "Animation: footer" }
        ]
      },
      {
        title: "In progress",
        text: "The sign-in screen is still being designed.",
        images: [
          { src: G + "ongoingsigninmiffed.jpg", caption: "Sign-in screen (work in progress)" }
        ]
      }
    ],
    link: null
  },
  {
    category: "uiux",
    title: "Soft Skills Training Platform",
    tagline: "An in-progress UI/UX project for a website that trains and assesses soft skills, currently in the research phase.",
    tags: ["User Research", "Personas", "In Progress"],
    thumbGradient: "linear-gradient(135deg, var(--c-sage), var(--c-pink))",
    sections: [
      {
        title: "Problem",
        text: "Most soft-skills resources are passive (articles, videos) rather than something that actively trains and assesses a person's interviewing, public speaking, conversation, and presentation skills, then points them to what to work on next."
      },
      {
        title: "Research",
        text: "Started with an audience survey and early personas to understand who needs this kind of training and what would make them trust an AI agent's feedback on soft skills."
      },
      {
        title: "Design process",
        text: "Planned structure so far: a home page where users choose a skill to train or test with an AI agent, a courses page with partner referrals for the weakest areas, a community page for articles, a short-form video page, and sign-up. Wireframes and a Figma prototype are the next step."
      },
      {
        title: "Prototype",
        text: "Coming soon — moving into Figma next."
      }
    ],
    link: null
  },
  {
    category: "code",
    title: "Smart Home Voice Control",
    tagline: "A voice-controlled smart home system pairing custom ML speaker identification with ESP32 hardware.",
    tags: ["Python", "Machine Learning", "ESP32", "Streamlit"],
    thumbGradient: "linear-gradient(135deg, var(--c-mauve), var(--c-wine))",
    sections: [
      {
        title: "Problem",
        text: "Voice control systems are usually either generic (respond to anyone) or locked to a single cloud provider. This project explores a lightweight, speaker-aware alternative."
      },
      {
        title: "Approach",
        text: "Built a speaker-identification and command-classification pipeline using MFCC audio features extracted with librosa, feeding an 80-feature vector into the classification models."
      },
      {
        title: "Build",
        text: "Trained and serialized the ML models, then connected them to an ESP32 microcontroller for real hardware control and a Streamlit interface for the software side — including deployment work to replace local audio libraries with browser-based audio input for cloud hosting."
      },
      {
        title: "Result",
        text: "A working end-to-end pipeline from voice input to hardware action, deployed and accessible from the browser rather than only running locally."
      }
    ],
    link: "https://github.com/Rofaida10/Smart-Home-Voice-Control"
  },
  {
    category: "code",
    title: "Machine Learning Foundations — IEEE SSCS AUSC",
    tagline: "From-scratch machine learning work: derivations, implementations, and applied modeling.",
    tags: ["Python", "Machine Learning", "IEEE SSCS"],
    thumbGradient: "linear-gradient(135deg, var(--c-sage), var(--c-mauve))",
    sections: [
      {
        title: "Problem",
        text: "Coursework designed to build ML fluency from first principles rather than library shortcuts."
      },
      {
        title: "Approach",
        text: "Derived binary cross-entropy gradients by hand and studied logistic regression theory before implementation."
      },
      {
        title: "Build",
        text: "Implemented sigmoid activation and logistic regression from scratch in Python, tested against an XOR truth table, then applied regression modeling to the California Housing Prices dataset in a later task."
      },
      {
        title: "Result",
        text: "A solid first-principles foundation in classification and regression that now informs how I evaluate ML-driven features in product design."
      }
    ],
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
      <div class="project-thumb" style="background:${p.thumb ? `url('${encodeURI(p.thumb)}') center top / cover no-repeat, ` : ""}${p.thumbGradient}"></div>
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

    ${p.sections.map(sec => `
    <div class="drawer-block">
      <h4>${sec.title}</h4>
      ${sec.text ? `<p>${sec.text}</p>` : ""}
      ${sec.images && sec.images.length ? `
      <div class="drawer-figures">
        ${sec.images.map(img => `
        <figure>
          <a href="${encodeURI(img.src)}" target="_blank" rel="noopener">
            <img src="${encodeURI(img.src)}" alt="${img.caption}" loading="lazy">
          </a>
          <figcaption>${img.caption}</figcaption>
        </figure>`).join("")}
      </div>` : ""}
      ${sec.links ? sec.links.map(l => `<a class="drawer-external" href="${encodeURI(l.href)}" target="_blank" rel="noopener">${l.label}</a>`).join("") : ""}
    </div>`).join("")}
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
