/*
const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");
*/
// temperature value has to be a number for this to work
/*
const temperature = 15;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
*/
/*
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

let temperature = 42;

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

let raining = true;

if (!raining) {
  console.log("Leave your umbrella at home!");
}
*/ 
/*LEARN HOW YOU CAN USE IF CONDITIONAL INSIDE TEMPLATE LITERALS
var num = 99;

while (num > 0) {
    console.log(`${num} ${if(num === 1){console.log('bottle')}else{console.log('bottles')};} of juice on the wall! ${num} ${if(num === 1){console.log('bottle')}else{console.log('bottles')};} of juice! Take one down, pass it around... ${num - 1} ${if(num - 1 === 1){console.log('bottle')}else{console.log('bottles')};} of juice on the wall!`)
    num--;
}
*/
/* Ternary operators are easier inside template literals
var num = 99;

while (num > 0) {
    console.log(`${num} ${num === 1 ? 'bottle': 'bottles'} of juice on the wall! ${num} ${num === 1 ? 'bottle': 'bottles'} of juice! Take one down, pass it around... ${num - 1} ${(num - 1) === 1 ? 'bottle': 'bottles'} of juice on the wall!`)
    num--;
}
*/
/* EXAMPLE of WHILE loop + SWITCH (could've used IF statements)
let time = 60;
while (time >= 0) {
    switch (time) {
        case 50:
            console.log('Orbiter transfers from ground to internal power');
        break;
        case 31:
            console.log('Ground launch sequencer is go for auto sequence start');
        break;
        case 16:
            console.log('Activate launch pad sound suppression system');
        break;
        case 10:
            console.log('Activate main engine hydrogen burnoff system');
        break;
        case 6:
            console.log('Main engine start');
        break;
        case 0:
            console.log('Solid rocket booster ignition and liftoff!');
        break;
        default:
            console.log('T-' + time + ' seconds');
    }
    time-- //be careful about incrementing or decrementin *DO NOT FORGET
} */