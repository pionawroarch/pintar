const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
/* muzyka i odgłosy (WebAudio) muszą ruszyć bez wcześniejszego kliknięcia i działać w tle */
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
function createWindow() {
  const win = new BrowserWindow({
    width: 1920, height: 1080, minWidth: 900, minHeight: 600,
    backgroundColor: '#0e0a06', title: 'Pintar', autoHideMenuBar: true, fullscreen: true, show: false,
    icon: path.join(__dirname, '..', 'icons', 'icon-512.png'),
    webPreferences: { contextIsolation: true, sandbox: true, autoplayPolicy: 'no-user-gesture-required', backgroundThrottling: false }
  });
  Menu.setApplicationMenu(null);
  win.once('ready-to-show', () => { win.setFullScreen(true); win.show(); });
  win.loadFile(path.join(__dirname, '..', 'index.html'));
  win.webContents.on('before-input-event', (e, i) => {
    if (i.type === 'keyDown' && i.key === 'F11') win.setFullScreen(!win.isFullScreen());
    if (i.type === 'keyDown' && i.key === 'F12') win.webContents.toggleDevTools();
  });
}
app.whenReady().then(() => { createWindow(); app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); }); });
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
