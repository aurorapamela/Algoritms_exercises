let moveZeros = function (arr) {
  const noZeros = [];
  const zeros = [];
  arr.forEach((element) => {
    if (element === 0) {
      zeros.push(element);
    } else {
      noZeros.push(element);
    }
  });
  return noZeros.concat(zeros);
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
//returns [false, 1, 1, 2, 1, 3, 'a', 0, 0]

//------------------- reduce + arrays

let moveZerosTwo = function (arr) {
  const [noZeros, zeros] = arr.reduce(
    ([noZeros, zeros], element) => {
      if (element === 0) {
        return [noZeros, [...zeros, element]];
      } else {
        return [[...noZeros, element], zeros];
      }
    },
    [[], []]
  );
  return noZeros.concat(zeros);
};

console.log(moveZerosTwo([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

//------------------- reduce + objetos

let moveZerosThree = function (arr) {
  const { noZeros, zeros } = arr.reduce(
    ({ noZeros, zeros }, element) => {
      if (element === 0) {
        return { noZeros, zeros: [...zeros, element] };
      } else {
        return { noZeros: [...noZeros, element], zeros };
      }
    },
    { zeros: [], noZeros: [] }
  );
  return noZeros.concat(zeros);
};

console.log(moveZerosThree([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

//------------------- filter + new Array

const moveZerosFour = function (arr) {
  const arrNoZeros = arr.filter((element) => element !== 0);
  const zeros = new Array(arr.length - arrNoZeros.length).fill(0);
  return arrNoZeros.concat(zeros);
};

console.log(moveZerosFour([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

//------------------- prefill, incompleto

function prefill(n, v) {
  if (Number.isInteger(+n) && n >= 0 && ![true, false].includes(n)) {
    return Array(+n).fill(v);
  }
  throw TypeError(`${n} is invalid`);
}

//-------------------

function pigIt(str) {
  return str
    .split(" ")
    .map((word) => `${word.slice(1)}${word.charAt(0)}ay`)
    .join(" ");
}

console.log(pigIt("Pig Latin is cool"));

//-------------------

function validParentheses(parens) {
  if (parens === "") {
    return true;
  }
  const replaced = parens.replace(/\(\)/gi, "");
  if (replaced === parens) {
    return false;
  }
  return validParentheses(replaced);
}

console.log(validParentheses("()"));
console.log(validParentheses(")(()))"));
console.log(validParentheses("("));
console.log(validParentheses("(())((()()))"));

//-------------------

function validParentheses(parens) {
  let n = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == "(") n++;
    if (parens[i] == ")") n--;
    if (n < 0) return false;
  }
  return n == 0;
}

console.log(validParentheses("()")); // true
console.log(validParentheses(")(()))")); //false
console.log(validParentheses("(")); //false
console.log(validParentheses("(())((()()))")); //true
console.log(validParentheses("(((((((((((")); //false
console.log(validParentheses(")))))))))))")); //false

//-------------------

function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}

console.log(solution("pamelaAuroraDeveloper")); // pamela Aurora Developer

//-------------------

function firstNonRepeatingLetter(s) {
  const wordLowerCase = s.toLowerCase();
  const index = s
    .split("")
    .findIndex(
      (letter) =>
        wordLowerCase.indexOf(letter) === wordLowerCase.lastIndexOf(letter)
    );
  return s[index] || "";
}

//------------------- easy way alone

function nameShuffler(str) {
  const name = str.split(" ");
  return `${name[1]} ${name[0]}`;
}

console.log(nameShuffler("john McClane")); //"McClane john"

//------------------- with methods

function nameShufflerTwo(str) {
  const name = str.split(" ");
  return name.reverse().join(" ");
}

console.log(nameShufflerTwo("Pame Aurora")); //"Aurora Pame"

//------------------- with destructuring

function nameShufflerThree(str) {
  const [name, lastName] = str.split(" ");
  return `${lastName} ${name}`;
}

console.log(nameShufflerThree("Pame Aurora")); //"Aurora Pame"

//-------------------

function numberToPower(number, power) {
  if (power === 0) {
    return 1;
  }
  let buffer = number;
  for (let i = power; i > 1; i--) {
    buffer *= number;
  }
  return buffer;
}

console.log(numberToPower(3, 2)); // 9
console.log(numberToPower(2, 3)); // 8
console.log(numberToPower(10, 6)); //1.000.000

//-------------------
Array.prototype.filter = function (func) {
  console.log(func, this);
  let filtered = [];
  for (let i = 0; i < this.length; i++) {
    const isMatch = func(this[i]);
    if (isMatch) {
      filtered.push(this[i]);
    }
  }
  return filtered;
};

console.log(
  [1, 2, 3, 4].filter((num) => {
    return num > 3;
  }),
  [4]
);

//------------------- alone with regex
function getCount(str) {
  let vowelsCount = 0;
  str.split("").forEach((letter) => {
    if (letter.match(/[aeiou]+/gi)) {
      vowelsCount++;
    }
  });
  return vowelsCount;
}

console.log(getCount("Pamela"));
console.log(getCount("Ariel"));
console.log(getCount("Valentina"));

//------------------- for - const con las vocales, sin regex

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function getCountTwo(str) {
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

console.log(getCountTwo("Pamela"));

//------------------- usando reduce y const externa

function getCountThree(str) {
  return str
    .split("")
    .reduce((acum, letter) => (vowels.includes(letter) ? acum + 1 : acum), 0);
}

console.log(getCountThree("Pamela"));

//------------------- alone

function highAndLow(numbers) {
  const ordered = numbers.split(" ").sort().reverse();
  return `"${ordered[0]} ${ordered[ordered.length - 1]}"`;
}

console.log(highAndLow("1 2 3 4 5")); // "5 1"
console.log(highAndLow("1 2 -3 4 5")); // "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // "9 -5"

//------------------- best solution

function highAndLowTwo(numbers) {
  const num = numbers.split(" ").map((num) => Number(num));
  const min = Math.min(...num);
  const max = Math.max(...num);
  return `${max} ${min}`;
}

// function highAndLowTwo(numbers) {
//   const num = numbers.split(" ").map(Number);
//   const minMax = [Math.min(...num), Math.max(...num)];
//   return minMax.join(" ");
// }

console.log(highAndLowTwo("1 2 3 4 5")); // "5 1"
console.log(highAndLowTwo("1 2 -3 4 78")); // "78 -3"
console.log(highAndLowTwo("1 9 3 4 -5 256")); // "256 -5"

//-------------------

function findShort(s) {
  const arr = s.split(" ");
  const nums = [];
  arr.forEach((word) => nums.push(word.length));
  const min = Math.min(...nums);
  return min;
}

console.log(findShort("bitcoin take over the world or maybe who")); //2

//-------------------

function findOutlier(integers) {
  const isOdd = [];
  const isEven = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 !== 0) {
      isOdd.push(integers[i]);
    } else {
      isEven.push(integers[i]);
    }
  }
  return isEven.length > isOdd.length ? isOdd[0] : isEven[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); //11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); //160

//-------------------

function findOutlierTwo(integers) {
  const even = integers.filter((num) => num % 2 === 0);
  const odd = integers.filter((num) => num % 2 !== 0);
  return even.length > odd.length ? odd[0] : even[0];
}

console.log(findOutlierTwo([2, 4, 0, 100, 4, 11, 2602, 36])); //11
console.log(findOutlierTwo([160, 3, 1719, 19, 11, 13, -21])); //160