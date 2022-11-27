function even(numberArray){
    evenArray = []
    for (let i= 0; i < numberArray.length; i++) {
        if (numberArray[i] % 2 == 0) {
            evenArray.push(numberArray[i]);
        }
    }
    return evenArray
}

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evenList = even(numberList)
console.log(`Original List: ${numberList}`);
console.log(`Even List: ${evenList}`);
