// creo un ciclo for per creare 5 numeri casuali che inserisco dentro un'array

let randomNumbers = []

for(let i=0; i<5; i++){
    randomNumbers.push(rN(1, 50));
}

console.log(randomNumbers);

// creo un ciclo for per chiedere all'utente 5 numeri che inserisco dentro un'array

let userNumbers = []

for(let i=0; i<5; i++){
    userNumbers.push(parseInt(prompt("Inserisci i numeri")));
}

console.log(userNumbers);