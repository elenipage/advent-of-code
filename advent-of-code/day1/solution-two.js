const data = require('./input')

function similarityCalculator (data) {
    const lines = data.trim().split("\n");
    const array1 = [];
    const array2 = [];

lines.forEach((line, index) => {
    const parts = line.split(/\s+/);
    const [num1, num2] = parts.map(Number);
    array1.push(num1);
    array2.push(num2);
});
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

module.exports = similarityCalculator