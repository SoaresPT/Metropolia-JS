const diceRolls = prompt("How many dice rolls?")
let totalRolled = 0

for (let i=0; i < diceRolls; i++){
    totalRolled += Math.floor(Math.random() * 6 + 1);
}
document.querySelector("#target").innerHTML = `<h1>The sum of the rolls is ${totalRolled}.</h1>`;