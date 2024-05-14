const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  // Remove the hidden class from the install button
  butInstall.style.display = 'block';

  butInstall.addEventListener('click', async () => {
    // Hide the install button
    butInstall.style.display = 'none';
    // Show the install prompt
    event.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await event.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    // Clear the deferredPrompt so it can be garbage collected
    window.deferredPrompt = null;
  });
});

// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed');
  // Clear the deferredPrompt so it can be garbage collected
  window.deferredPrompt = null;
});