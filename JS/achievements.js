const viewer = document.getElementById('imageViewer');
const viewerImage = document.getElementById('viewerImage');
const viewerDownload = document.getElementById('viewerDownload');
const prevBtn = document.querySelector('.viewer-prev');
const nextBtn = document.querySelector('.viewer-next');
const closeBtn = document.querySelector('.viewer-close');

let viewerImages = [];
let viewerIndex = 0;

function updateViewer() {
  const currentImage = viewerImages[viewerIndex];
  if (!currentImage) return;

  viewerImage.src = currentImage;
  viewerImage.alt = 'Achievement certificate';
  const fileName = currentImage.split('/').pop();
  viewerDownload.href = currentImage;
  viewerDownload.setAttribute('download', fileName);

  prevBtn.style.visibility = viewerImages.length > 1 ? 'visible' : 'hidden';
  nextBtn.style.visibility = viewerImages.length > 1 ? 'visible' : 'hidden';
}

function openViewer(images, title) {
  viewerImages = Array.isArray(images) ? images : [images];
  viewerIndex = 0;
  viewer.classList.remove('hidden');
  viewer.setAttribute('aria-hidden', 'false');
  updateViewer();
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
  updateViewer();
});

nextBtn.addEventListener('click', () => {
  if (viewerImages.length <= 1) return;
  viewerIndex = (viewerIndex + 1) % viewerImages.length;
  updateViewer();
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
      updateViewer();
    }
  }
  if (event.key === 'ArrowRight') {
    if (viewerImages.length > 1) {
      viewerIndex = (viewerIndex + 1) % viewerImages.length;
      updateViewer();
    }
  }
});