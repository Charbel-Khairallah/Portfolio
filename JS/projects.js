const projects = {
  game: {
    label: "Game Development",
    projects: [
      {
        title: "Fluency Cards",
        date: "2024",
        collaborative: true,
        description: "A game built with Unity that provide English practice in an easy and engaging 'Uno-style' games.",
        image: "../Resources/Images/Projects/FluencyCards.webp"
      },
      {
        title: "Jeflen",
        date: "2024",
        collaborative: true,
        description: "A simple arcade game built with Unity that you can play in your free time and have fun.",
        image: "../Resources/Images/Projects/Jeflen.webp"
      },
      {
        title: "Magnet Chaos",
        date: "2023",
        collaborative: false,
        description: "An original desktop game built with C++ SFML without any game engines. <br>Control the magnet strategically and kill as many robots as you can to survive.",
        image: "../Resources/Images/Projects/MagnetChaos.webp"
      },
      {
        title: "Asteroids",
        date: "2022",
        collaborative: false,
        description: "A desktop game built with C++ SFML without any game engines. <br>Control a space ship to shoot asteroids and stay alive as much as possible.",
        image: "../Resources/Images/Projects/Asteroids.webp"
      }
    ]
  },
  embedded: {
    label: "Embedded Systems",
    projects: [
      {
        title: "Water Level Tracker",
        date: "2026",
        collaborative: false,
        description: "A simple Arduino project that tracks the level of the water in a tank no matter what it's height is.",
        image: "../Resources/Images/Projects/WaterLevelTracker.webp"
      }
    ]
  },
  web: {
    label: "Web Development",
    projects: [
      {
        title: "Blood Seeker",
        date: "2026",
        collaborative: true,
        description: "This is a personal group project that makes blood donations and requests easier. I worked on the backend part of it.",
        image: "../Resources/Images/Projects/BloodSeeker.webp"
      },
      {
        title: "Fluency Test Prep",
        date: "2026",
        collaborative: true,
        description: "A website designed for students to prepare for english tests and for teachers to track their students progress. I worked on the Frontend part of it.",
        image: "../Resources/Images/Projects/FluencyTestPrep.webp"
      }
    ]
  }
};

const tabs = [...document.querySelectorAll(".project-tab")];
const panels = document.getElementById("project-panels");

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
    grid.insertAdjacentHTML("beforeend", `<article class="project-card" draggable="false" style="animation-delay: ${index * 100}ms"><div class="project-media">${image}${collaborationBadge}</div><div class="project-content"><div class="project-heading"><h2>${project.title}</h2><time class="project-date">${project.date}</time></div><p>${project.description}</p></div></article>`);
  });
  panel.appendChild(grid);
  panels.appendChild(panel);
}

Object.keys(projects).forEach((category, index) => renderPanel(category, index === 0));

function selectTab(tab) {
  const category = tab.dataset.category;
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