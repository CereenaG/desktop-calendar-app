const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 240,
    height: 252,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false, 
    transparent: true,
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadFile("src/index.html");
}

app.whenReady().then(createWindow);
const AutoLaunch = require('auto-launch');

const appLauncher = new AutoLaunch({
  name: 'Calendar~cer',   // any name
});

appLauncher.isEnabled().then((isEnabled) => {
  if (!isEnabled) appLauncher.enable();
});


app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});