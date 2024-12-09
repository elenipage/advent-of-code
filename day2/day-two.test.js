const safeReportDetector = require('./solution-one');
const safeReportDetectorWithDampener = require('./solution-two');

describe("Solution one tests", () => {
    test("Function should return a number", () => {
      const testInput = `
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
`;
      expect(typeof safeReportDetector(testInput)).toBe("number");
    });
    test("Where all increases and decreases are at least 1 and no more than 3, function should find the total rows where all numbers increase or all numbers decrease", () => {
      const testInput = `
1 2 3 4 5
1 2 1 3 2
5 4 3 2 1
4 3 4 5 6`;
      expect(safeReportDetector(testInput)).toBe(2);
    });
    test("Function should find the total rows where there is no increase or decrease less than 1 or more than 3", () => {
        const testInput = `
1 2 3 4 5
1 2 1 3 2
9 5 4 3 2
8 7 4 3 1
1 5 7 8 9
5 4 3 2 1
4 3 4 5 6`;
        expect(safeReportDetector(testInput)).toBe(3);
      });
  });
  
  describe("Solution two tests", () => {
    test("Function should return a number", () => {
        const testInput = `
1 2 3 4 5
1 2 1 3 2
9 5 4 3 2
8 7 4 3 1
`;
      expect(typeof safeReportDetectorWithDampener(testInput)).toBe("number");
    });
    test("Function should find the total rows where all levels are ascending or descending, and where there is no increase or decrease less than 1 or more than 3, even after removing any one of the levels", () => {
      const testInput = `
1 2 3 4 5
1 2 1 3 2
9 5 4 3 2
8 7 4 3 1
1 5 7 8 9
5 4 3 2 1
4 3 4 5 6`;
      expect(safeReportDetectorWithDampener(testInput)).toBe(6);
    });
  });