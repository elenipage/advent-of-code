const {array1, array2} = require('./input')

function differenceCalculator () {
    const sortedArr1 = array1.sort((a, b) => a - b)
    const sortedArr2 = array2.sort((a, b) => a - b)
    
    const differenceArr = []
    
    sortedArr1.forEach((num1, index) => {
        if (num1 > sortedArr2[index]) {differenceArr.push(num1 - sortedArr2[index])}
            else {differenceArr.push(sortedArr2[index] - num1)}
    })

    let differenceSum = 0
    
    for (let i = 0; i < differenceArr.length; i++) {
        differenceSum += differenceArr[i];
      }

    return differenceSum

}

console.log(differenceCalculator())