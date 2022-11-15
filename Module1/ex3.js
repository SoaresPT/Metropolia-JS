const n1 = prompt('Type the first integer number:');
const n2 = prompt('Type the second integer number:');
const n3 = prompt('Type the third integer number:');

const sum = parseInt(n1) + parseInt(n2) + parseInt(n3)
const product = parseInt(n1) * parseInt(n2) * parseInt(n3)
const average = sum / 3
document.querySelector('#target').innerHTML = `<h1>Sum: ${sum} Product: ${product} Average: ${average}</h1>`