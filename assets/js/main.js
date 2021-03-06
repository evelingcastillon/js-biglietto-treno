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

// CALCOLO BIGLIETTO
if (utenteEta < 18) {
    // - va applicato uno sconto del 20% per i minorenni
    var prezzoMinorenne = prezzoPerChilometro - (prezzoPerChilometro * 0.20);
    console.log(prezzoMinorenne.toFixed(2));
} else if (utenteEta >= 65) {
    // - va applicato uno sconto del 40% per gli over 65.
    var prezzoOverAge = prezzoPerChilometro - (prezzoPerChilometro * 0.4);
    console.log(prezzoOverAge.toFixed(2));
}
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).