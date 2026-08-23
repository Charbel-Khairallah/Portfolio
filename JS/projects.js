const projects = {
  game: {
    label: "Game Development",
    projects: [
      {
        id: "fluency-cards",
        title: "Fluency Cards",
        date: "2024",
        collaborative: true,
        description: "A game built with Unity that provide English practice in an easy and engaging 'Uno-style' games.",
        image: "../Resources/Images/Projects/FluencyCards.webp",
        skills: ["Unity", "C#", "Game Design"],
        media: [{ type: "image", src: "../Resources/Images/Projects/FluencyCards.webp", alt: "Fluency Cards gameplay" }],
        links: []
      },
      {
        id: "jeflen",
        title: "Jeflen",
        date: "2024",
        collaborative: true,
        description: "A simple arcade game built with Unity that you can play in your free time and have fun.",
        image: "../Resources/Images/Projects/Jeflen.webp",
        skills: ["Unity", "C#", "Game Development"],
        media: [{ type: "image", src: "../Resources/Images/Projects/Jeflen.webp", alt: "Jeflen gameplay" }],
        links: []
      },
      {
        id: "magnet-chaos",
        title: "Magnet Chaos",
        date: "2023",
        collaborative: false,
        description: "An original desktop game built with C++ SFML without any game engines. <br>Control the magnet strategically and kill as many robots as you can to survive.",
        image: "../Resources/Images/Projects/MagnetChaos.webp",
        skills: ["C++", "SFML", "Game Programming"],
        media: [{ type: "image", src: "../Resources/Images/Projects/MagnetChaos.webp", alt: "Magnet Chaos gameplay" }],
        links: []
      },
      {
        id: "asteroids",
        title: "Asteroids",
        date: "2022",
        collaborative: false,
        description: "A desktop game built with C++ SFML without any game engines. <br>Control a space ship to shoot asteroids and stay alive as much as possible.",
        image: "../Resources/Images/Projects/Asteroids.webp",
        skills: ["C++", "SFML", "Object-Oriented Programming"],
        media: [{ type: "image", src: "../Resources/Images/Projects/Asteroids.webp", alt: "Asteroids gameplay" }],
        links: []
      }
    ]
  },
  embedded: {
    label: "Embedded Systems",
    projects: [
      {
        id: "water-level-tracker",
        title: "Water Level Tracker",
        date: "2026",
        collaborative: false,
        description: "A simple Arduino project that tracks the level of the water in a tank no matter what it's height is.",
        image: "../Resources/Images/Projects/WaterLevelTracker.webp",
        skills: ["Arduino", "C++", "Embedded Systems"],
        media: [{ type: "image", src: "../Resources/Images/Projects/WaterLevelTracker.webp", alt: "Water Level Tracker project" }],
        links: []
      }
    ]
  },
  web: {
    label: "Web Development",
    projects: [
      {
        id: "blood-seeker",
        title: "Blood Seeker",
        date: "2026",
        collaborative: true,
        description: "This is a personal group project that makes blood donations and requests easier. I worked on the backend part of it.",
        image: "../Resources/Images/Projects/BloodSeeker.webp",
        skills: ["Backend Development", "APIs", "Database Design"],
        media: [{ type: "image", src: "../Resources/Images/Projects/BloodSeeker.webp", alt: "Blood Seeker project" }],
        links: []
      },
      {
        id: "fluency-test-prep",
        title: "Fluency Test Prep",
        date: "2026",
        collaborative: true,
        description: "A website designed for students to prepare for english tests and for teachers to track their students progress. I worked on the Frontend part of it.",
        image: "../Resources/Images/Projects/FluencyTestPrep.webp",
        skills: ["Frontend Development", "JavaScript", "Responsive Design"],
        media: [{ type: "image", src: "../Resources/Images/Projects/FluencyTestPrep.webp", alt: "Fluency Test Prep project" }],
        links: []
      }
    ]
  }
};

const tabs = [...document.querySelectorAll(".project-tab")];
const panels = document.getElementById("project-panels");
const projectTabStorageKey = "portfolio:last-project-tab";
let savedCategory = null;

try {
  const storedCategory = localStorage.getItem(projectTabStorageKey);
  if (storedCategory && Object.prototype.hasOwnProperty.call(projects, storedCategory)) {
    savedCategory = storedCategory;
  }
} catch (error) {
  savedCategory = null;
}

function renderPanel(category, isActive) {
  const panel = document.createElement("section");
  panel.className = "project-panel";
  panel.id = `${category}-panel`;
  panel.role = "tabpanel";
  panel.tabIndex = 0;
  panel.setAttribute("aria-labelledby", `${category}-tab`);
  panel.hidden = !isActive;

  const grid = document.createElement("div");
  grid.className = "project-grid";
  projects[category].projects.forEach((project, index) => {
    const image = project.image
      ? `<img src="${project.image}" alt="${project.title}" loading="lazy" draggable="false">`
      : "";
    const collaborationBadge = project.collaborative
      ? '<span class="collaboration-badge">Collaborative</span>'
      : "";
    grid.insertAdjacentHTML("beforeend", `<article class="project-card" draggable="false" tabindex="0" role="link" data-project-id="${project.id}" style="animation-delay: ${index * 100}ms"><div class="project-media">${image}${collaborationBadge}</div><div class="project-content"><div class="project-heading"><h2>${project.title}</h2><time class="project-date">${project.date}</time></div><p>${project.description}</p></div></article>`);
  });
  panel.appendChild(grid);
  panels.appendChild(panel);
}

Object.keys(projects).forEach((category, index) => renderPanel(category, category === (savedCategory || Object.keys(projects)[0])));

document.querySelectorAll(".project-card").forEach((card) => {
  const openProject = () => {
    window.location.href = `view-project.html?project=${encodeURIComponent(card.dataset.projectId)}`;
  };
  card.addEventListener("click", openProject);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject();
    }
  });
});

function selectTab(tab) {
  const category = tab.dataset.category;
  try {
    localStorage.setItem(projectTabStorageKey, category);
  } catch (error) {
    // Storage may be unavailable when browser privacy settings block it.
  }
  tabs.forEach((item) => {
    const selected = item === tab;
    item.classList.toggle("is-active", selected);
    item.setAttribute("aria-selected", selected);
    item.tabIndex = selected ? 0 : -1;
  });
  Object.keys(projects).forEach((key) => {
    document.getElementById(`${key}-panel`).hidden = key !== category;
  });
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextTab = tabs[(index + direction + tabs.length) % tabs.length];
    nextTab.focus();
    selectTab(nextTab);
  });
});

if (savedCategory) {
  const savedTab = tabs.find((tab) => tab.dataset.category === savedCategory);
  if (savedTab) selectTab(savedTab);
}