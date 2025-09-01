// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// dichiarazione delle variabili utente e computer e assegnazione con generazione di numeri casuali da 1 a 6
const numUser = Math.floor(Math.random() * 6 ) +1;
const numComputer = Math.floor(Math.random() * 6 ) +1;


// stampa a schermo i numeri generati
console.log("Giocatore: " + numUser);
console.log("Computer: " + numComputer);

// condizione per verificare chi ha vinto
if(numUser > numComputer){
    console.log("Il numero del giocatore è più alto");
}else if(numUser < numComputer){
    console.log("Il numero del computer è più alto");
}else{
    console.log("Giocatore e computer hanno estratto lo stesso numero");
}
