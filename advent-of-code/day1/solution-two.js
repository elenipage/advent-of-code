const {array1, array2} = require('./input')

function similarityCalculator () {
    let similarityScore = 0

    array1.forEach((num1) => {
        let appearanceCount = 0
        array2.forEach((num2) => {
            if (num1 === num2) {appearanceCount++}
        })
        const similarity = num1 * appearanceCount
        similarityScore += similarity
        appearanceCount = 0
    })

    return similarityScore
}

console.log(similarityCalculator())