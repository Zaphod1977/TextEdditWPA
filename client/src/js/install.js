const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
  
    butInstall.addEventListener('click', () => {
      event.prompt();
      butInstall.setAttribute('disabled', true);
      butInstall.textContent = 'Installed!';
    });
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async (event) => {
    event.preventDefault();
        // check if CodeMirror is loaded
        if (typeof CodeMirror === 'undefined') {
            throw new Error('CodeMirror is not loaded');
          }
          console.log(CodeMirror);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
});
