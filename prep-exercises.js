/*
// function for module 4 conditionals activity
const whichSchool = function (age) {
  if (age < 13) {
    return 'Elementary School';
  } else if (age >= 13 && age <= 18) {
    return 'Secondary School';
  } else {
    return 'Lighthouse Labs';
  }
}

// let age = 17; //testing it with a variable
console.log(whichSchool(25));
*/
//Loopy Lighthouse problem
for (let num = 100; num <= 200; num++) {
//check if the number is divisible by both 3 and 4
  if (num % 3 === 0 && num % 4 === 0) {
    console.log('LoopyLighthouse');
//check if the number is divisible by 3 /n
//*remember that this would only run if the first if statement is false
  } else if (num % 3 === 0) {
    console.log('Loopy');
//divisble by 4?
  } else if (num % 4 === 0) {
    console.log('Lighthouse');
 //just pring the number 
  } else {
    console.log(num);
  }
}