// { #1 }
// let score = 33
// let score1 = String(score);
// console.log(score1);
// console.log(typeof score1);

// #1 : 33 ==> converted to String ==> o/p 33 tOf String

// { #2 }
// let score = "33"
// let score1 = Number(score);
// console.log(score1);
// console.log(typeof score1);

// #2 : "33" ==> converted to Number ==> O/P 33 tOf number

// { #3 }
// let score = "33Manoja"
// let score1 = Number(score);
// console.log(score1);
// console.log(typeof score1);

// #3 : "33Manoja" ==> converted to Number ==> O/P NaN tOf number

// { #4 }
// let score = ""
// let score1 = Number(score);
// console.log(score1);
// console.log(typeof score1);

// #4 : "" ==> Converted to Number ==> O/P 0 tOf number

// { #5 }
// let score = null;
// let score1 = Number(score);
// console.log(score1);
// console.log(typeof score1);

// #5 : null ==> Converted to Number ==> O/P 0 tOf number

// { #6 }
// let score = undefined;
// let score1 = Number(score);
// console.log(score1);
// console.log(typeof score1);

// #6 : undefined ==> Converted to Number ==> O/P NaN tOf number

// { String Convertion }
// { #7 }
// let score = null;
// let score1 = String(score);
// console.log(score1);
// console.log(typeof score1);

// #7 : null ==> Converted to String ==> O/P null tOf number

// { #8 }
// let score = undefined;
// let score1 = String(score);
// console.log(score1);
// console.log(typeof score1);

// #8 : undefined ==> Converted to String ==> O/P undefined tOf String


// { Boolean Convertion }
// { #9 }
// let score = 1; // Any number from 1 to any to this Range is => true
// let score1 = Boolean(score);
// console.log(score1);
// console.log(typeof score1);

// #9 : 1 ==> Converted to Boolean ==> O/P true tOf Boolean

// { #10 }
// let score = 0;
// let score1 = Boolean(score);
// console.log(score1);
// console.log(typeof score1);

// #10 : 1 ==> Converted to Boolean ==> O/P false tOf Boolean

// { #11 }
// let score = null;
// let score1 = Boolean(score);
// console.log(score1);
// console.log(typeof score1);

// #11 : null ==> Converted to Boolean ==> O/P false tOf Boolean

// { #12 }
// let score = undefined;
// let score1 = Boolean(score);
// console.log(score1);
// console.log(typeof score1);

// #12 : null ==> Converted to Boolean ==> O/P false tOf Boolean

// { #13 }
// let score = "1"; // ==> anything entered with String "" ==> true ==> tOf Boolean
// let score1 = Boolean(score);
// console.log(score1);
// console.log(typeof score1);