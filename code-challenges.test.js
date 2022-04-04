// // ASSESSMENT 2: Coding Practical Questions with Jest

const { CodeGenerator } = require("@babel/generator")
const { tSStringKeyword } = require("@babel/types")

// const { statements } = require("@babel/template")

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // // --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// // // // a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// describe("multBy3", () => {
//     it("takes in an array of numbers and returns an array with all the numbers multipled by 3", () => {
//       expect(multBy3("numbersArray1")).toEqual([18, 21, 24, 27, 30])
//       expect(multBy3("numbersArray2")).toEqual([72, 81, 90, 99, 108])
//     })
//   })

// // // // //   Good error 
// // // // //   ReferenceError: multBy3 is not defined
// // // // //   22 | describe("multBy3", () => {
// // // // //     23 |     it("takes in an array of numbers and returns an array with all the numbers multipled by 3", () => {

// // // // b) Create the function that makes the test pass.

// // // // Psuedo Coding
// // // // Create a functioon called multBy3
// // // // Our parameter will be an array and returns an array of all numbers multilpied by 3 
// // // // Use .map to iterate through the array 
// // // // We will have two different console log to return values for each array and one function



// const multBy3 = (array) =>{
//     return array.map(array => array *3)
// }
// console.log (multBy3(numbersArray1))
// console.log (multBy3(numbersArray2))



// // // --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// // // a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"

// ReferenceError: test1 is not defined

describe ("test1", () => {
    it("takes a number as an argument and decides if the number is evenly divisble by three or not.", () => {
      expect(test1("15")).toEqual("15 is divisible by three")
      expect(test1("0")).toEqual("0 is divisible by three")
      expect(test1("-7")).toEqual("-7 is not divisible by three")
    })
  })

// // // b) Create the function that makes the test pass.

// // Pesudo Code 
// // Create a function called test1
// // My parameter will take and argument and decide is the number is evenly divisble by three or not
// // // I will use a conditional statment to identify what the return for my first parameter is  and keep using an "else if" and "else" to cover the other parameters.
// // // I will have three different console log to return values for each string.


const test1 = (number) => {
    if (number % 3 ==0){
        return `${number} is divisible by three`
    } else {
        return `${number} is not divisible by three`
    }
    }



//     PASS  ./code-challenges.test.js
//     test1
//       ✓ takes a number as an argument and decides if the number is evenly divisble by three or not. (1 ms)
  
//   Test Suites: 1 passed, 1 total
//   Tests:       1 passed, 1 total
//   Snapshots:   0 total
//   Time:        0.138 s, estimated 1 s


// console.log (test1(num1))
// console.log (test1(num2))
// console.log (test1(num3))

// // // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.


// // // a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
describe ("wordsCap", () => {
    it("takes in an array of words and returns an array with all the words capitalized.", 
    () => {
      expect(wordsCap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(wordsCap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
  })

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// Return:)
// ReferenceError: wordsCapitalized is not defined


// // b) Create the function that makes the test pass.

// // // Pesudo Code 
// // // Create a function called wordsCapitalized
// // // My parameter will take in array of words and return an array with all the words capitalized
// // // // I will use the index of each value to capitalize each indiviual strings first letter 
// // // // 

// let wordsCapitalized = (array) => {
//     return array.map (array => array.charAt(0).toUpperCase() + array.slice(1))
// }
   
const wordsCap= (array) => {
    return array.map (array => array.charAt(0).toUpperCase() + array.slice(1))
  }

//   PASS  ./code-challenges.test.js
//   test1
//     ✓ takes a number as an argument and decides if the number is evenly divisble by three or not. (1 ms)
//   wordsCap
//     ✓ takes in an array of words and returns an array with all the words capitalized.

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.139 s, estimated 1 s




// }
// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// // a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe ("firstVowel", () => {
    it("takes in a string and logs the index of the first vowel", 
    () => {
      expect(firstVowel(vowelTester1)).toEqual(1)
      expect(firstVowel(vowelTester2)).toEqual(0)
    })
  })

//   ReferenceError: firstVowel is not defined


// // b) Create the function that makes the test pass.


// Pseudo Coding
// first I am going to create a function called firtVowel
// Then I am going to have it take in a string loop through it so it can idenitfy the first vowel of the value
// I will have it return a new string with new values

const firstVowel = (string) => {
    for (i=0; i < string.length; i++) {
      if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u')
      return string.indexOf(string[i])
    }
  }

//   PASS  ./code-challenges.test.js
//   test1
//     ✓ takes a number as an argument and decides if the number is evenly divisble by three or not. (1 ms)
//   wordsCap
//     ✓ takes in an array of words and returns an array with all the words capitalized.
//   firstVowel
//     ✓ takes in a string and logs the index of the first vowel

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.18 s, estimated 1 s