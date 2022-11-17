const name = prompt("Type your name")
let result = Math.floor(Math.random()*4)+1;
switch (result){
    case 1:
        result = "Gryffindor";
        break;
    case 2:
        result = "Slytherin";
        break;
    case 3:
        result = "Hufflepuff";
        break;
    case 4:
        result = "Ravenclaw";
        break;
    
}
document.querySelector('#target').innerHTML = `<h1>${name}, you are ${result}</h1>`