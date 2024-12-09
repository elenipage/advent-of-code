const differenceCalculator = require("./solution-one");
const similarityCalculator = require("./solution-two")

describe("Solution one tests", () => {
  test("Function should return a number", () => {
    const testInput = `
13432   99527
85422   64009
79131   11256
27674   82211`;
    expect(typeof differenceCalculator(testInput)).toBe("number");
  });
  test("Function should find the total distance between the numbers in the lists paired by their size", () => {
    const testInput = `
13432   99527
85422   64009
79131   11256
27674   82211`;
    const testOutput = 55696;
    expect(differenceCalculator(testInput)).toBe(testOutput);
  });
});

describe("Solution two tests", () => {
  test("Function should return a number", () => {
    const testInput = `
13432   99527
85422   64009
79131   13432`;
    expect(typeof similarityCalculator(testInput)).toBe("number");
  });
  test("Function should find the total distance between the numbers in the lists paired by their size", () => {
    const testInput = `
13432   99527
85422   64009
79131   13432
27674   85422
82211   64009
99527   13432`;
    const testOutput = 211813;
    expect(similarityCalculator(testInput)).toBe(testOutput);
  });
});