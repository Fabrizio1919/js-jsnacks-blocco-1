/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */
/* let somma= 0
let number;
for( let i = 0; i < 10 ; i++) {
    console.log(i);
    number= parseInt(prompt('inserisci un numero'));
    if(number>0) {
        somma+=number;
    }
}
console.log(somma); */


let somma= 0
let number;
let i = 0
while (i < 10) {
    console.log(i);
    number= parseInt(prompt('inserisci un numero'));
    if(number>0) {
        somma+=number;
    }
    i++
}
console.log(somma);



