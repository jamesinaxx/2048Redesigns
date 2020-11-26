const {app, BrowserWindow} = require('electron');
  const path = require('path');
  const url = require('url');

require('dotenv').config();

const clientId = process.env.TOKEN;

app.on('ready', () => {

  const win = new BrowserWindow({ width: 800, height: 800, show: false, autoHideMenuBar: true, icon: './assets/icons/favicon.ico' });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.on('ready-to-show', () => {
    win.show();
    win.maximize();
  });
});

app.on('window-all-closed', () => {
  app.quit();
});