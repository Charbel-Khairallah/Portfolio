const projectDetails = {
  "fluency-cards": {
    category: "Game Development",
    title: "Fluency Cards",
    date: "2024",
    description: ["Fluency Cards is a Unity game designed to make English practice feel quick, social, and approachable.", "The Uno-style format turns vocabulary and language challenges into a playful session that can be picked up whenever there is a few minutes to spare."],
    skills: ["Unity", "C#", "Game Design"],
    media: [1, 2, 3].map((number) => ({ type: "image", src: "../Resources/Images/Projects/FluencyCards.webp", alt: `Fluency Cards preview ${number}` })),
    links: []
  },
  jeflen: {
    category: "Game Development",
    title: "Jeflen",
    date: "2024",
    description: ["Jeflen is a compact arcade game built with Unity for short, repeatable play sessions.", "Its simple rules leave room to focus on movement, timing, and the small satisfaction of improving a score run by run."],
    skills: ["Unity", "C#", "Game Development"],
    media: [1, 2, 3].map((number) => ({ type: "image", src: "../Resources/Images/Projects/Jeflen.webp", alt: `Jeflen preview ${number}` })),
    links: []
  },
  "magnet-chaos": {
    category: "Game Development",
    title: "Magnet Chaos",
    date: "2023",
    description: ["Magnet Chaos is an original desktop game made with C++ and SFML without relying on a game engine.", "The player controls a magnet through a hostile arena, making careful positioning and quick decisions to destroy as many robots as possible before being overwhelmed."],
    skills: ["C++", "SFML", "Game Programming"],
    media: [1, 2, 3].map((number) => ({ type: "image", src: "../Resources/Images/Projects/MagnetChaos.webp", alt: `Magnet Chaos preview ${number}` })),
    links: []
  },
  asteroids: {
    category: "Game Development",
    title: "Asteroids",
    date: "2022",
    description: ["Asteroids is a desktop take on the classic arcade formula, built from the ground up with C++ and SFML.", "The goal is straightforward: pilot the spaceship, clear incoming asteroids, and keep the run alive for as long as possible."],
    skills: ["C++", "SFML", "Object-Oriented Programming"],
    media: [1, 2, 3].map((number) => ({ type: "image", src: "../Resources/Images/Projects/Asteroids.webp", alt: `Asteroids preview ${number}` })),
    links: []
  },
  "water-level-tracker": {
    category: "Embedded Systems",
    title: "Water Level Tracker",
    date: "2026",
    description: ["Water Level Tracker is an Arduino project for monitoring the amount of water in a tank.", "It is built around a simple measurement workflow that keeps the reading useful even when the tank dimensions change."],
    skills: ["Arduino", "C++", "Embedded Systems"],
    media: [1, 2, 3].map((number) => ({ type: "image", src: "../Resources/Images/Projects/WaterLevelTracker.webp", alt: `Water Level Tracker preview ${number}` })),
    links: []
  },
  "blood-seeker": {
    category: "Web Development",
    title: "Blood Seeker",
    date: "2026",
    description: ["Blood Seeker is a group project focused on making blood donations and urgent requests easier to discover.", "My contribution centered on the backend, where the application rules and data flow connect donors with people who need help."],
    skills: ["Backend Development", "APIs", "Database Design"],
    media: [1, 2, 3].map((number) => ({ type: "image", src: "../Resources/Images/Projects/BloodSeeker.webp", alt: `Blood Seeker preview ${number}` })),
    links: []
  },
  "fluency-test-prep": {
    category: "Web Development",
    title: "Fluency Test Prep",
    date: "2026",
    description: ["Fluency Test Prep is a learning website for students preparing for English tests and teachers following their progress.", "I worked on the frontend experience, turning the study and tracking workflows into clear, responsive interfaces for both audiences."],
    skills: ["Frontend Development", "JavaScript", "Responsive Design"],
    media: [1, 2, 3].map((number) => ({ type: "image", src: "../Resources/Images/Projects/FluencyTestPrep.webp", alt: `Fluency Test Prep preview ${number}` })),
    links: []
  }
};

const detail = document.getElementById("project-detail");
const viewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");
const viewerClose = document.querySelector(".viewer-close");
const selectedProject = projectDetails[new URLSearchParams(window.location.search).get("project")];
let mediaIndex = 0;
let viewerIndex = 0;

function mediaMarkup(item) {
  if (item.type === "video") {
    return `<video src="${item.src}" controls preload="metadata" aria-label="${item.alt}"></video>`;
  }
  return `<img src="${item.src}" alt="${item.alt}" draggable="false">`;
}

