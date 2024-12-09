const input = require("./input");

function safeReportDetector(data) {
  const formattedData = data
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));
  let safeCount = 0;

  formattedData.forEach((report) => {
    if (report.length < 2) return;

    let isAscending = false;
    let isDescending = false;
    let validDifferences = true;

    for (let i = 1; i < report.length; i++) {
      const diff = report[i] - report[i - 1];
      if (diff < 0) {
        isDescending = true;
      } else {
        isAscending = true;
      }
      if (isDescending && (diff > -1 || diff < -3)) {
        validDifferences = false;
        break;
      }
      if (isAscending && (diff < 1 || diff > 3)) {
        validDifferences = false;
        break;
      }
    }

    if (validDifferences) {
      safeCount++;
    }
  });

  return safeCount;
}

module.exports = safeReportDetector;
