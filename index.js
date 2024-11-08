//average = sum of all scores / total number of scores
// function getAverage(scores) {
//     let sum = 0;

//     for (const score of scores) {
//       sum += score;
//     }

//     return sum / scores.length;
//   }

function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

function getGrade(score) {
  if (score <= 59) {
    return "F";
  } else if (score <= 69) {
    return "D";
  } else if (score <= 79) {
    return "C";
  } else if (score <= 89) {
    return "B";
  } else if (score <= 99) {
    return "A";
  } else {
    return "A++";
  }
}

function hasPassingGrade(score) {
  if (getGrade(score) === "F") {
    return false;
  } else {
    return true;
  }
}

function studentMsg(totalScores, studentScore) {
  if (getGrade(studentScore) === "F") {
    return (
      "Class average: " +
      getAverage(totalScores) +
      ". Your grade: " +
      getGrade(studentScore) +
      ". You failed the course."
    );
  } else {
    return (
      "Class average: " +
      getAverage(totalScores) +
      ". Your grade: " +
      getGrade(studentScore) +
      ". You passed the course."
    );
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));

console.log("Has passing grade? " + hasPassingGrade(100));
console.log("Has passing grade? " + hasPassingGrade(53));
console.log("Has passing grade? " + hasPassingGrade(87));

console.log("GetGrade: " + getGrade(96) + " for score of 96");
console.log("GetGrade: " + getGrade(82) + " for score of 82");
console.log("GetGrade: " + getGrade(56) + " for score of 56");

console.log(
  "Average: " + getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])
);
console.log(
  "Average: " + getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])
);
