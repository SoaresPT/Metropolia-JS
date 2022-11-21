sides = prompt("Type the number of sides")
function rollDice(sides){
    return Math.floor(Math.random() * sides) + 1;
}

rolledNumber = 0
while (rolledNumber != sides) {
    rolledNumber = rollDice(sides);
    document.querySelector("#target").innerHTML += `<li>${rolledNumber}</li>`;
}