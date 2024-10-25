// Hello.
// This is a set of exercises.
// The idea is to practice a few things at a time.
// You do this by writing your answer after a task is given (see the example).
// Use the concepts from our sylabus.

// DO NOT change the provided code unless the task specifically says to do so.

/* -----------------------------------------------------------------------------
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"];

for (let index = 0; index < people.length; index++) {
  let person = people[index];
  console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    create a function that "draws" a tree of a given height.
    Example the following is a tree of height 5

           5        *
           4       ***
           3      *****
           2     *******
           1        x
*/
console.log("Task: A");

function drawTree() {
  const treeHeight = 5;

  for (let i = treeHeight; i >= 1; i--) {
    let treeRows = "";

    for (let j = i; j <= treeHeight - 1; j++) {
      treeRows = "";
    }

    if (i == 1) {
      treeRows = "X";
    }

    for (let k = 1; k <= 2 * (treeHeight - i) + 1; k++) {
      treeRows += "*";
    }
  }

  console.log(`${i} ${treeRows}`);
}

/* -----------------------------------------------------------------------------
    Task: B

    Write a function that "draws" an arrow of a given size.
    Example: This is an arrow of size 3.

    *
    * *
    * * *
    * *
    * 
*/
console.log("Task: B");

function drawArrow(arrowSize) {
  for (let i = 1; i <= arrowSize; i++) {
    let arrowRow = "";

    for (let j = 1; j <= i; j++) {
      arrowRow += "*";
    }

    console.log(arrowRow.trim());
  }

  for (let i = arrowSize - 1; i >= arrowSize; i--) {
    let arrowRow = "";

    for (let j = 1; j <= i; j++) {
      arrowRow += "*";
    }

    console.log(arrowRow.trim());
  }
}

drawArrow(4);

/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into acount the diffrence in aspectratio.

    Example: This is a aproximatly a 2 by 2 box. 
    +--------+
    |        |
    |        |
    +--------+
*/
console.log("Task: C");

function drawBox(boxHeight, boxWidth) {
  for (let i = 0; i <= boxHeight; i++) {
    let topBoxBorder = "+";

    for (let i = 0; i < boxWidth - 2; i++) {
      topBoxBorder = "-";
    }
    topBoxBorder += "-";
    console.log(topBoxBorder);
  }
}

for (let i = 0; i < boxHeight - 2; i++) {
  let boxSides = "|";

  for (let j = 0; j < boxWidth - 2; j++) {
    boxSides += "";
  }

  boxSides += "|";

  console.log(boxSides);
}

let boxBottom = "-";

for (let i = 0; i < boxWidth - 2; i++) {
  boxBottom += "-";
}
boxBottom = "+";

console.log(boxBottom);
/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/
console.log("Task: D");

function checkForHeterograms(word) {
  let sortedWord = word
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort()
    .join("");

  for (let i = 0; i < sortedWord.length - 1; i++) {
    if (sortedWord[i] == [i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(checkForHeterograms("Car"));
console.log(checkForHeterograms("Hello"));
console.log(checkForHeterograms("Javascript"));
console.log(checkForHeterograms("University"));

/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/
console.log("Task: E");

function CheckForAnagrams(firstString, secondString) {
  let newString1 = firstString
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split()
    .sort()
    .join();

  let newString2 = secondString
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split()
    .sort()
    .join();

  return newString1 === newString2;
}

console.log(CheckForAnagrams("Cider", "Cried"));
console.log(CheckForAnagrams("Dusty", "Study"));
console.log(CheckForAnagrams("Hello", "There"));
