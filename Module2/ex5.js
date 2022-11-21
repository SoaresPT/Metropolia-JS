let p
let numberArray = []
while (true) {
    p = prompt("Type a number");
    if (!numberArray.includes(p)){
        numberArray.push(p);
    } else {
        break;
    }
}
numberArray.sort(function(a,b){return a-b});
for (let i=0; i < numberArray.length; i++){
    console.log(numberArray[i]);
}