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

//console.log(deck);

const players = rl.question("cuantos jugadores seran", {})
const totalcards = players * 7;

//repatir 7 caras por jugador
//(total de tarjetas = tarjetas x jugador)
//un arreglo x cada jugador


var cardsplayers = {};



for(var ctcards = 0; ctcards < 7; ctcards++){

    for(var cplayers = 0; cplayers < players; cplayers++){


        if(!cardsplayers["player_"+cplayers]){
           cardsplayers["player_"+cplayers] = [];
        }

        //console.log("player", cplayers);

        //cardsplayers["player_"+cplayers] = []; 

        cardsplayers["player_"+cplayers].push(deck.shift());

        //console.log(deck.shift());

        //console.log(cardsplayers);
    }
}

var trash = [];

trash.push(deck.shift());


funtion cardvalidation(card){
    console.log(card)
}
cardvalidation();

//console.log(trash);
//console.log(deck.length);
//console.log(cardsplayers)