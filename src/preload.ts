import { contextBridge, ipcRenderer } from 'electron'



if (process.contextIsolated) {
  try {
    // contextBridge.exposeInMainWorld('db', db)
  } catch (error) {
    console.error(error)
  }
}
