const rl = require ("readline-sync");


//juego uno
var deck = [];
var colors = ["yellow", "blue", "green", "red"];
var types = ["comun", "especial", "comodin"]

var card = {
    color: null, //amarillo, azul, verde, rojo
    number: null, //0-9
    type: null //comun,especiales y comodines
}

for (var ccolor = 0; ccolor < colors.length; ccolor++) {

    for (var cNumber = 0; cNumber < 10; cNumber++) {

        deck.push({ color: colors[ccolor], number: cNumber, type: "color" });
    }

    for (var cNumber1 = 1; cNumber1 < 10; cNumber1++) {
        deck.push({ color: colors[ccolor], number: cNumber1, type: "color" });
    }

    deck.push({ color: colors[ccolor], number: "+2", type: "especial" });
    deck.push({ color: colors[ccolor], number: "+2", type: "especial" });
    deck.push({ color: colors[ccolor], number: "B", type: "especial" });
    deck.push({ color: colors[ccolor], number: "B", type: "especial" });
    deck.push({ color: colors[ccolor], number: "R", type: "especial" });
    deck.push({ color: colors[ccolor], number: "R", type: "especial" });
}
deck.push({ color: null, number: "+4", type: "comodin" });
deck.push({ color: null, number: "+4", type: "comodin" });
deck.push({ color: null, number: "+4", type: "comodin" });
deck.push({ color: null, number: "+4", type: "comodin" });
deck.push({ color: null, number: "CC", type: "comodin" });
deck.push({ color: null, number: "CC", type: "comodin" });
deck.push({ color: null, number: "CC", type: "comodin" });
deck.push({ color: null, number: "CC", type: "comodin" });

console.log(deck);

const players = rl.question("cuantos jugadores seran", {})

console.log(players)