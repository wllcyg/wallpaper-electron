import { ipcMain, BrowserWindow } from 'electron';

export default function System(mainWindow:BrowserWindow) {
  ipcMain.on('change-theme', (_, value) => {
    mainWindow.setTitleBarOverlay({
      color: 'rgba(0,0,0,0)',
      height: 50,
      symbolColor: value})
  });
}