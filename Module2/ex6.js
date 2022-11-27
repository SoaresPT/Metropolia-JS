function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

let rolledNumber = 0;
while (rolledNumber != 6) {
    rolledNumber = rollDice();
    document.querySelector("#target").innerHTML += `<li>${rolledNumber}</li>`;
}
