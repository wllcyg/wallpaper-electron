import { ipcMain, BrowserWindow } from 'electron';

export default function System(mainWindow:BrowserWindow) {
  ipcMain.handle('change-theme', (_, value) => {
    console.log('111',mainWindow);
  });
}