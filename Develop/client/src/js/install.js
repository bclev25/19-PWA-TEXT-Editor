const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    const installPromptEvent = event;
});

// TODO: Implement a click event handler on the `butInstall` element
if (butInstall) {
    butInstall.style.display = 'block';
}
 butInstall.addEventListener('click', async () => {
    installPromptEvent.prompt();

    const choiceResult = await installPromptEvent.userChoice;

    if (choiceResult.outcome === 'accepted') {
        console.log('user accepted the installation prompt');
    } else {
        console.log('User dismissed the installation prompt');
    }

    butInstall.style.display = 'none';
 });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App was installed');
});
