// Some variables for use throughout these steps...
let var1 = '';
let var2 = '99';
let var3 = null;
let var4 = 99;
let var5 = undefined;
let var6 = true;
let var7 = false;
let var8 = "Default Username";


// 01. Using only equals signs, 
//     Check if var2 and var4 
//     have the same value.
//     Save the resulting true/false into step1 below.
let step1 = var2 == var4;
console.log(step1)



// 02. Using only equals signs, 
//     Check if var2 and var4 
//     have the same value AND datatype.
//     Save the resulting true/false into step2 below.
let step2 = var2 === var4;
console.log(step2)



// 03. Using short circuit logic, 
//     check if any odd-numbered variable from above
//     is a truthy value. 
//     Save the result to the step3 variable below.
let step3 = (var1 || var3 | var5 || var7);
console.log(step3)


// 04. Using short circuit logic,
//     save the value of var3 to step4 
//     but only if var3 is not null.
//     If var3 is null, save var8 to step4.
//     Do NOT use if or if-else statements here.
//     Use short circuit logic!
let step4 = (var3 || var8);
console.log(step4)
