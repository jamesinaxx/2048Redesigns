const {app, BrowserWindow} = require('electron');
  const path = require('path');
  const url = require('url');

const DiscordRPC = require('discord-rpc');

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();

const dir = __dirname;

const clientId = '778575775104106496';

  app.on('ready', () => {

    const win = new BrowserWindow({ width: 800, height: 800, show: false, autoHideMenuBar: true, icon: './assets/favicon.ico' });

    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }));

    win.on('ready-to-show', () => {
      win.show();
      win.maximize();

      rpc.on('ready', () => {
        setActivity(rpc);

        setInterval(() => {
          setActivity(rpc);
        }, 5000);
      });
    });
    rpc.login({ clientId }).catch(console.error);
  });

  app.on('window-all-closed', () => {
    app.quit();
  });
  
  function setActivity(rpc) {
    console.info(currentGame);

    if (!rpc) {
      return;
    };

    rpc.setActivity({
      details: `The Rainbow cupcake is desired by all`,
      state: 'Joining cupcakes!',
      startTimestamp: startTimestamp,
      largeImageKey: currentGame,
      largeImageText: currentGame,
      smallImageKey: "jamesafk",
      smallImageText: 'Shamless plug of me :)',
      instance: false,
    });
  };