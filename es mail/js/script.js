// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.

// Array con le mail
const arrMail = [
  "mario.rossi@fakeemail.com",
  "lucia.bianchi@fakeemail.com",
  "giovanni.verdi@fakeemail.com",
  "anna.neri@fakeemail.com",
  "paolo.costa@fakeemail.com",
  "francesca.rizzo@fakeemail.com",
  "luca.fontana@fakeemail.com",
  "chiara.gallo@fakeemail.com",
  "andrea.moretto@fakeemail.com",
  "elisa.ferri@fakeemail.com"
];
// input
const mailUser = prompt("Inserisci la tua email");
// dichiarazione variabile 
let tempMail = false;

// ciclo per scorrere l'array
for(i= 0; i< arrMail.length; i++){
    // condizione per verificare che la mail è all'interno dell'array
    if(mailUser === arrMail[i]){
        tempMail = true;
    }
}
// condizione per far stampare i due casi
if(tempMail){
    console.log("La tua email è in lista, puoi entrare alla festa");
}else{ 
    console.log("La tua email non è in lista, non puoi entrare"); 
}