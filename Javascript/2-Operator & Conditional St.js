//  this is a code that print hello world
// console.log("hello world");



// this is a single line comment

/* this is a multi line comment */


// Operator is Js
// used to perfome some operation on data

// Artimetic Operator

let a = 5;
let b = 2;
let c = 8;
console.log("a = ", a, "& b=", b)
console.log("a+b =", a + b);
console.log("a-b =", a - b);

console.log("--a=", --a);
console.log("a=", a);

console.log("a-- =", a--);
console.log("a=", a);

// =======================================
// assignment Operator
//  to assign value
//  == , =+ , -= , %=  , **=

let a = 5;
let b = 2;

a += 4; // a= a + 4
console.log("a=", a);


a -= 4; // a = a - 4
console.log("a = ", a); // 4

a *= 4; // a = a *4
console.log("a= ", a);

a /= 4; // a = a /= 4
console.log("a=", a);  // 1.5

a % 4; // a = a %= 4
console.log("a=", a);  // 1

a **= 4; // a = a **= 4
console.log("a=", a);  // 625


// comparison operators ===========================

// Equal to  ==
// not euqal to !=
// equal to & type  ===
// not equal to & type !==



let a = 5;
let b = 5;
console.log("5 == 5", a == b);

// ============================================
let a = 5;
let b = "5";
console.log("a == b", a == b);

// ===============================================
let a = 5;
let b = "5";
console.log("a === b", a === b);

// ==================================================
let a = 5;
let b = "5";
console.log("a !== b", a !== b);

// ===================================================
let a = 5;
let b = 5;
console.log("a <= b", a <= b);

// ================================================
let a = 5;
let b = 5;
console.log("a >= b", a >= b);

// ====================================================


// Logical Operator-===================================

// logical and &&
// logial or ||
// logial not !


let a = 6;
let b = 5;

let cond1 = a > b; // true
let cond2 = a === 6; // true
console.log("cond1 && cond2 = ", cond1 && cond2);

// ======================================================

// conditional stement

let age = 25;

if (age >= 25) {
    console.log("you can vote");
}
if (age < 18) {
    console.log("you cannot vote");
}
// ================================================
let mode = "dark";
let color;
if (mode === "dark") {
    color = "black";
}
if (mode === "light") {
    color = "white";
}
console.log(color);

// ===============================================

// odd or even
let num = 10;
if (num % 2 == 0) {
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}

// =================================================

let mode = "dark";
let color;

if (mode == "dark") {
    color = "black";
} else if (mode == "blue") {
    color = "blue";
} else if (mode === "pink") {
    color = "pink";
} else {
    color = "white";
}

console.log(color);

if (mode === "dark") {
    console.log(mode);
}




// ====================================================
// ternary  operators

let age = 16;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);



// practice question

let name = prompt("hello!");
console.log(name);
// =======================================================

let num = prompt("enter a number:");
if (num % 5 == 0) {
    console.log(num, "is multiple of 5");
} else {
    console.log(num, "is NOT a multiple of 5"); 50
}
// ========================================================
let num = prompt("Enter the number:");
num = Number(num); // String ko number mein badalna zaroori hai

if (num >= 90 && num <= 100) {
    console.log("Grade A");
} else if (num >= 70 && num < 80) {
    console.log("Grade B");
} else if (num >= 60 && num < 70) {
    console.log("Grade C");
} else if (num >= 50 && num < 60) {
    console.log("Grade D");
} else {
    console.log("Grade F");
} 50
