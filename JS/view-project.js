const GILBERT = "<a class='link' href='https://gilbert-ziade.studio.site/' target='_blank'>Gilbert Ziade</a>";
const JASON = "<a class='link' href='https://fluencymc.com/' target='_blank'>Jason Levine</a>";

const projectDetails = {
  "fluency-cards": {
    category: "Game Development",
    title: "Fluency Cards",
    date: "2024",
    mainMedia: "../Resources/Images/Projects/FluencyCards.webp",
    video: ["../Resources/Videos/Projects/FluencyCards/FluencyCards-01.mp4", "../Resources/Videos/Projects/FluencyCards/FluencyCards-02.mp4"],
    description: [
      `Fluency Cards is a Unity game built in collaboration with ` + GILBERT + ` 
      and ` + JASON + `.<br>This game is designed to make English practice feel easy 
      by following an Uno-Style format which turns an already fun game into one that you can learn from.`,
      `This game improved my skills and introduced me to new concepts and helped me better understand how Unity works.
      It took a while to finish the first version of it but it was worth it, and currently there are still plans to 
      improve the game and add more features to it.`
    ],
    skills: ["Unity 2D/3D", "C# .Net", "Shaders", "Animations", "Collaboration"],
    media: [
      {
        src: "../Resources/Images/Projects/FluencyCards/FluencyCards-01.webp",
        alt: "FluencyCards-01.webp"
      },
      {
        src: "../Resources/Images/Projects/FluencyCards/FluencyCards-02.webp",
        alt: "FluencyCards-02.webp"
      },
      {
        src: "../Resources/Images/Projects/FluencyCards/FluencyCards-03.webp",
        alt: "FluencyCards-03.webp"
      },
      {
        src: "../Resources/Images/Projects/FluencyCards/FluencyCards-04.webp",
        alt: "FluencyCards-04.webp"
      }
    ],
    links: [
      "https://crossedgamez.itch.io/fluency-cards",
      "https://play.google.com/store/apps/details?id=com.CrossedGameZ.FluencyCards&hl=en"
    ]
  },
  jeflen: {
    category: "Game Development",
    title: "Jeflen",
    date: "2024",
    mainMedia: "../Resources/Images/Projects/Jeflen.webp",
    video: [],
    description: [
      `Jeflen is a simple casual game you can play in your free time and have fun. It was made in collaboration with ` + GILBERT + `.`,
      `While this game is very simple, it helped me to get started with Unity and build my foundation in game development with an engine.`
    ],
    skills: ["Unity 2D", "C# .Net", "Game Development", "Collaboeration"],
    media: [
      {
        src: "../Resources/Images/Projects/Jeflen/Jeflen-01.png",
        alt: "Jeflen-01"
      },
      {
        src: "../Resources/Images/Projects/Jeflen/Jeflen-02.png",
        alt: "Jeflen-02"
      },
      {
        src: "../Resources/Images/Projects/Jeflen/Jeflen-03.png",
        alt: "Jeflen-03"
      },
      {
        src: "../Resources/Images/Projects/Jeflen/Jeflen-04.png",
        alt: "Jeflen-04"
      }
      ,
      {
        src: "../Resources/Images/Projects/Jeflen/Jeflen-05.png",
        alt: "Jeflen-05"
      }
    ],
    links: [
      "https://play.google.com/store/apps/details?id=com.CrossedGameZ.Jeflen&hl=en"
    ]
  },
  "magnet-chaos": {
    category: "Game Development",
    title: "Magnet Chaos",
    date: "2023",
    mainMedia: "../Resources/Images/Projects/MagnetChaos.webp",
    video: ["../Resources/Videos/Projects/MagnetChaos/MagnetChaos-01.mp4"],
    description: ["Magnet Chaos is an original desktop game made with C++ and SFML without relying on a game engine.", "The player controls a magnet through a hostile arena, making careful positioning and quick decisions to destroy as many robots as possible before being overwhelmed."],
    skills: ["C++", "SFML", "Game Programming"],
    media: [],
    links: []
  },
  asteroids: {
    category: "Game Development",
    title: "Asteroids",
    date: "2022",
    mainMedia: "../Resources/Images/Projects/Asteroids.webp",
    video: ["../Resources/Videos/Projects/Asteroids/Asteroids-01.mp4", "../Resources/Videos/Projects/Asteroids/Asteroids-02.mp4"],
    description: ["Asteroids is a desktop take on the classic arcade formula, built from the ground up with C++ and SFML.", "The goal is straightforward: pilot the spaceship, clear incoming asteroids, and keep the run alive for as long as possible."],
    skills: ["C++", "SFML", "Object-Oriented Programming"],
    media: [],
    links: []
  },
  "water-level-tracker": {
    category: "Embedded Systems",
    title: "Water Level Tracker",
    date: "2026",
    mainMedia: "../Resources/Images/Projects/WaterLevelTracker.webp",
    video: ["../Resources/Videos/Projects/WaterLevelTracker/WaterLevelTracker-01.mp4"],
    description: ["Water Level Tracker is an Arduino project for monitoring the amount of water in a tank.", "It is built around a simple measurement workflow that keeps the reading useful even when the tank dimensions change."],
    skills: ["Arduino", "C++", "Embedded Systems"],
    media: [
      {
        src: "../Resources/Images/Projects/WaterLevelTracker/CircuitDiagram.webp",
        alt: "CircuitDiagram.webp"
      }
    ],
    links: []
  },
  "blood-seeker": {
    category: "Web Development",
    title: "Blood Seeker",
    date: "2026",
    mainMedia: "../Resources/Images/Projects/BloodSeeker.webp",
    video: [],
    description: ["Blood Seeker is a group project focused on making blood donations and urgent requests easier to discover.", "My contribution centered on the backend, where the application rules and data flow connect donors with people who need help."],
    skills: ["Backend Development", "APIs", "Database Design"],
    media: [
      {
        src: "../Resources/Images/Projects/BloodSeeker/BloodSeeker-01.PNG",
        alt: "BloodSeeker-01.PNG"
      },
      {
        src: "../Resources/Images/Projects/BloodSeeker/BloodSeeker-02.PNG",
        alt: "BloodSeeker-02.PNG"
      },
      {
        src: "../Resources/Images/Projects/BloodSeeker/BloodSeeker-03.PNG",
        alt: "BloodSeeker-03.PNG"
      }
    ],
    links: []
  },
  "fluency-test-prep": {
    category: "Web Development",
    title: "Fluency Test Prep",
    date: "2026",
    mainMedia: "../Resources/Images/Projects/FluencyTestPrep.webp",
    video: ["../Resources/Videos/Projects/FluencyTestPrep/FluencyTestPrep-01.mp4"],
    description: ["Fluency Test Prep is a learning website for students preparing for English tests and teachers following their progress.", "I worked on the frontend experience, turning the study and tracking workflows into clear, responsive interfaces for both audiences."],
    skills: ["Frontend Development", "JavaScript", "Responsive Design"],
    media: [],
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
let videoIndex = 0;

function mediaMarkup(item) {
  if (item.type === "video") {
    return `<video src="${item.src}" controls preload="metadata" aria-label="${item.alt}"></video>`;
  }
  return `<img src="${item.src}" alt="${item.alt}" draggable="false">`;
}

function projectVideoMarkup(project) {
  if (!project.video.length) return "";
  return `
    <div class="project-video-section">
      <div class="project-video-frame">
        <video id="project-video" class="project-video" src="${project.video[0]}" preload="metadata" aria-label="${project.title} project video"></video>
        <button id="video-prev" class="video-nav video-prev" type="button" aria-label="Previous project video">&#10094;</button>
        <button id="video-next" class="video-nav video-next" type="button" aria-label="Next project video">&#10095;</button>
      </div>
      <div class="video-controls" aria-label="Video controls">
        <button id="video-play" class="video-button" type="button" aria-label="Play video" aria-pressed="false">&#9654;</button>
        <span id="video-current-time" class="video-time">0:00</span>
        <input id="video-progress" class="video-progress" type="range" min="0" max="100" value="0" step="0.1" aria-label="Video progress">
        <span id="video-duration" class="video-time">0:00</span>
      </div>
    </div>`;
}

function projectMediaMarkup(project) {
  if (!project.media.length) return "";
  return `
    <section class="project-media-viewer" aria-label="${project.title} media">
      <div id="project-media-stage" class="project-media-stage"></div>
      <button id="media-prev" class="media-nav media-prev" type="button" aria-label="Previous project media">&#10094;</button>
      <button id="media-next" class="media-nav media-next" type="button" aria-label="Next project media">&#10095;</button>
      <p id="media-count" class="media-count"></p>
    </section>`;
}

function renderProject(project) {
  detail.innerHTML = `
    <header class="project-detail-header">
      <div class="project-title-block">
        <p class="project-eyebrow">${project.category}</p>
        <h1><span class="gradient-text">${project.title}</span></h1>
      </div>
      <div class="project-cover-wrap">
        ${mediaMarkup({ src: project.mainMedia, alt: `${project.title} main image` })}
        <span class="project-year">${project.date}</span>
      </div>
    </header>
    <section class="info-section project-description">
      <h2>About the project</h2>
      ${project.description.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      <div class="skills-section"><ul class="skills-list">${project.skills.map((skill) => `<li class="skill">${skill}</li>`).join("")}</ul></div>
      ${projectMediaMarkup(project)}
      ${projectVideoMarkup(project)}
    </section>
    <div class="project-info">
      <section id="links-section" class="info-section"><h2>Project links</h2><div class="project-links">${project.links.map((link) => `<a class="project-link" href="${link.url}" target="_blank" rel="noreferrer">${link.label} &#8599;</a>`).join("")}</div></section>
    </div>
    `;

  const linksSection = document.getElementById("links-section");
  if (!project.links.length) linksSection.hidden = true;
  if (project.media.length) {
    updateMedia(project);
    document.getElementById("media-prev").addEventListener("click", () => changeMedia(project, -1));
    document.getElementById("media-next").addEventListener("click", () => changeMedia(project, 1));
  }
  setupVideoPlayer(project);
}

function formatVideoTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

function setupVideoPlayer(project) {
  const video = document.getElementById("project-video");
  if (!video) return;
  const playButton = document.getElementById("video-play");
  const progress = document.getElementById("video-progress");
  const currentTime = document.getElementById("video-current-time");
  const duration = document.getElementById("video-duration");
  const previousVideo = document.getElementById("video-prev");
  const nextVideo = document.getElementById("video-next");

  previousVideo.hidden = project.video.length < 2;
  nextVideo.hidden = project.video.length < 2;
  previousVideo.disabled = videoIndex === 0;
  nextVideo.disabled = videoIndex === project.video.length - 1;

  const updateVideoControls = () => {
    progress.value = video.duration ? (video.currentTime / video.duration) * 100 : 0;
    currentTime.textContent = formatVideoTime(video.currentTime);
    duration.textContent = formatVideoTime(video.duration);
    playButton.innerHTML = video.paused ? "&#9654;" : "&#10074;&#10074;";
    playButton.setAttribute("aria-label", video.paused ? "Play video" : "Pause video");
    playButton.setAttribute("aria-pressed", String(!video.paused));
  };

  playButton.addEventListener("click", () => {
    if (video.paused) video.play();
    else video.pause();
  });
  progress.addEventListener("input", () => {
    if (video.duration) video.currentTime = (Number(progress.value) / 100) * video.duration;
  });
  previousVideo.addEventListener("click", () => changeVideo(project, -1));
  nextVideo.addEventListener("click", () => changeVideo(project, 1));
  ["loadedmetadata", "timeupdate", "play", "pause", "ended"].forEach((eventName) => video.addEventListener(eventName, updateVideoControls));
  updateVideoControls();
}

function changeVideo(project, direction) {
  const video = document.getElementById("project-video");
  if (!video) return;
  const nextVideoIndex = videoIndex + direction;
  if (nextVideoIndex < 0 || nextVideoIndex >= project.video.length) return;
  videoIndex = nextVideoIndex;
  video.pause();
  video.src = project.video[videoIndex];
  video.load();
  document.getElementById("video-prev").disabled = videoIndex === 0;
  document.getElementById("video-next").disabled = videoIndex === project.video.length - 1;
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
    let touchStartX = 0;
    let touchStartY = 0;
    mediaStage.addEventListener("touchstart", (event) => {
      touchStartX = event.changedTouches[0].clientX;
      touchStartY = event.changedTouches[0].clientY;
    }, { passive: true });
    mediaStage.addEventListener("touchend", (event) => {
      const touchEndX = event.changedTouches[0].clientX;
      const touchEndY = event.changedTouches[0].clientY;
      const horizontalDistance = touchEndX - touchStartX;
      const verticalDistance = touchEndY - touchStartY;
      if (Math.abs(horizontalDistance) < 40 || Math.abs(horizontalDistance) <= Math.abs(verticalDistance)) return;
      changeMedia(project, horizontalDistance < 0 ? 1 : -1);
    }, { passive: true });
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
