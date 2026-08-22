const emailCard = document.querySelector('.email-card');
const discordCard = document.querySelector('.discord-card');
const copyNotification = document.querySelector('.copy-notification');
let notificationTimeout;

function showCopyNotification(message) {
  copyNotification.textContent = message;
  copyNotification.classList.add('is-visible');
  clearTimeout(notificationTimeout);
  notificationTimeout = setTimeout(() => {
    copyNotification.classList.remove('is-visible');
  }, 2600);
}

async function copyValue(event, card, dataKey, message) {
  event.preventDefault();
  const value = card.dataset[dataKey];

  try {
    await navigator.clipboard.writeText(value);
    showCopyNotification(message);
  } catch {
    const textArea = document.createElement('textarea');
    textArea.value = value;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    showCopyNotification(message);
  }
}

emailCard.addEventListener('click', (event) => {
  copyValue(event, emailCard, 'email', 'Email copied to clipboard.');
});

discordCard.addEventListener('click', (event) => {
  copyValue(event, discordCard, 'username', 'Username copied to clipboard.');
});