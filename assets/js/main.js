// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
var nChilometri = parseInt(prompt('Quanti chilometri vuole percorrere?'))
console.log(nChilometri + ' km');
// chiedere all'utente l'età del passeggero.
var utenteEta = prompt('Quanti anni hai?')
console.log(utenteEta + ' anni');
/* Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. */
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).