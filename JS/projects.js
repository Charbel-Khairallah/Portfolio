const projects = {
  game: {
    label: "Game Development",
    projects: [
      {
        title: "Unity Interactive Simulation",
        description: "An interactive 2D / 3D experience built with Unity, combining reusable systems, custom tools, and carefully optimised assets.",
        tags: ["Unity", "C#", "3D", "Shaders"],
        media: "Add a project image or video",
        links: []
      },
      {
        title: "Game Prototype",
        description: "A focused gameplay prototype for exploring mechanics, feedback, and responsive player interactions from the first build onward.",
        tags: ["Unity", "Gameplay", "Prototyping"],
        media: "Add a project image or video",
        links: []
      }
    ]
  },
  embedded: {
    label: "Embedded Systems",
    projects: [
      {
        title: "Embedded Systems Project",
        description: "A hardware-software experiment focused on reliable communication between a microcontroller, sensors, and a custom control layer.",
        tags: ["C++", "Microcontrollers", "Sensors"],
        media: "Add a project image or video",
        links: []
      }
    ]
  },
  web: {
    label: "Web Development",
    projects: [
      {
        title: "Portfolio Website",
        description: "This portfolio is a lightweight, responsive website for presenting technical work, experience, and the ideas behind each project.",
        tags: ["HTML", "CSS", "JavaScript"],
        media: "Add a project image or video",
        links: []
      },
      {
        title: "Web Application",
        description: "A full-stack web application built around a practical workflow, with attention to clear interfaces, data, and maintainable code.",
        tags: ["Frontend", "Backend", "Database"],
        media: "Add a project image or video",
        links: []
      }
    ]
  }
};

const tabs = [...document.querySelectorAll(".project-tab")];
const panels = document.getElementById("project-panels");

function projectIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="m8 10 3 2-3 2M13 15h3"></path></svg>`;
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
    const links = project.links.length
      ? project.links.map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")
      : '<span class="project-link">Project links coming soon</span>';
    const tags = project.tags.map((tag) => `<li>${tag}</li>`).join("");
    grid.insertAdjacentHTML("beforeend", `<article class="project-card" style="animation-delay: ${index * 100}ms"><div class="project-media">${projectIcon()}<div><span>${project.media}</span></div></div><div class="project-content"><h2>${project.title}</h2><p>${project.description}</p><ul class="project-tags">${tags}</ul><div class="project-links">${links}</div></div></article>`);
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