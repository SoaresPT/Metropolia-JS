const participants = prompt("Enter the number of participants")
let participantArray = []
for (let i=0; i < participants; i++) {
    participantArray.push(prompt(`Enter the name of the participant #${i+1}`));
}
participantArray.sort();
for (let j=0; j < participantArray.length; j++){
    document.querySelector("#target").innerHTML += `<li>${participantArray[j]}</li>`;
}
