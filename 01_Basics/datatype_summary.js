// Primitive DataType 

// Number, string, boolean, null, undefined, bigInt

// Non Primitive DataType

// array, object, function

const arr = ["Manoja", "Abhi", "Bathu"];


const myObj = {
    name : "Manoja S S",
    age : 22
}
const printName = function(){
    console.log("My Name is Manoja");
}
console.log(arr);
console.log(myObj);


// ++++++++++++++++++ Stack Memory and Heap Memory +++++++++++++++++++

// Stack(Primitive),  Heap(Non-Primitive)

let myName = "Manoj"

let anotherName = myName;
anotherName = "Manoja S S"
console.log(anotherName);
console.log(myName);

console.log("-------------------------------");

let userOne = {
    emailId: "userone@gmail.com",
    upiId: "uerone@kbl",
    isActive: true
}

let userTwo = userOne;
userTwo.emailId = "userTwo@gamil.com";
userTwo.upiId = "userTwo@kbl",
userTwo.isActive = false
console.log(userOne);
console.log(userTwo);