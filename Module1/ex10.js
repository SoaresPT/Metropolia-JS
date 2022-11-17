const numberOfDices = Number(prompt("How many dices"))
const desiredSum = Number(prompt("Desired sum"))
const repetitions = 10000
let percentage = 0

for (let i=0; i <= repetitions; i++) {
    rng =  Math.floor(Math.random() * (numberOfDices * 6)) + numberOfDices;
    // debug only
    //console.log(rng);
    //document.querySelector("#target").innerHTML += `Sum: ${rng}<br>`;
    if (desiredSum == rng) {
        console.log(`${rng}`);
        percentage += 1
    }
}
//console.log(`# of hits : ${percentage}`)
percentage = (percentage / repetitions * 100).toFixed(2);
document.querySelector("#target").innerHTML += `<h1>The probability of ${numberOfDices} dices rolling ${desiredSum} is ${percentage} %.<br>The dices were rolled ${repetitions} times for this sample.</h1>`;