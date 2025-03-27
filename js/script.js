// creo un ciclo for per creare 5 numeri casuali 

let randomNumbers = []

for(let i=0; i<5; i++){
    randomNumbers.push(rN(1, 50));
}

console.log(randomNumbers);

// creo un ciclo for per chiedere all'utente 5 numeri 

let userNumbers = []

for(let i=0; i<5; i++){
    userNumbers.push(parseInt(prompt("Inserisci i numeri")));
}

console.log(userNumbers);

// con due cicli for controllo gli elementi di due array

let result = [] 

for(let i=0; i<randomNumbers.length; i++){
    for(let y=0; y<userNumbers.length; y++){
        if (randomNumbers[i] === userNumbers[y]){
            result.push(userNumbers[y]);
        }
    }
}

console.log(result);

//Functions

function rN(min, max){
    let number = Math.floor(Math.random() * (max - min) + min);
    return number;
}