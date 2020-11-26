const DiscordRPC = require('discord-rpc');

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();

var currentGame = "none";

if (rpc != null) {

    rpc.on('ready', () => {
        setActivity(rpc);

        setInterval(() => {
            setActivity(rpc);
        }, 5000);
    });

    rpc.login({ clientId }).catch(console.error);


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

    document.getElementById("cupcakes").onclick = function cupcakes() {
        currentGame = "cupcakes";
    };

    document.getElementById("starwars").addEventListener('click', () => {
        currentGame = "starwars";
    });

    document.getElementById("army").addEventListener('click', () => {
        currentGame = "army";
    });

    document.getElementById("pantone").addEventListener('click', () => {
        currentGame = "pantone";
    });

    document.getElementById("tiffany").addEventListener('click', () => {
        currentGame = "tiffany";
    });
};