const calculate = confirm("Should I calculate the square root?")
if (calculate) {
    const number = prompt("Type the number")
    if (number < 0) {
        document.querySelector("#target").innerHTML = `<h1>The square root of a negative number is not defined</h1>`;
    }
    else {
        document.querySelector("#target").innerHTML = `<h1>The square root of ${number} is ${Math.sqrt(number)}</h1>`;
    }
}
else {
    document.querySelector("#target").innerHTML = `<h1>The square root is not calculated.</h1>`;
}