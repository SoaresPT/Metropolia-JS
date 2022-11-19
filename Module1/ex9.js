const number = prompt("Type a number")
let prime = true

if (number <= 1 || isNaN(number)) {
    document.querySelector("#target").innerHTML = `<h1>Invalid input. Prime numbers must be an integer greater than 1</h1>`;
}
else {
    for (let i=2; i < number; i++){
        if (number % i == 0) {
            prime = false
            break
        }
    }
    if (prime) {
        document.querySelector("#target").innerHTML += `<h1>${number} is a prime number</h1>`;
    } else {
        document.querySelector("#target").innerHTML += `<h1>${number} is not a prime number</h1>`;
    }
}
