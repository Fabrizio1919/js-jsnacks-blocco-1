/* Snack 1 Blocco 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */



let utent1 = Number( prompt('Inserisci un numero'))
console.log(utent1);
let utent2 = Number( prompt('Inserisci un numero'))
console.log(utent2);

if( utent1 > utent2){
    console.log('vince utente 1');
} else if (utent2 > utent1) {
    console.log('vince utente 2');
}


