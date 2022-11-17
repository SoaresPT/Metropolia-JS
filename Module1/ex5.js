const year = prompt("Enter the year")
if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
    document.querySelector("#target").innerHTML = `<h1>${year} is a leap year</h1>`;
}
else {
    document.querySelector("#target").innerHTML = `<h1>${year} is not a leap year</h1>`;
}
