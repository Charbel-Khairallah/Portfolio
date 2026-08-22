const viewer = document.getElementById('imageViewer');
const viewerImage = document.getElementById('viewerImage');
const prevBtn = document.querySelector('.viewer-prev');
const nextBtn = document.querySelector('.viewer-next');
const closeBtn = document.querySelector('.viewer-close');

let viewerImages = [];
let viewerIndex = 0;

function triggerImageTransition(direction) {
  const currentClasses = ['slide-left-out', 'slide-right-out', 'slide-left-in', 'slide-right-in'];
  viewerImage.classList.remove(...currentClasses);
  void viewerImage.offsetWidth;

  if (direction === 'next') {
    viewerImage.classList.add('slide-right-out');
    setTimeout(() => {
      const currentImage = viewerImages[viewerIndex];
      if (!currentImage) return;
      viewerImage.src = currentImage;
      viewerImage.alt = 'Achievement certificate';
      viewerImage.classList.remove('slide-right-out');
      void viewerImage.offsetWidth;
      viewerImage.classList.add('slide-left-in');

    }, 180);
    return;
  }

  viewerImage.classList.add('slide-left-out');
  setTimeout(() => {
    const currentImage = viewerImages[viewerIndex];
    if (!currentImage) return;
    viewerImage.src = currentImage;
    viewerImage.alt = 'Achievement certificate';
    viewerImage.classList.remove('slide-left-out');
    void viewerImage.offsetWidth;
    viewerImage.classList.add('slide-right-in');
  }, 180);
}

function updateViewer(direction = 'next') {
  const currentImage = viewerImages[viewerIndex];
  if (!currentImage) return;

  prevBtn.style.visibility = viewerImages.length > 1 ? 'visible' : 'hidden';
  nextBtn.style.visibility = viewerImages.length > 1 ? 'visible' : 'hidden';

  if (direction === 'next' || direction === 'prev') {
    triggerImageTransition(direction);
    return;
  }

  viewerImage.src = currentImage;
  viewerImage.alt = 'Achievement certificate';
}

function openViewer(images, title) {
  viewerImages = Array.isArray(images) ? images : [images];
  viewerIndex = 0;
  viewer.classList.remove('hidden');
  viewer.setAttribute('aria-hidden', 'false');
  viewerImage.classList.remove('slide-left-out', 'slide-right-out', 'slide-left-in', 'slide-right-in');
  viewerImage.src = viewerImages[viewerIndex];
  viewerImage.alt = 'Achievement certificate';
  prevBtn.style.visibility = viewerImages.length > 1 ? 'visible' : 'hidden';
  nextBtn.style.visibility = viewerImages.length > 1 ? 'visible' : 'hidden';
}

function closeViewer() {
  viewer.classList.add('hidden');
  viewer.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('.certificate-trigger').forEach((button) => {
  button.addEventListener('click', () => {
    const images = JSON.parse(button.dataset.images || '[]');
    openViewer(images, button.dataset.title || 'Achievement');
  });
});

prevBtn.addEventListener('click', () => {
  if (viewerImages.length <= 1) return;
  viewerIndex = (viewerIndex - 1 + viewerImages.length) % viewerImages.length;
  updateViewer('prev');
});

nextBtn.addEventListener('click', () => {
  if (viewerImages.length <= 1) return;
  viewerIndex = (viewerIndex + 1) % viewerImages.length;
  updateViewer('next');
});

closeBtn.addEventListener('click', closeViewer);
viewer.addEventListener('click', (event) => {
  if (event.target.matches('[data-close="true"]')) {
    closeViewer();
  }
});

document.addEventListener('keydown', (event) => {
  if (viewer.classList.contains('hidden')) return;

  if (event.key === 'Escape') closeViewer();
  if (event.key === 'ArrowLeft') {
    if (viewerImages.length > 1) {
      viewerIndex = (viewerIndex - 1 + viewerImages.length) % viewerImages.length;
      updateViewer('prev');
    }
  }
  if (event.key === 'ArrowRight') {
    if (viewerImages.length > 1) {
      viewerIndex = (viewerIndex + 1) % viewerImages.length;
      updateViewer('next');
    }
  }
});