function concat(arrayOfStrings){
    word = ""
    for (let i=0; i < arrayOfStrings.length; i++){
        word += arrayOfStrings[i];
    }
    return word
}
names = concat(["Johnny", "DeeDee", "Joey", "Marky"]);
document.querySelector("#target").innerHTML += `<li>${names}</li>`;