import { ipcMain } from 'electron'
import HybridEvent from 'packages/HybridEvent'

ipcMain.handle(HybridEvent.EXAMPLE_EVENT, async () => {
  return `${HybridEvent.EXAMPLE_EVENT}_result`
})