function renderProject(project) {
  detail.innerHTML = `
    <header class="project-detail-header">
      <div class="project-title-block">
        <p class="project-eyebrow">${project.category}</p>
        <h1><span class="gradient-text">${project.title}</span></h1>
      </div>
      <div class="project-cover-wrap">
        ${mediaMarkup(project.media[0])}
        <span class="project-year">${project.date}</span>
      </div>
    </header>
    <section class="info-section project-description">
      <h2>About the project</h2>
      ${project.description.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      <section class="project-media-viewer" aria-label="${project.title} media">
        <div id="project-media-stage" class="project-media-stage"></div>
        <button id="media-prev" class="media-nav media-prev" type="button" aria-label="Previous project media">&#10094;</button>
        <button id="media-next" class="media-nav media-next" type="button" aria-label="Next project media">&#10095;</button>
        <p id="media-count" class="media-count"></p>
      </section>
    </section>
    <div class="project-info">
      <section id="links-section" class="info-section"><h2>Project links</h2><div class="project-links">${project.links.map((link) => `<a class="project-link" href="${link.url}" target="_blank" rel="noreferrer">${link.label} &#8599;</a>`).join("")}</div></section>
    </div>
    <section class="info-section skills-section"><h2>Skills</h2><ul class="skills-list">${project.skills.map((skill) => `<li class="skill">${skill}</li>`).join("")}</ul></section>`;

  const linksSection = document.getElementById("links-section");
  if (!project.links.length) linksSection.hidden = true;
  updateMedia(project);
  document.getElementById("media-prev").addEventListener("click", () => changeMedia(project, -1));
  document.getElementById("media-next").addEventListener("click", () => changeMedia(project, 1));
}

function updateMedia(project) {
  const mediaStage = document.getElementById("project-media-stage");
  let track = mediaStage.querySelector(".media-track");
  if (!track) {
    mediaStage.innerHTML = `<div class="media-track">${project.media.map((item, index) => `<div class="media-slide" data-media-index="${index}">${mediaMarkup(item)}</div>`).join("")}</div>`;
    track = mediaStage.querySelector(".media-track");
    track.querySelectorAll(".media-slide").forEach((slide) => {
      slide.addEventListener("click", () => {
        mediaIndex = Number(slide.dataset.mediaIndex);
        updateMedia(project);
        if (slide.querySelector("img")) openViewer(project);
      });
    });
  }
  track.querySelectorAll(".media-slide").forEach((slide, index) => slide.classList.toggle("is-current", index === mediaIndex));
  const firstSlide = track.querySelector(".media-slide");
  const gap = parseFloat(getComputedStyle(track).gap) || 0;
  const slideWidth = firstSlide.offsetWidth;
  const step = slideWidth + gap;
  const centeredOffset = mediaStage.clientWidth / 2 - (mediaIndex * step + slideWidth / 2);
  track.style.transform = `translateX(${centeredOffset}px)`;
  document.getElementById("media-count").textContent = project.media.length > 1 ? `${mediaIndex + 1} / ${project.media.length}` : "";
  const previousButton = document.getElementById("media-prev");
  const nextButton = document.getElementById("media-next");
  previousButton.hidden = project.media.length < 2;
  nextButton.hidden = project.media.length < 2;
  previousButton.disabled = mediaIndex === 0;
  nextButton.disabled = mediaIndex === project.media.length - 1;
}

function changeMedia(project, direction) {
  const nextIndex = mediaIndex + direction;
  if (nextIndex < 0 || nextIndex >= project.media.length) return;
  mediaIndex = nextIndex;
  updateMedia(project);
}

window.addEventListener("resize", () => {
  if (selectedProject && document.querySelector(".media-track")) updateMedia(selectedProject);
});

function triggerViewerTransition(direction) {
  const transitionClasses = ["slide-left-out", "slide-right-out", "slide-left-in", "slide-right-in"];
  viewerImage.classList.remove(...transitionClasses);
  void viewerImage.offsetWidth;
  const exitClass = direction === "next" ? "slide-right-out" : "slide-left-out";
  const enterClass = direction === "next" ? "slide-left-in" : "slide-right-in";
  viewerImage.classList.add(exitClass);
  setTimeout(() => {
    viewerImage.src = selectedProject.media[viewerIndex].src;
    viewerImage.alt = selectedProject.media[viewerIndex].alt;
    viewerImage.classList.remove(exitClass);
    void viewerImage.offsetWidth;
    viewerImage.classList.add(enterClass);
  }, 180);
}

function updateViewer(direction) {
  if (direction) {
    triggerViewerTransition(direction);
    return;
  }
  viewerImage.src = selectedProject.media[viewerIndex].src;
  viewerImage.alt = selectedProject.media[viewerIndex].alt;
}

function openViewer(project) {
  viewerIndex = mediaIndex;
  viewer.classList.remove("hidden");
  viewer.setAttribute("aria-hidden", "false");
  updateViewer();
}

function closeViewer() {
  viewer.classList.add("hidden");
  viewer.setAttribute("aria-hidden", "true");
}

viewerClose.addEventListener("click", closeViewer);
viewer.addEventListener("click", (event) => {
  if (event.target.matches("[data-close=\"true\"]")) closeViewer();
});

if (selectedProject) {
  document.title = `${selectedProject.title} — Charbel Khairallah`;
  renderProject(selectedProject);
} else {
  detail.innerHTML = '<h1><span class="gradient-text">Project not found</span></h1><p class="empty-state">Choose a project from the projects page to view its details.</p>';
}

document.addEventListener("keydown", (event) => {
  if (!selectedProject) return;
  if (!viewer.classList.contains("hidden")) {
    if (event.key === "Escape") closeViewer();
    return;
  }
  if (selectedProject.media.length < 2) return;
  if (event.key === "ArrowLeft") changeMedia(selectedProject, -1);
  if (event.key === "ArrowRight") changeMedia(selectedProject, 1);
});
