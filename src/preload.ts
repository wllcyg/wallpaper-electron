import { contextBridge, ipcRenderer } from 'electron'
type versionFun = (...args: unknown[]) => void
export interface versionInt {
  [key: string]: versionFun
}
const system: versionInt = {
  changeTheme: (value) => ipcRenderer.send('change-theme', value),
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('system', system)
  } catch (error) {
    console.error(error)
  }
}
