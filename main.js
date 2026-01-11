const { app, BrowserWindow, screen } = require("electron");
const AutoLaunch = require("auto-launch");

function createWindow() {
  const display = screen.getPrimaryDisplay();
  const { width: screenWidth } = display.workAreaSize;

  const windowWidth = 240;
  const windowHeight = 252;

  const win = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false,
    transparent: true,

    x: screenWidth - windowWidth - 20,
    y: 20,

    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadFile("src/index.html");
}

app.whenReady().then(() => {
  createWindow();

  const appLauncher = new AutoLaunch({
    name: "Calendar~cer",
  });

  appLauncher.isEnabled().then((isEnabled) => {
    if (!isEnabled) appLauncher.enable();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
