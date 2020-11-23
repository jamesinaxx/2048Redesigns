var currentGame = "none";

// eslint-disable-next-line semi
document.getElementById("cupcakes").onclick = function() { cupcakes() };

function cupcakes() {
    currentGame = "cupcakes";
    document.getElementById("cupcakes").innerHTML = currentGame;
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