const electron = require('electron');
const { ipcRenderer, contextBridge } = electron;
const fs = require('fs');
const path = require('path');

contextBridge.exposeInMainWorld('electron', {
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send('notify', message);
    },
  },
  batteryApi: {},
  filesApi: {
    async showOpenDialog() {
      const result = await ipcRenderer.invoke('openfile');
      return result;
    },
  },
  fs,
  path,
});
