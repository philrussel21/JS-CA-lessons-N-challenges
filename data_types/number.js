let step0 = 0;

// 01. Use the number above as the starting point.
//     Add 10 to it.
//     Then subtract 15. 
//     Then, multiply that by 3.
//     Finally, subtract 3.
//     After all that, save that new number to the step1 variable below.
let step1 = ((step0 + 10) - 15) * 3 - 3;

// 02. Find out the absolute number for the step1 variable, 
//     and save that as the step2 variable.
let step2 = Math.abs(step1);



// 03. Take the number from the step2 variable, divide it by 4, 
//     and save the result as the step3 variable. 
//     Then, round the value of step3 down to the nearest whole number.
let step3 = Math.floor(step2 / 4);


// 04. Take the number from step3 and find out the square root of that number.
//     Note: Don't manually divide the number yourself.
//           Find out what methods JS has to handle this!
let step4 = Math.sqrt(step3);


// 05. Generate a random whole number between 1 & 100 inclusive.
//     Save that number as step5.
let step5 = Math.round(Math.random() * 100);



// 06. Divide the number in step5 by the number in step4. 
//     Save the remainder as step6.
let step6 = step5 % step4;
