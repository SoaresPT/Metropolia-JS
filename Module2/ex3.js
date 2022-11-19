let dogArray = []
for (let i=0; i < 6; i++) {
    dogArray.push(prompt(`Enter the name of the dog #${i+1}`));
}
dogArray.sort();
dogArray.reverse();
for (let j=0; j < dogArray.length; j++){
    document.querySelector("#target").innerHTML += `<li>${dogArray[j]}</li>`;
}
