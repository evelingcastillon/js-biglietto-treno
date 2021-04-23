// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
var nChilometri = parseInt(prompt('Quanti chilometri vuole percorrere?'));
console.log(nChilometri + ' km');
// chiedere all'utente l'età del passeggero.
var utenteEta = prompt('Quanti anni hai?');
console.log(utenteEta + ' anni');
/* Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km) */
var prezzoPerChilometro = nChilometri * 0.21;
console.log(prezzoPerChilometro);
// - va applicato uno sconto del 20% per i minorenni
if (0 <= utenteEta < 18) {
    var prezzoMinorenne = prezzoPerChilometro - (prezzoPerChilometro * 0.20);
    console.log(prezzoMinorenne);
} else {
    console.log("età non valida");
}
// - va applicato uno sconto del 40% per gli over 65.

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).