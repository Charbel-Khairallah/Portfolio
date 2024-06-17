function FIX_FUCKING_POSITION_FONT_SIZE_ERROR(){
    const ShadowContainer = document.getElementById('ProfileDescriptionSubContainer');
    ShadowContainer.style.position = 'absolute';
}

  window.addEventListener('DOMContentLoaded', (event) => {
    requestAnimationFrame(() => {
        FIX_FUCKING_POSITION_FONT_SIZE_ERROR();
    });
  });
