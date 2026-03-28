const myArr = [0, 1, 2, 3, 4]
// console.log(myArr);
// myArr.push(5)
// myArr.push(5)
// console.log("A ", myArr);
// myArr.pop()
// console.log("Deleted Array ", myArr)

const myHero = ["iron man", "super man", "bat man"]
// console.log(myHero);

const myArr2 = new Array(5, 4, 3, 2, 1, 0)
// myArr2.unshift(6)
// console.log("A ", myArr2)
// myArr2.shift()
// console.log("B ", myArr2)


// ******* slice And splice *******
const myNewArr = myArr.slice(0, 4)
console.log("A ", myNewArr);

const myNewArr2 = myArr.splice(1, 2)
console.log(myNewArr2)
console.log("B ", myArr)