// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// // --------------------1) What will this log?

// var cohort = "Bravo 2022"
// console.log(cohort.split(""))

// a) Your answer: I believe once we run the split through the string of "Bravo 2022", we will get an array of substrings. This action will break up our array and cause them to each identified as a string. For example: "B", "r", "a" etc...
// b) Verify and explain:

// 'B', 'r', 'a', 'v',
//   'o', ' ', '2', '0',
//   '2', '2'

// The above was my return and as predicted it broke down my string in to substrings by splitting each value indiviually. 


// --------------------2) What will this log?

// const greeter = (name) => {
//  return `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// // a) Your answer: I have to add a return calling in the function because It will give me an undefined return if I do not. 


// // b) Verify and explain:

// As expected I added a return to the function and got back :

// Hello, LEARN Student!



// // --------------------3) What will this log?

// var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// // a) Your answer: I will get each number in the array multlpied by two as a return because I am calling the variable and iterating through each value using the .map function to be multlpied by 2. 

// // b) Verify and explain:

// My response was the following: 

// [ 8, 10, 12, 14, 16 ]
// Indicating that I was correct in mt answer. Each value was multiplied by 2 and the multiplication calling was mapped through each value using .map.

// // --------------------4) What will this log?

// var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// // a) Your answer: Once I run this code, I will receive the value of all the odd numbers located in this array only.Since we are using the .filter function to go through the arrray and by using the boolean remainer value %2 ! == 0  to determine if it is equal to 0 making the value even and only returning an odd value



// // b) Verify and explain:

// As expected I recieved: [ 11, 13, 15 ] as return
// the function ran through the variable and filtered out the numbers and checked for the odd and even numbers using the %2 !==0 boolean value type.

// // --------------------5) What will this log?

// var myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// // a) Your answer: We will get a return of "Javascript". This code is going to access our object, then our languages in our object and then go right to our index of 0 which returns "Javascript" as that is what is in the console log that we are calling back through object destructuring. 

// // b) Verify and explain:

//  As excpected I got a return of "Javascript" since we are just acessing the myCodingSkills object and then the keyvalue property of languages and then the index of 0 in there which is 0. When we console logged it we destructured the object and got access to our exact property through the object.

// // --------------------STRETCH: What will this log?

// class Learn {
//   constructor(name){
//     this.student = name,
//     this.cohort = "Bravo",
//     this.year = 2022
//   }
// }
// var learnStudent = new Learn("George")
// console.log(learnStudent)

// // a) Your answer: I believe that this will return name: "George", cohort: "Bravo" and year: 2022. I believe this because when a string is declared they dont change unless invovked as an argument like it was done here. 

// // b) Verify and explain: As expected, my answer was correct. The class had an inheritance returned as an argument which in this case was George and overrode name as a constant. Cohort and year were already made constants and name was just modified. 
