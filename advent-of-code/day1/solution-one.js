const data = require('./input')

function differenceCalculator (data) {
    const lines = data.trim().split("\n");
    const array1 = [];
    const array2 = [];

lines.forEach((line, index) => {
    const parts = line.split(/\s+/);
    const [num1, num2] = parts.map(Number);
    array1.push(num1);
    array2.push(num2);
});
    const sortedArr1 = array1.sort((a, b) => a - b)
    const sortedArr2 = array2.sort((a, b) => a - b)
    
    const differenceArr = []
    sortedArr1.forEach((num, index) => {
        if (num > sortedArr2[index]) {differenceArr.push(num - sortedArr2[index])}
            else {differenceArr.push(sortedArr2[index] - num)}
    })

    let differenceSum = 0
    
    for (let i = 0; i < differenceArr.length; i++) {
        differenceSum += differenceArr[i];
      }

    return differenceSum

}

console.log(differenceCalculator(data))
module.exports = differenceCalculator