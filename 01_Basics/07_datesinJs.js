let date = new Date();
// console.log(date);

// console.log(date.getFullYear());
// console.log(date.getMonth()+1);
let currentDate = new Date();
// console.log(currentDate.toString()); // Sat Mar 28 2026 16:34:01 GMT+0000 (Coordinated Universal Time)
// console.log(currentDate.toDateString()); // Sat Mar 28 2026
// console.log(currentDate.toISOString()) // 2026-03-28T16:36:30.202Z
// console.log(currentDate.toJSON()) // 2026-03-28T16:37:08.524Z
// console.log(currentDate.toLocaleDateString()) // 3/28/2026
// console.log(currentDate.toLocaleString()) // 3/28/2026, 4:39:07 PM
// console.log(currentDate.toLocaleTimeString()) // 4:39:30 PM
// console.log(currentDate.toTimeString()) // 16:40:25 GMT+0000 (Coordinated Universal Time)
// console.log(currentDate.toUTCString()) //Sat, 28 Mar 2026 16:40:46 GMT

let newDate = new Date(2003,6,18,23,30)

// console.log(newDate.toLocaleString());

let oneMoreDate = new Date("2003-07-18")
console.log(oneMoreDate.toLocaleDateString());

let myTimestamp = Date.now();

console.log(myTimestamp);
console.log(newDate.getTime());

console.log(newDate.getSeconds());

