import { ipcRenderer } from 'electron'
import HybridEvent from 'packages/HybridEvent'

export async function example() {
  return await ipcRenderer.invoke(HybridEvent.EXAMPLE_EVENT)
}
