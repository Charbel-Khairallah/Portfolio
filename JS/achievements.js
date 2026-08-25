const viewer = document.getElementById('imageViewer');
const viewerImage = document.getElementById('viewerImage');
const prevBtn = document.querySelector('.viewer-prev');
const nextBtn = document.querySelector('.viewer-next');
const closeBtn = document.querySelector('.viewer-close');

let viewerImages = [];
let viewerIndex = 0;
let transitionInProgress = false;
let transitionId = 0;

function triggerImageTransition(direction) {
  if (transitionInProgress) return;

  transitionInProgress = true;
  const activeTransitionId = ++transitionId;
  const currentClasses = ['slide-left-out', 'slide-right-out', 'slide-left-in', 'slide-right-in'];
  viewerImage.classList.remove(...currentClasses);
  void viewerImage.offsetWidth;

  const exitClass = direction === 'next' ? 'slide-right-out' : 'slide-left-out';
  const entryClass = direction === 'next' ? 'slide-left-in' : 'slide-right-in';
  const exitAnimation = direction === 'next' ? 'slideOutRight' : 'slideOutLeft';

  const showNextImage = (event) => {
    if (event.animationName !== exitAnimation) return;

    viewerImage.removeEventListener('animationend', showNextImage);
    viewerImage.classList.remove(exitClass);
    viewerImage.classList.add('transition-hidden');

    const currentImage = viewerImages[viewerIndex];
    if (!currentImage) {
      transitionInProgress = false;
      return;
    }

    const preloadedImage = new Image();
    const revealNextImage = () => {
      if (activeTransitionId !== transitionId || viewer.classList.contains('hidden')) {
        transitionInProgress = false;
        return;
      }

      viewerImage.src = currentImage;
      viewerImage.alt = 'Achievement certificate';
      viewerImage.classList.add(entryClass, 'transition-paused');
      void viewerImage.offsetWidth;

      requestAnimationFrame(() => {
        viewerImage.classList.remove('transition-paused', 'transition-hidden');
        transitionInProgress = false;
      });
    };

    preloadedImage.onload = revealNextImage;
    preloadedImage.onerror = revealNextImage;
    preloadedImage.src = currentImage;
  };

  viewerImage.addEventListener('animationend', showNextImage);
  viewerImage.classList.add(exitClass);
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
  transitionId += 1;
  viewer.classList.remove('hidden');
  viewer.setAttribute('aria-hidden', 'false');
  viewerImage.classList.remove('slide-left-out', 'slide-right-out', 'slide-left-in', 'slide-right-in');
  viewerImage.classList.remove('transition-hidden', 'transition-paused');
  transitionInProgress = false;
  viewerImage.src = viewerImages[viewerIndex];
  viewerImage.alt = 'Achievement certificate';
  prevBtn.style.visibility = viewerImages.length > 1 ? 'visible' : 'hidden';
  nextBtn.style.visibility = viewerImages.length > 1 ? 'visible' : 'hidden';
}

function closeViewer() {
  transitionId += 1;
  transitionInProgress = false;
  viewer.classList.add('hidden');
  viewer.setAttribute('aria-hidden', 'true');
  viewerImage.classList.remove('slide-left-out', 'slide-right-out', 'slide-left-in', 'slide-right-in', 'transition-hidden', 'transition-paused');
  viewerImage.removeAttribute('src');
  viewerImage.removeAttribute('alt');
}

document.querySelectorAll('.certificate-trigger, .view-certificates').forEach((button) => {
  button.addEventListener('click', () => {
    const row = button.closest('.competition-row');
    const trigger = row ? row.querySelector('.certificate-trigger') : null;
    const images = trigger ? JSON.parse(trigger.dataset.images || '[]') : [];
    const title = trigger ? (trigger.dataset.title || 'Achievement') : (button.dataset.title || 'Achievement');
    openViewer(images, title);
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