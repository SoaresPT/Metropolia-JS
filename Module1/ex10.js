const numberOfDices = Number(prompt("How many dices"))
const desiredSum = Number(prompt("Desired sum"))
const repetitions = 10000
let percentage = 0
let rng = 0

for (let i=0; i <= repetitions; i++) {
    for (let j=1; j <= numberOfDices; j++) {
        rng += Math.floor(Math.random() * 6 + 1);
    }
    if (desiredSum == rng) {
        percentage += 1
    }
    rng = 0;
}
percentage = (percentage / repetitions * 100).toFixed(2);
document.querySelector("#target").innerHTML += `<h1>The probability of ${numberOfDices} dices rolling ${desiredSum} is ${percentage} %.<br>The dices were rolled ${repetitions} times for this sample.</h1>`;