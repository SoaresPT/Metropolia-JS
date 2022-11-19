let p
let numberArray = []
while (true) {
    p = prompt("Type a number");
    if (p != 0){
        numberArray.push(p);
    } else {
        break;
    }
}
numberArray.sort();
numberArray.reverse();
for (let i=0; i < numberArray.length; i++){
    console.log(numberArray[i]);
}