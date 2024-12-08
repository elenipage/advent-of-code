const reports = require("./input");

function safeReportDetector() {
    let safeCount = 0;
  
    reports.forEach(report => {
      if (report.length < 2) return; // Skip invalid or single-number reports
  
      let isAscending = true;
      let isDescending = true;
      let validDifferences = true;
  
      for (let i = 1; i < report.length; i++) {
        const diff = report[i] - report[i - 1];
  
        // Check difference range
        if (diff < 1 || diff > 3) {
          validDifferences = false;
          break;
        }
  
        // Check direction consistency
        if (diff > 0) {
          isDescending = false; // Any increase breaks "descending" status
        } else if (diff < 0) {
          isAscending = false; // Any decrease breaks "ascending" status
        }
      }
  
      // Report is safe if it satisfies both conditions
      if (validDifferences && (isAscending || isDescending)) {
        safeCount++;
      }
    });
  
    return safeCount;
  }
  
  console.log(safeReportDetector());
