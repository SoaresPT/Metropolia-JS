const startYear = prompt("Start Year")
const endYear = prompt("End year")
for (let i=startYear; i <= endYear; i++){
    if ((i % 4 == 0) && (i % 100 != 0) || (i % 400 == 0)){
        document.querySelector("#target").innerHTML += `<li>${i}</li>`;
    }
}