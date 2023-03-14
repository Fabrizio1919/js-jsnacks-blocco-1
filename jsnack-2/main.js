/* SNACK 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */


const firstWord = prompt('Inserisci una parola')
console.log(firstWord);
const secondWord = prompt('Inserisci una parola')
console.log(secondWord);

if (firstWord > secondWord) {
    console.log('La prima parola più lunga è firstWord');
} else if (secondWord > firstWord) {
    console.log('La seconda parola più lunga è secondWord');
} else (console.log('sono uguali'))